import './App.css';
import counter from './imgs/counter.webp';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useState } from 'react';

export default function Counter(){

    const [num , setNum] = useState(0)

    function handleClickCounter(){
        const Number = num + 1 ;
        setNum(Number)
    }

    function handleClickReCounter(){
        setNum(0)
    }

    return(
        <>
            <section>
                <div className='w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 setShow'>
                    <div></div>
                    <div className='w-[95%] m-auto border-4 border-white rounded-3xl p-4 mt-20'>
                        <div className='w-full flex justify-center gap-5'>
                            <img src={counter} alt="KoranImg" className='w-20 h-20' />
                            <h1 className='text-5xl IslamicFont text-center text-white IslamicFont2 mt-2 marg'>السبحة</h1>
                        </div>
                        <div className='w-full mt-10'>
                            <div className='w-[95%] m-auto p-4 py-7 border-4 border-pink-500 rounded-tl-3xl rounded-tr-3xl rounded-bl-4xl rounded-br-4xl'>
                                <div className='w-full border-2 border-pink-500 bg-white py-2 text-3xl text-center rounded-2xl'>{num}</div>
                                <p className='text-2xl IslamicFont text-center text-white IslamicFont3 mt-5'>السبحة</p>
                                <div className='w-full flex justify-end mt-10 px-5'>
                                    <Button onClick={handleClickReCounter} variant="outlined" color='secondary' sx={{borderRadius : "100%" , padding : "15px" , borderWidth : "5px"}}><ReplayIcon /></Button>
                                </div>
                                <div className='w-full flex justify-center mt-2'>
                                    <Button onClick={handleClickCounter} color="secondary" variant="contained"  sx={{borderRadius : "100%" , padding : "15px" , borderWidth : "5px"}}><AdjustIcon sx={{width : "45px" , height : "45px"}} /></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    )
}