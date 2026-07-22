import React from 'react'
import { Button } from './button'
import Link from 'next/link'

const links = [{
  name: "Dashboard",
  href: "/"
}, {
  name: "Practice",
  href: "/"
}, {
  name: "Roadmap",
  href: "/"
}]
const Navbar = () => {
  return (
    <nav className='flex w-full justify-between items-center px-6 py-4'>
      <h1 className='text-[#C0C1FF] font-semibold'>CodePilot AI</h1>
      <div className='flex gap-5 text-sm  text-[#C7C4D7]'>
        {links.map((link, index) => (
          <Link key={index} href={link.href}  className='hover:text-[#C0C1FF] transition-colors'>
            {link.name}
          </Link>
        ))}
      </div>
      <Button className='rounded-md bg-[#C0C1FF] text-[#060E20] hover:bg-[#C0C1FF]/90 cursor-pointer'>
      <Link href={'/sign-up'}>
        Start Mock Interview
      </Link> 
      </Button>
    </nav>
  )
}

export default Navbar