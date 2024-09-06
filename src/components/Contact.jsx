import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";


const Contact = () => {
  return ( 
    <div  className=" mt-6" >
     <p className=" text-center text-2xl p-4 font-sans font-semibold">Hello there. Feel free to drop me a text!</p>

     <div className="flex justify-center">
      <a href={`mailto:ramgore150@gmail.com`} className="underline text-violet-700 text-center">
        ramgore150@gmail.com
      </a>
     </div>

     <div className="  h-[200px]  max-w-full  mx-auto  justify-around  items-center flex  md:w-[300px]  ">
        <Link to={"https://www.linkedin.com/in/ram-gore-7a1098282"} target={"_blank"}>
          <FaLinkedin size={40}/>
        </Link>

        <a href={`mailto:ramgore150@gmail.com`} target={"_blank"}>
          <TfiEmail size={40}/>
        </a>
        
        <Link to={"https://github.com/ramgore45"}  target={"_blank"}>
          <FaGithubSquare size={40}/>
        </Link>
     </div>
    </div>
  );
};

export default Contact;
