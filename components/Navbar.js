import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <nav className='h-16 bg-purple-700 flex justify-between px-3 items-center text-white'>
            <div className='logo font-bold text-lg'>
                <Link href="/shortner">BitShortner</Link>
            </div>
            <ul className='flex justify-center gap-4 items-center'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/"><li>About</li></Link>
                <Link href="/shortner"><li>Shortner</li></Link>
                <Link href="/"><li>Contact Us</li></Link>
                <li className='flex gap-3'>
                    <Link href="/shortner"> <button className='bg-purple-500 p-3 py-1 font-bold rounded-full shadow-lg'>Try Now</button></Link>
                    <Link href='/github_bitlink'> <button className=' bg-purple-500 p-3 py-1 font-bold rounded-full shadow-lg'>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar