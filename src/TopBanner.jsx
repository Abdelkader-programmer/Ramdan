import './App.css';
import Container from '@mui/material/Container';
import moon from './imgs/ramadan-moon.png';

export default function TopBanner(){
    return(
        <>
            <Container>
                <div className='w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>
                    <div className="w-full lg:col-span-1 md:col-span-1">
                        <img src={moon} alt="imgs" className='m-auto' />
                    </div>
                    <div className="w-full lg:col-span-2 md:col-span-2">
                        <h1 className='IslamicFont text-center text-white IslamicFont2 text-9xl mt-20 mar'>رمضان كريم</h1>
                    </div>
                </div>
            </Container>
        </>
    )
}