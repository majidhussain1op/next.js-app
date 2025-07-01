import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Props{
    className?:string;
    iconClassName?:string;
    tooltipClassName?:string;
}

const socialLink = [
    {
        title: "Github",
        href: "https://github.com/majidhussain1op/majidhussain1op.git",
        icon: <Github className="w-5 h-5"/>
    },
    {
        title: "Youtube",
        href: "https://youtube.com/@majid-mirani",
        icon: <Youtube className="w-5 h-5"/>
    },
    {
        title: "LinkedIn",
        href: "https://linkedin.com/in/majid-hussain-102a53248",
        icon: <Linkedin className="w-5 h-5"/>
    },
    {
        title: "Instagram",
        href: "https://instagram.fkhi4-4.fna.fbcdn.net/v/t51.2885-19/241253394_20930384458",
        icon: <Instagram className="w-5 h-5"/>
    },
    {
        title: "Facebook",
        href: "https://www.facebook.com",
        icon: <Facebook className="w-5 h-5"/>
    },
    {
        title: "Twitter (X)",
        href: "https://www.twitter.com",
        icon: <Twitter className="w-5 h-5"/>
    }
]

const SocialMedia = ({className, iconClassName, tooltipClassName}: Props) => {
  return (
    <TooltipProvider>
        <div className={cn("flex items-center gap-3.5", className)}>
            {socialLink?.map((item)=>(

            
      <Tooltip key={item?.title}>
        <TooltipTrigger asChild>
            <Link key={item?.title}
            target='blank'
            rel='noopener noreferrer'
            href={item?.href}
            className={cn('p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect', iconClassName)}
            >
            {item?.icon}
            </Link>
        </TooltipTrigger>
        <TooltipContent className={cn("bg-white text-darkColor font-semibold border border-red-100", tooltipClassName)}>
            {item?.title}
        </TooltipContent>
      </Tooltip>
      ))}
      </div>
    </TooltipProvider>
  )
}

export default SocialMedia
