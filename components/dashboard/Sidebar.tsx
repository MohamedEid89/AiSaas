
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { BotMessageSquare, ImageDown, Settings, LayoutDashboard, MessagesSquare } from 'lucide-react'

const routes = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    color: "text-sky-500"
  },
  {
    label: 'Assistans',
    href: '/assistans',
    icon: BotMessageSquare,
    color: "text-sky-500"
  },
  {
    label: 'Conversations',
    href: '/conversations',
    icon: MessagesSquare,
    color: "text-sky-500"
  },
  {
    label: 'Image Generation',
    href: '/dashboard',
    icon: ImageDown,
    color: "text-sky-500"
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings,
    color: "text-sky-500"
  }
]
export const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className='flex items-center pl-3 mb-14'>
          <div className='relative w-10 h-10 mr-4'>
            <Image fill alt='logo' src='/logo.png' />
          </div>
          <h1 className={cn("text-2xl fonr-bold")}>HFG Services</h1>
        </Link>
        <div className='space-y-1'>
            {routes.map((route) => (
              <Link href={route.href} key={route.href}     className="text-sm group flex w-full justify-start font-medium cursor-pointer hover:bg-sky-900 rounded-lg transition animate-in hover:translate-x-6 active:translate-x-6 hover:border-l-2 hover:border-amber-500 active:border-l-2 active:border-amber-500">
                <div className='flex items-center flex-1 bg-sky-900  hover:bg-white/10 rounded-lg p-3'>
                  <route.icon className={cn("h-5 w-5 mr-3" , route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
        </div>

      </div>
    </div>
  )
}
