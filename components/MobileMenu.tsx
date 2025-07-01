"use client"

import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import SideMenu from './SideMenu'

const MobileMenu = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
     <button onClick={()=> setSidebarOpen(!isSidebarOpen)}>
    <AlignLeft className='hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer'/>    
    </button> 
    <div className='md:hidden'>
      <SideMenu 
      isOpen={isSidebarOpen}
      onClose={() => setSidebarOpen(false)}
      />
    </div>
    </>
  )
}

export default MobileMenu
