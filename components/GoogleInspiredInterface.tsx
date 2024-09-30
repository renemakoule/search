"use client"

import { useState } from "react"
import {
  Search,
  Menu,
  Grid,
  Mail,
  Calendar,
  Settings,
  HardDrive,
  User,
  CreditCard,
  LogOut,
  X,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ]
   
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <div className="min-h-screen bg-pink-100/95">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-4">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Button variant="ghost" className="justify-start">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Facturation</span>
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Paramètres</span>
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Déconnexion</span>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
            <h1 className="text-2xl font-semibold text-gray-900">Minato.ai</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Grid className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/tenis.png"
                alt="User avatar"
                className="rounded-full"
                width={32}
                height={32}
              />
            </Button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Mail, label: "Gmail" },
              { icon: HardDrive, label: "Drive" },
              { icon: Calendar, label: "Calendar" },
              { icon: Settings, label: "Settings" },
            ].map((item, index) => (
              <Button
                key={index}
                variant="outline"
                className="h-24 flex flex-col items-center justify-center bg-white hover:bg-gray-50 transition-colors"
              >
                <item.icon className="h-8 w-8 mb-2" />
                <span>{item.label}</span>
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}