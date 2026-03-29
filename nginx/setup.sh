#!/bin/bash

# Скрипт установки nginx конфигурации для Portfolio
# Запускать с sudo: sudo bash setup.sh

echo "=== Установка nginx для Portfolio ==="

# Копируем конфигурацию
sudo cp portfolio.conf /etc/nginx/sites-available/portfolio

# Создаем симлинк
sudo ln -sf /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio

# Удаляем дефолтный сайт (опционально)
# sudo rm -f /etc/nginx/sites-enabled/default

# Проверяем конфигурацию
echo "Проверка конфигурации nginx..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "Конфигурация корректна. Перезапускаем nginx..."
    sudo systemctl reload nginx
    echo "=== Готово! Сайт доступен по http://159.194.212.63 ==="
else
    echo "Ошибка в конфигурации nginx!"
    exit 1
fi

echo ""
echo "=== Команды для запуска Next.js ==="
echo "cd /var/www/site/portfolio"
echo "npm run build"
echo "npm run start"
echo ""
echo "Или используйте PM2:"
echo "pm2 start npm --name 'portfolio' -- start"
echo "pm2 save"
echo "pm2 startup"
