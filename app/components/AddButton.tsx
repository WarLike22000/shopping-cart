"use client";

import { Button } from "@/components/ui/button";
import useCart from "../hooks/useCart";
import { fullProduct } from "@/interface/interface";
import { FC, useEffect, useState } from "react";
import { Minus, Plus } from "lucide-react";

interface AddButtonProps {
    data: fullProduct
}

const AddButton: FC<AddButtonProps> = ({
    data
}) => {

    const [mounted, setMounted] = useState(false);
    const { addItem, items, increase, decrease, removeItem } = useCart();
    const product = items.find((item) => item._id == data._id);

    const handleDecrease = () => {
      if(product?.quantity! >= 1) {
        decrease(data);
      }
      if(product?.quantity! == 1) {
        removeItem(data._id);
      }
    }
    
    useEffect(() => {
      setMounted(true)
    }, []);

    if(!mounted) {
      return null
    }
    console.log(product?.quantity!)
      if(product?.quantity! == undefined) {
        return (
          <Button onClick={() => addItem(data)}>افزودن به سبد</Button>
        )
      }

        return (
          <div className="flex items-center gap-x-2">
        <Plus size={35} className="p-2 rounded-full text-neutral-600 cursor-pointer hover:bg-neutral-300 transition-colors" onClick={() => increase(data)} />
        <span className="text-primary text-lg">
          {product?.quantity}
        </span>
        <Minus size={35} className="p-2 rounded-full text-neutral-600 cursor-pointer hover:bg-neutral-300 transition-colors" onClick={handleDecrease} />
      </div>
        )
}

export default AddButton
