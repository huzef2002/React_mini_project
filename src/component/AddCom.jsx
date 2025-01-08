import React from 'react';
import { HiOutlineDocumentAdd } from "react-icons/hi";
// import { motion } from "framer-motion";
function AddCom() {
    const AddFill=()=>{

    }
  return (
    <div className='relative flex-shrink-0 rounded-[45px] h-72 w-60 bg-zinc-900/90 text-white pt-[15%] pl-[16%] justify-center item-center overflow-hidden'>
        <button onClick={AddFill()}>
        <HiOutlineDocumentAdd size="7em"/>
        </button>
        <h2 className='mt-5'>Add Documents.</h2>
      </div>
  );
}

export default AddCom;
