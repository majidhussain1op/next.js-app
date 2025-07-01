"use client"
import { cn } from '@/lib/utils';
import { Product } from '@/sanity.types';
import React from 'react'
import { Button } from './ui/button';
import { ShoppingBag } from 'lucide-react';


interface Props{
    product:Product;
    className:string
}
const AddToCartButton = ({product, className}:Props) => {
    const isOutOfStock = product?.stock === 0;
    const handleAddToCart = () =>{
        window.alert("Add to Cart")
    }
  return (
    <Button 
    onClick={handleAddToCart}
    disabled={isOutOfStock}
    className={cn(
            "w-full bg-shop_dark_green/80 text-white shadow-none border border-shop_dark_green/80 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
            className
          )}>
      
      <ShoppingBag/>{isOutOfStock ? "Out of Stock" : "Add to Cart"}
    </Button>
  )
}

export default AddToCartButton
