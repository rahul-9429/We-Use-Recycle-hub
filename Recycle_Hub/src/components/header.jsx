import React from 'react'

const header = () => {
  return (
    <div>
        <div className='flex justify-between items-center'>
            <div>We Use</div>
            <div className='bg-emerald-500 px-8 py-2 rounded-full'>
                <ul className='flex gap-x-32'>
                    <li>home</li>
                    <li>how it works</li>
                    <li>book your slot</li>
                </ul>
            </div>
            <div>Profile</div>
        </div>
    </div>
  )
}

export default header