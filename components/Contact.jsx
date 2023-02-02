import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='grid max-w-[1240px] mx-auto p-10 h-screen place-items-center'>
        

        <h3 className='text-2xl font-bold text-center p-4'>Contact</h3>
        <form className='max-w-[600px] m-auto'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3 rounded-xl dark:border-gray-500' type="text" placeholder='Name' />
                <input className='border shadow-lg p-3 rounded-xl dark:border-gray-500' type="email" placeholder='Email' />
            </div>
            <input className='border shadow-lg p-3 w-full my-2 rounded-xl dark:border-gray-500' type="text" placeholder='Subject' />
            <textarea className='border shadow-lg p-3 w-full rounded-xl dark:border-gray-500' cols="30" rows="10" placeholder='Message'></textarea>
            <button className='border shadow-lg p-3 w-full mt-2  rounded-xl dark:border-gray-500'>Submit</button>
        </form>
    
        
    </div>
  )
}

export default Contact