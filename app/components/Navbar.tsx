"use client";

import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useCartModal } from '../hooks/useCartModal';

const links = [
    {name: "خانه", href: "/"},
    {name: "دوربین", href: "/camera"},
    {name: "لنز", href: "/lens"},
    {name: "کیف دوربین", href: "/bag"},
]

const Navbar = () => {

    const pathname = usePathname();
    const { onOpen } = useCartModal();
    
  return (
    <header className="mb-8 border-b">
        <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
            <Link href="/">
                <h1 className="text-2xl md:text-4xl font-bold">
                    Next<span className="text-primary">Commerce</span>
                </h1>
            </Link>

            <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`
                             text-lg font-semibold transition duration-100 hover:text-primary
                             ${pathname === link.href ? "text-primary" : "text-gray-600"}
                        `}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>

            <div className="flex divide-x border-t sm:border-l">
                <Button
                    variant={'outline'}
                    className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24"
                    onClick={() => onOpen()}
                >
                    <ShoppingBag />
                    <span className='hidden text-sm font-semibold text-gray-500 sm:block'>
                        سبد
                    </span>
                </Button>
            </div>
        </div>
    </header>
  )
}

export default Navbar;

