'use client';

// NEXT.JS
import Image from 'next/image';
import Link from 'next/link';

// FRAMER MOTION
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, url, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <Image
      src={imgUrl}
      alt="planet-01"
      width={500}
      height={500}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          {subtitle}
        </p>
      </div>

      <div
        className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white"
      >
        <Link
          href={url}
          target="_blank"
        >
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={250}
            height={250}
            className="w-[100%] h-[100%] object-contain"
          />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
