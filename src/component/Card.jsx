import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (

      <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}}  className='relative flex-shrink-0 rounded-[45px] h-72 w-60 bg-zinc-900/90 text-white py-10 px-8 overflow-hidden'>
        <FaRegFileAlt />
        {/* paragraph */}
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc} </p>
        {/* footer */}
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className=' flex items-center justify-between mb-3 py-3 px-8'>
              <h5>{data.filesize}</h5>
              <span className={"h-7 w-7 rounded-full  py-3 flex items-center justify-center "}>
              {data.close ? <IoCloseSharp/> :<MdOutlineFileDownload size="1em" color='#fff' /> }
              
              </span>
            </div>
            {data.tag.isOpen ? (
              <div className={`tag py-4 w-full ${data.tag.tagColor === "blue" ?"bg-blue-600" : "bg-green-600" }`} >
                <h3 className='text-center font-semibold text-sm'>{data.tag.tagTitle}</h3>
              </div>
            ):null}
            
        </div>
      </motion.div>
    
  );
}
export default Card;

{/* <div className='flex items-center justify-between px-8 py-3 mb-5'></div>
<div className='tag w-full h-20 bg-sky-200 '></div> */}

