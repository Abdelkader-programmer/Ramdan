import './App.css';
import MoonGreeting from './imgs/MoonGreeting.webp'
import Button from '@mui/material/Button';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import { useState , useRef } from 'react';
import ShowGreeting from './showGreeting';
import UnKnownName from './UnKnownName';
import audio from './audio/تهنئة رمضان.MP3';


export default function RamadanGreetings(){

    const [name ,setName] = useState("");

    const [showName , setShowName] = useState("");

    const [showComponent , setShowComponent] = useState(false);

    const [showGreeting , setShowGreeting] = useState(false);

    const [keyValue, setKeyValue] = useState(0);

    const [keyGreeting, setKeyGreeting] = useState(0);

    const PlayAudio = useRef(null);



    function handleNameClick(){
        if (name == ""){
            setShowComponent(true)
            setKeyValue(prev => prev + 1)
        }else{
            setShowGreeting(true)
            setShowName(name);
            setKeyGreeting(prev => prev +1)
            PlayAudio.current.play();
        }
    }


    return(
        <>
            <section>
                <div className='w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 setShow'>
                    <div></div>
                    <div className='w-[95%] m-auto border-4 border-white rounded-3xl p-4 mt-20'>
                        <div className='w-full flex justify-center gap-5'>
                            <img src={MoonGreeting} alt="MoonGreeting" className='w-20 h-20' />
                            <h1 className='text-5xl IslamicFont text-center text-white IslamicFont2 mt-2 marg'>تهنئة رمضان</h1>
                        </div>
                        <div className='w-full text-center'>
                            <label className='text-5xl IslamicFont text-center text-white IslamicFont2 mt-auto' htmlFor="inp">اكتب الاسم</label><br />
                            <input type="text"
                            value={name}
                            onChange={(event)=>setName(event.target.value)}
                            id='inp' className='w-[90%] mt-10 p-2 bg-white text-black text-center border-2 border-pink-500 rounded-3xl outline-0 focus:bg-pink-500 focus:shadow-sm focus:shadow-white' placeholder='الاسم هنا' />
                            {/* audio */}
                            <audio src={audio} ref={PlayAudio}></audio>
                            {/* ----- */}
                            <Button onClick={handleNameClick} variant="contained" color='error' sx={{width: "100px" , height: "50px" , marginTop: "40px"}}><MarkAsUnreadIcon /></Button>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>

            {/* show Greeting */}
            {(showGreeting && <ShowGreeting key={keyGreeting} name={showName} />)}

            {(showComponent && <UnKnownName key={keyValue} />)}
        </>
    )
}