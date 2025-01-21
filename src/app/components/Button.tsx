import Link from 'next/link'
import React from 'react'

const Button = () => {
  return (
    <div className='mx-auto max-w-[1440px]'>
        <Link href={"/Shop"}>
        <button className='flex font-bold text-yellow-500 items-center text-center justify-center border border-yellow-600 w-[200px] h-[50px] m-3 p-4 mx-auto rounded hover:bg-yellow-500 hover:text-white '>
            shop more
     </button>
     </Link>
    </div>
  )
}

export default Button