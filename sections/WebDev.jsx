'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { webDevelopment } from '../constants';
import { WebCard, TitleText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';
import Link from 'next/link';
const WebDev = () => (
  <section className={`${styles.paddings} relative z-10`}>

<motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
    <Link href='/#services'
     className='flex justify-center top-[15%] sm:absolute'>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
            Back
        </button>
    </Link>
    <TitleText
          title={<>Web Development</>}
          textStyles="text-center"
        />

    <motion.div 
      variants={fadeIn('right', 'tween', 0.2, 1)}
    >

    <div className='flex flex-col justify-center items-center gap-10 mt-20 sm:mt-40 sm:flex-row'>

    {webDevelopment.map((dev) => (
            <WebCard key={dev.title} {...dev} />
          ))}

        </div>
    </motion.div>

  </motion.div>
  <div className='my-5 opacity-0'>hey</div>
  </section>
);

export default WebDev;
