'use client';

// NEXT.JS
import Image from 'next/image';
import Link from 'next/link';

// FRAMER MOTION
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';

// TAILWIND CSS
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}
    >
    <Image 
      src="/icon/vedeng.svg"
        alt="vedeng"
        width={60}
        height={60}
        className="w-[60px] h-[60px] object-contain cursor-pointer"
    />
    <Link href='/'>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white cursor-pointer">
        vedeng.
      </h2>
      </Link>
      <Image
        src="/menu.svg"
        alt="menu"
        width={24}
        height={24}
        className="w-[24px] h-[24px] object-contain hidden lg:opacity-1"
      />
    </div>
  </motion.nav>
);

export default Navbar;
