import React from 'react'

const LoadApp: React.FC = () => {
    return (
        <div className='h-[40vh] m-4 flex-col  flex md:flex-row items-center justify-center gap-4'>
            <img src="/images/play_store.png" alt="app Store" className='cursor-pointer' />
            <img src="/images/app_store.png" alt="app Store" className='cursor-pointer' />
        </div>
    )
}

export default LoadApp
