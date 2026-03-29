"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

interface ContactDialogProps {
  children: React.ReactNode
}

export function ContactDialog({ children }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-zinc-900 border-zinc-800 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">Свяжитесь со мной</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 pt-4">
          <p className="text-zinc-400">
            Напишите мне в Telegram, и я отвечу в ближайшее время.
          </p>
          <Button
            asChild
            className="w-full bg-[#5100fd] hover:bg-[#6610ff] text-white py-6 rounded-full cursor-pointer"
          >
            <a 
              href="https://t.me/LastTryS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Send className="h-5 w-5" />
              Перейти в Telegram
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
