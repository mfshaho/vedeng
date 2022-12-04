'use client';

// NEXT.JS
import Image from 'next/image';
import Link from 'next/link';

// FRAMER MOTION
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, secs, path, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={path}
      width={500}
      height={500}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
      
    ) : (
      <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-[24px]">
        {/* <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <img
            src="/icon/vedeng.svg"
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div> */}
        <p className="font-normal text-[16px] leading-[20.16px] text-white">
          {secs[0]} <br></br> {secs[1]} <br></br> {secs[2]}
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          
          <Link href={path} className='flex items-center'>{title}<i className='f7-icons ml-2.5 mt-2'>arrow_right_circle</i></Link>
        </h2>
      </div>

      
    )}
  </motion.div>
);

export default ExploreCard;
