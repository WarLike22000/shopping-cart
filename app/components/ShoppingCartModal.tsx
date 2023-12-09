"use client";

import useCart from "../hooks/useCart";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
  import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartModal } from "../hooks/useCartModal";
import { urlFor } from "../lib/sanity";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

const ShoppingCartModal = () => {

    const [mounted, setMounted] = useState(false);
    const { items, removeItem } = useCart();
    const { isOpen, onClose } = useCartModal();

    const total = items.reduce((total, item) => {
        const totalPrice = total + item.price * item.quantity!
        return totalPrice
    }, 0)

    const textToast = items.length === 0 ? "سبد خالی است" : "فروشگاه به درگاه پرداخت متصل نیست"
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if(!mounted) {
        return null
    }
    
  return (
    <Sheet open={isOpen} onOpenChange={() => onClose()}>
        <SheetContent className="sm:max-w-lg w-[90vw]">
            <SheetHeader>
                <SheetTitle>سبد خرید</SheetTitle>
            </SheetHeader>

            <div className="h-full flex flex-col justify-between">
                <div className="mt-8 flex-1 overflow-y-auto">
                    <ul className="my-6 divide-y divide-gray-200">
                        {items.length === 0 ? (
                            <h1 className="text-lg text-gray-700 text-center">
                                هیچ محصولی را برای خرید انتخاب نکرده اید
                            </h1>
                        ) : (
                            items.map((item) => (
                                <li key={item._id} className="flex flex-col gap-y-3 sm:flex-row py-6">
                                    <div className="h-fit w-24 flex-shrink overflow-hidden rounded-md border border-gray-100">
                                        <Image
                                            src={urlFor(item.images[0]).url()}
                                            alt="ProductImage"
                                            width={100}
                                            height={100}
                                        />
                                    </div>

                                    <div className="mr-4 flex flex-1 flex-col">
                                        <div>
                                            <div className="flex gap-x-2 flex-wrap gap-y-2 justify-between text-base font-medium text-gray-900">
                                                <h3 className="text-sm sm:text-base">{item.name}</h3>
                                                <p className="text-sm sm:text-base">{item.price.toLocaleString()} تومان</p>
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                                {item.description}
                                            </p>
                                        </div>

                                        <div className="flex mt-1 flex-1 items-center justify-between text-sm">
                                            <p className="text-gray-800">
                                            تعداد: {item.quantity}
                                            </p>

                                            <div className="flex">
                                                <Button
                                                    onClick={() => removeItem(item._id)}
                                                    variant={"ghost"} 
                                                    className="text-primary font-medium hover:text-primary/80">
                                                    حذف
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) }
                    </ul>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>مجموع:</p>
                        <p className="flex items-center gap-x-2">
                            {total.toLocaleString()}
                            <p>
                                تومان
                            </p>
                        </p>
                    </div>

                    <div className="mt-6">
                        <Button onClick={() => toast(textToast)} className="w-full">
                            خرید
                        </Button>
                    </div>
                </div>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default ShoppingCartModal
