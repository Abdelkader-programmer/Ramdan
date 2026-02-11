import './App.css';
import UnKnown from './imgs/UnKnown.webp'
import { useState } from 'react';

export default function UnKnownName(){

    const [close , setClose] = useState(true);

    function handleClose(){
        setClose(false);
    }

    return(
        <>
            {close &&(
                <div onClick={handleClose} className='w-full fixed top-0 z-20 setShow'>
                    <div className='w-full h-screen bg-black/85 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
                        <div></div>
                        <div className='w-[90%] m-auto grid items-center'>
                            <img src={UnKnown} alt="UnKnown" className="rounded-3xl border-4 border-pink-300" />
                        </div>
                        <div></div>
                    </div>
                </div>
            )}
        </>
    )
}