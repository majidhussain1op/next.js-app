import React from 'react'
import PriceFormatter from './PriceFormatter';
import { cn } from '@/lib/utils';
import { twMerge } from 'tailwind-merge';


interface Props {
    price :number | undefined;
    discount: number | undefined;
    className?:string
}

const PriceView = ({price, discount, className}: Props) => {
  return (
    <div className='flex items-center justify-between gap-5'>
      <div className='flex items-center gap-2'>
        <PriceFormatter 
        amount={price}
        className={cn("text-shop_dark_green")}
        />
        {price && discount && (
            <PriceFormatter 
            amount={price + (discount * price) / 100}
            className={twMerge("line-through tex-xs font-normal text-zinc-500")}
            />
        )}
      </div>
    </div>
  )
}

export default PriceView
