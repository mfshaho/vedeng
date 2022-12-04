'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { frontendDevelopment } from '../constants';
import { EndCard, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import Link from 'next/link';

export default function FrontendDev()  {
    
    
return (
  <section className={`${styles.paddings} relative z-10`}>
 
<motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
    <Link href='/web'
     className='flex justify-center top-[15%] sm:absolute'>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
            Back
        </button>
    </Link>
    <TitleText
          title={<>Frontend Development</>}
          textStyles="text-center"
        />
     
    <motion.div 
      variants={fadeIn('right', 'tween', 0.2, 1)}
    >

    <div className='flex flex-col justify-center items-center gap-10 mt-15 sm:mt-40 md:flex-row'>

    {frontendDevelopment.map((frontend) => (
            <EndCard key={frontend.title} {...frontend} />
          ))}

        </div>
    </motion.div>

  </motion.div>
  <div className='my-5 opacity-0'>hey</div>
  </section>
)}

