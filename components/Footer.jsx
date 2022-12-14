'use client';

// NEXT.JS
import Image from 'next/image';
import Link from 'next/link';

// FRAMER MOTION
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';

// LOCAL DATA
import { socials } from '../constants';
import styles from '../styles';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Enter our world
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <Image
            src="/icon/vedeng.svg"
            alt="vedeng"
            width={200}
            height={200}
            className="w-[24px] h-[24px] object-contain"
          />
          <Link href="mailto:info@vedeng.cf">
            <span className="font-normal text-[16px] text-white">
              Get in touch
            </span>
          </Link>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            VEDENG
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2022 - 2023 VEDENG. All rights reserved. <br /> Shah LLC
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.link} target="_blank">
                <Image
                  src={social.url}
                  alt={social.name}
                  width={500}
                  height={500}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
