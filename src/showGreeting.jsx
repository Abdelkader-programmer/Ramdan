import './App.css';
import Zekr from './imgs/Zekr.webp'
import { useState } from 'react';

export default function ShowGreeting({name}){
    const [close , setClose] = useState(true);

    function handleClose(){
        setClose(false)
    }

    return(
        <>
            {close&& (
                <div onClick={handleClose} className='w-full fixed top-0 z-20 setShow'>
                    <div className='w-full h-screen bg-black/85 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
                        <div></div>
                        <div className='w-[90%] m-auto grid items-center text-center p-2'>
                            <h1 className='IslamicFont text-center text-white IslamicFont2 text-8xl' >رمضان كريم</h1>
                            <h2 className='IslamicFont text-center mt-5 text-white IslamicFont2 text-7xl flex justify-center gap-5'><p>{name}</p> يا</h2>

                            <p className='mt-8 text-white text-4xl IslamicFont IslamicFont2'>🌙 رمضان كريم</p>
                            <p className='mt-7 text-white text-3xl IslamicFont IslamicFont2'> أعاده الله عليكم بالخير والصحة والسعادة</p>

                            <img src={Zekr} alt="Zekr" className='mt-5 m-auto w-[50%] rounded-full border-4 border-white' />
                        </div>
                        <div></div>
                    </div>
                </div>
            )}
        </>
    )
}