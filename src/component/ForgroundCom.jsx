import React,{useRef} from 'react';
import Card from './Card';

function ForgroundCom() {

    const ref = useRef(null);

  const data = [
    {
      desc : " This is a first card of this page please run program.",
      filesize: ".9mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Download Now", tagColor: "blue"}  
    },
    {
      desc : "Please hold card and move on screen this is mini project. ",
      filesize: ".12mb",
      close: false,
      tag: {isOpen: false, tagTitle: "Update Now" ,tagColor: "green"}  
    },
    {
      desc : "Do the practice and feel good and last make a perfact.",
      filesize: ".50mb",
      close: true,
      tag: {isOpen: true, tagTitle: "Update Now" , tagColor: "green"}  
    },
  ];
  return (
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full p-10 flex gap-10 flex-wrap'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref}/>
      ))}
      </div>
   
  );
}

export default ForgroundCom;
