import './App.css';
import KoranImg from './imgs/koran.webp';
import KoranCover from './imgs/koran-face.webp'

export default function Koran(){
    return(
        <>
            <section>
                <div className='w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 setShow'>
                    <div></div>
                    <div className='w-[95%] m-auto border-4 border-white rounded-3xl p-4 mt-20'>
                        <div className='w-full flex justify-center gap-5'>
                            <img src={KoranImg} alt="KoranImg" className='w-20 h-20' />
                            <h1 className='text-5xl IslamicFont text-center text-white IslamicFont2 mt-2 marg'>القرآن الكريم</h1>
                        </div>
                        <div className='w-full mt-10'>
                            <a href="https://www.pdfquran.com/download/standard1/standard1-quran.pdf" target='_blank'>
                            <img src={KoranCover} alt="KoranCover" className='w-full border-l-8 border-white border-2' />
                            </a>
                        </div>
                    </div>
                    <div></div>
                </div>
            </section>
        </>
    )
}