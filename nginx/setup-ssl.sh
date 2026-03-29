#!/bin/bash

# Скрипт установки SSL с Certbot для Portfolio
# Домены: nice-sites.ru, nice-sites.online
# Запускать с sudo: sudo bash setup-ssl.sh

set -e

echo "=== Установка SSL для Portfolio ==="
echo "Домены: nice-sites.ru, nice-sites.online"
echo ""

# 1. Установка Certbot
echo "=== Шаг 1: Установка Certbot ==="
apt update
apt install -y certbot python3-certbot-nginx

# 2. Создаем директорию для challenge
mkdir -p /var/www/html/.well-known/acme-challenge

# 3. Временный конфиг для получения сертификата (только HTTP)
echo "=== Шаг 2: Временный nginx конфиг ==="
cat > /etc/nginx/sites-available/portfolio-temp << 'EOF'
server {
    listen 80;
    listen [::]:80;
    
    server_name nice-sites.ru www.nice-sites.ru nice-sites.online www.nice-sites.online;
    
    location /.well-known/acme-challenge/ {
        root /var/www/html;
    }
    
    location / {
        return 200 'OK';
        add_header Content-Type text/plain;
    }
}
EOF

ln -sf /etc/nginx/sites-available/portfolio-temp /etc/nginx/sites-enabled/portfolio
rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true

nginx -t && systemctl reload nginx

# 4. Получаем сертификаты
echo "=== Шаг 3: Получение SSL сертификатов ==="
echo ""
echo "ВАЖНО: Убедитесь, что DNS записи указывают на этот сервер!"
echo "A запись nice-sites.ru -> 159.194.212.63"
echo "A запись www.nice-sites.ru -> 159.194.212.63"
echo "A запись nice-sites.online -> 159.194.212.63"
echo "A запись www.nice-sites.online -> 159.194.212.63"
echo ""
read -p "DNS настроены? (y/n): " dns_ready

if [ "$dns_ready" != "y" ]; then
    echo "Настройте DNS и запустите скрипт снова"
    exit 1
fi

# Получаем сертификат для nice-sites.ru
echo "Получаем сертификат для nice-sites.ru..."
certbot certonly --webroot -w /var/www/html \
    -d nice-sites.ru -d www.nice-sites.ru \
    --non-interactive --agree-tos \
    --email admin@nice-sites.ru \
    --no-eff-email

# Получаем сертификат для nice-sites.online
echo "Получаем сертификат для nice-sites.online..."
certbot certonly --webroot -w /var/www/html \
    -d nice-sites.online -d www.nice-sites.online \
    --non-interactive --agree-tos \
    --email admin@nice-sites.online \
    --no-eff-email

# 5. Устанавливаем финальный SSL конфиг
echo "=== Шаг 4: Установка SSL конфигурации nginx ==="
cp portfolio-ssl.conf /etc/nginx/sites-available/portfolio

nginx -t
if [ $? -eq 0 ]; then
    systemctl reload nginx
    echo ""
    echo "=== ГОТОВО! SSL установлен ==="
    echo "Сайт доступен по:"
    echo "  https://nice-sites.ru"
    echo "  https://nice-sites.online"
else
    echo "Ошибка в конфигурации nginx!"
    exit 1
fi

# 6. Настраиваем автообновление
echo ""
echo "=== Шаг 5: Автообновление сертификатов ==="
systemctl enable certbot.timer
systemctl start certbot.timer

echo ""
echo "=== Проверка автообновления ==="
certbot renew --dry-run

echo ""
echo "=== Все готово! ==="
echo ""
echo "Команды для управления:"
echo "  certbot certificates          - список сертификатов"
echo "  certbot renew                  - обновить сертификаты"
echo "  certbot renew --dry-run        - тест обновления"
echo "  systemctl status certbot.timer - статус автообновления"
