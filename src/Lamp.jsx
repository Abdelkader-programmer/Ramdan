import './App.css';
import bakar from './imgs/Bakar.webp';
import basant from './imgs/basant.webp';
import fatota from './imgs/fatota.webp';
import foad from './imgs/foad.webp';
import madfa from './imgs/Madfa.webp';
import mosaher from './imgs/Mosaher.webp';
import tamtam from './imgs/tamtam.webp';

export default function RamadanLamp(){
    return(
        <>
            <div className='w-full p-0.5 bg-white mt-15'></div>
            <div className='flex justify-around'>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-red-600 shadow'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-blue-600 shadow1'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-green-600 shadow2'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-yellow-300 shadow3'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-purple-600 shadow4'></div>
            </div>
            <div className='w-full p-0.5 bg-white mt-15'></div>
            <div className='flex justify-around'>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-blue-600 shadow1'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-yellow-300 shadow3'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-red-600 shadow'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-purple-600 shadow4'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-green-600 shadow2'></div>
            </div>
            <div className='w-full p-0.5 bg-white mt-15'></div>
            <div className='flex justify-around'>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-purple-600 shadow4'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-green-600 shadow2'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-yellow-300 shadow3'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-blue-600 shadow1'></div>
                <div className='w-10 h-15 bg-white triangle rounded-full border-b-8 border-red-600 shadow'></div>
            </div>

            <div>
                <marquee behavior="" direction="right" className="mt-15">
                    <div className='w-full flex justify-around'>
                        <img src={bakar} alt="bakar" className='w-20 h-30 rotate-y-180' />
                        <img src={basant} alt="basant" className='w-20 h-30' />
                        <img src={fatota} alt="fatota" className='w-20 h-30' />
                        <img src={foad} alt="foad" className='w-20 h-30' />
                        <img src={madfa} alt="madfa" className='w-20 h-30' />
                        <img src={mosaher} alt="mosaher" className='w-20 h-30' />
                        <img src={tamtam} alt="tamtam" className='w-20 h-30' />
                    </div>
                </marquee>
            </div>
        </>
    )
}