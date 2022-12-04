
import Image from 'next/image'
import Link from 'next/link';

const EndCard = ({ id, iconUrl, name, location }) => (

  
    <Link href={location} target='_blank'>
    <div className='w-[250px] h-[250px] bg-blue-300 rounded-[12px] shadow-md flex flex-col justify-center cursor-pointer hover:bg-blue-200 hover:scale-105 transition-all duration-300'>
    <Image 
          src={iconUrl}
          alt={id}
          width={250}
          height={250}
          className='w-auto h-[110px] mx-auto'
        />
        <div className='font-extrabold text-slate-800 text-2xl text-center mt-5'>
        {name}
        </div>
      </div>
      </Link>
);

export default EndCard;
