import './App.css';
import myLogo from './imgs/myLogo.webp'
import Bogy from './imgs/Bogy.webp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import EmailIcon from '@mui/icons-material/Email';
import BookIcon from '@mui/icons-material/Book';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import FoodBankIcon from '@mui/icons-material/FoodBank';

export default function Footer(){
    return(
        <>
            <div className='mt-20'>
                <marquee behavior="9000" direction="right">
                    <img src={myLogo} alt="myLogo" className='rounded-full w-20 h-20 border-4 border-white' />
                </marquee>
            </div>
            <footer>
                <div className='w-full p-4 mt-2 bg-linear-to-r from-pink-400 to-orange-300 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                    <div className='w-full'>
                        <img src={Bogy} alt="" className='w-[50%] h-70 m-auto mt-5' />
                    </div>
                    <div className='w-full'>
                        <div className='w-full mt-5 text-center'>
                            <p className='w-full IslamicFont text-5xl IslamicFont2'>تهنئة رمضان  <EmailIcon /></p>
                            <p className='w-full IslamicFont text-5xl IslamicFont2 mt-16'>القرآن الكريم  <BookIcon /></p>
                            <p className='w-full IslamicFont text-5xl IslamicFont2 mt-16'>السبحة  <RadioButtonCheckedIcon /></p>
                        </div>
                    </div>
                    <div className='w-full text-center'>
                        <h1 className='IslamicFont3 IslamicFont text-3xl mt-5 font-bold'>Front End</h1>
                        <h2 className='IslamicFont3 IslamicFont text-3xl mt-3 font-bold'>By :</h2>
                        <h2 className='IslamicFont3 IslamicFont text-3xl mt-3 font-bold'>Abdelkader Mahmoud</h2>
                        {/* media */}
                        <div className='w-full flex justify-center gap-15 mt-10'>
                        <a href="https://www.facebook.com/share/16fv1Xr1uu/" target='_blank'  title='Facebook'><FacebookRoundedIcon className='text-blue-900 hover:scale-150' sx={{width: '40px' , height: '40px' , transition: '0.25s'}} /></a>
                        <a href="https://github.com/Abdelkader-programmer" target='_blank'  title='GitHub'><GitHubIcon className='hover:scale-150' sx={{width: '40px' , height: '40px' , transition: '0.25s'}} /></a>
                        <a href="https://www.linkedin.com/in/abdelkader-mahmoud-921805303/" target='_blank'  title='LinkedIn'><LinkedInIcon className='text-blue-900 hover:scale-150' sx={{width: '40px' , height: '40px' , transition: '0.25s'}} /></a>
                        </div>
                        <div>
                            <a href="#"><PanToolAltIcon className='mt-10 hover:-translate-y-2 hover:text-white' sx={{width: '70px' , height: '70px' , transition: '0.25s'}} /></a>
                        </div>
                    </div>
                </div>
                <div className='w-full bg-white p-4 text-center'>
                    <h1 className='IslamicFont text-center text-black IslamicFont2 text-4xl mt-1'>عبدالقادر محمود</h1>
                    <p className='IslamicFont text-3xl text-center text-black IslamicFont3 mt-5'>نتمنى لكم صوما مقبولا و إفطارا شهيا</p>
                    <FoodBankIcon className='mt-2' sx={{width: '70px' , height: '70px'}} />
                </div>
            </footer>
        </>
    )
}