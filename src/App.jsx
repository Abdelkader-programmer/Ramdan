import * as React from 'react';
import './App.css';
import { Routes , Route , Link } from 'react-router-dom';
import TopBanner from './TopBanner';
import Container from '@mui/material/Container';
import RamadanLamp from './Lamp';
import EmailIcon from '@mui/icons-material/Email';
import BookIcon from '@mui/icons-material/Book';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import lantern from './imgs/fanose.webp';
import RamadanGreetings from './RamadanGreetings';
import Koran from './Koran';
import Counter from './Counter'
import Footer from './Footer';

function App() {

  return (
    <>
      {/* top */}
      <header>
        <TopBanner />
      </header>
      {/* ------------------------------------------------------------------------- */}

      {/* light */}
      <section>
        <RamadanLamp />
      </section>

      {/* ------------------------------------------------------------------------- */}

      {/* NavBar and lantern */}
      <nav>
        <Container>
          <div className='w-full border-4 border-yellow-300 bg-white mt-15 rounded-4xl p-4 radius'>
            <h1 className='text-center text-black IslamicFont text-7xl mar'>رمضان كريم</h1>
            <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-13'>
              <div className='w-[70%] m-auto mt-10'>
                <Link to={"/counter"}>
                  <button className='w-full cursor-pointer IslamicFont text-2xl IslamicFont2 rounded-3xl border-4 border-black bg-white p-2 focus:bg-black focus:text-white duration-300'><RadioButtonCheckedIcon />  السبحة</button>
                </Link>
              </div>
              <div className='w-[70%] m-auto mt-10'>
                <Link to={"/koran"}>
                  <button className='w-full cursor-pointer IslamicFont text-2xl IslamicFont2 rounded-3xl border-4 border-black bg-white p-2 focus:bg-black focus:text-white duration-300'><BookIcon />  القرآن الكريم</button>
                </Link>
              </div>
              {/* تهنئة رمضان */}
              <div className='w-[70%] m-auto mt-10'>
                <Link to={"/greeting"}>
                  <button className='w-full cursor-pointer IslamicFont text-2xl IslamicFont2 rounded-3xl border-4 border-black bg-white p-2 focus:bg-black focus:text-white duration-300'><EmailIcon />  تهنئة رمضان</button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
        <div className='w-full mt-5'>
          <img src={lantern} alt="lantern" className='m-auto lantern rotate-45 origin-top lantern2' />
        </div>
      </nav>

      {/* ------------------------------------------------------------------------- */}

      {/* Body */}

      <Routes>
        {/* تهنئة رمضان */}
        <Route path='/greeting' element={<RamadanGreetings />} />
        {/* القرآن الكريم */}
        <Route path='/koran' element={<Koran />} />
        {/* السبحة */}
        <Route path='/counter' element={<Counter />} />
      </Routes>

      {/* ------------------------------------------------------------------------- */}

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
