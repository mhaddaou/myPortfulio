import Navbar from './components/Navbar'
import Banner from './components/Banner'
import backgroundImage from './assets/img/banner-bg.png';
import anim from './assets/143602-pzs-logo.json'
import Lottie from "lottie-react";
import MessageWriter from './MessageWriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import mhaddaou from './assets/mhaddaou.jpg'
import './home.css'
import about from './assets/about.png'

ReactGA.initialize('https://www.google.com');

const Home  = () =>{
    function handleClick() {
        ReactGA.event({
          category: 'Button',
          action: 'Click',
          label: 'My button',
        });
      }

    return (
        <div className="w-screen h-screen bg-black " style={{ overflowX: 'hidden', overflowY: 'auto' }} >
            <div className=' shadow-2xl shadow-blue-500 container mx-auto' >

            <div className='container mx-auto w-full h-screen  pt-3 rounded flex flex-col gap-6   '>
                <div className='w-full h-[10%] bg-slate-00 flex justify-center items-center'>
                    <Navbar />
                </div>
                <div className='w-full h-[90%] bg-slae-400 flex flex-col md:flex-row gap-4 md:gap-0' >
                    <div className='w-full md:w-1/2 h-1/2 md:h-full bg-ble-400 flex justify-center items-center'>
                        <Lottie className=' w-full h-full  md:w-[70%] md:h-[50%] ' animationData={anim} />
                    </div>
                    <div className='w-full   md:w-1/2 h-1/2 md:h-full bg--300 flex flex-row-reverse md:flex-col gap-14  md:gap-6 justify-center items-center'>
                        <img src={mhaddaou} className=' hidden md:block w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border-[6px] border-slate-400' alt="" />
                        <div className=' bg--100 flex flex-col  md:pt-10  text-white gap-8  text-xl md:text-4xl font-mono font-extrabold'>
                        <div className='w-full flex justify-center'>Hi There,</div>
                        <div className='w-full flex justify-center'>I'm Mohamed haddaoui</div>
                        <div className='w-full flex justify-center'>
                        <MessageWriter />
                        </div>
                        </div> 

                    </div>
                    
                </div>

            </div>
            <div className='container mx-auto w-full h-screen   rounded  flex  px-4  flex-col'>
                <div className='w-full  h-[10%] flex items-center pl-6'>
                    <div className='w-1/2 border-b-2 text-xl md:text-4xl text-white font-mono font-extrabold'>About Me</div>
                </div>
                <div className='w-full  h-[90%] flex flex-col-reverse md:flex-row'>
                    <div className=' w-full h-1/2 md:w-1/2 md:h-full flex justify-center items-center '>
                        <img className=' h-full' src={about} alt="" />
                    </div>
                    <div className=' w-full h-1/2 md:w-1/2 md:h-full flex flex-col  justify-center gap-1 md:gap-2 items-center  md:items-start md:text-2xl text-white font-mono font-bold md:pt-10'>
                        <h1 className=' space-y'>
                        I am Mohamed Haddaoui, a passionate web 
                        developer specializing in front-end
                        development using React and Next.js. 
                        With a strong foundation in web development
                         and a drive to continuously learn and grow,
                         I am ready to take on exciting challenges
                         and contribute to the ever-evolving world 
                        of web development.
                        </h1>
                    </div>
                </div>
            
            
            </div>
            
            </div>
            
            
            
        </div>
    );
}


export default Home;
