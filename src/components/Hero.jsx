import React from "react";
import { TypeAnimation } from "react-type-animation";
import image from "./../assets/profilepic.jpg";
import resume from "./Ram_Gore_9730250247.pdf";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className=" md:w-[1200px] flex    justify-between items-center  rounded-sm p-2  mt-[70px] mx-auto ">
      <div className=" flex gap-2 md:flex-row  flex-col-reverse justify-between items-center w-[1080px] rounded-sm  mx-auto p-2 ">
        <div className=" flex border-red-400 mt-8 flex-col justify-center h-[420px] items-start">
          <div className="   ">
              <p className="font-sans text-2xl">Hello! I am</p>
              <p className=" text-[3.1rem] leading-tight font-bold ">RAM GORE,</p>
              <p>a 2023, graduated Bachelor's of Technology from university of Dr Babasaheb Ambedkar Technological University, Lonere and institute is Marathwada Institute of Technology, Aurangabad.</p>
          </div>

          <p className=" mt-6 leading-loose font-sans text-lg">I daily use: 
            <span className=" bg-slate-500/50 font-bold p-1 rounded-sm ">.js</span>, 
            <span className=" bg-slate-500/50 font-bold p-1 rounded-sm ">.jsx</span>, 
            <span className=" bg-slate-500/50 font-bold p-1 rounded-sm ">.css</span>, 
            <span className=" bg-slate-500/50 font-bold p-1 rounded-sm ">.html</span>,
            <span className=" bg-slate-500/50 font-bold p-1 rounded-sm ">.json</span>, 
            I have numerous MERN stack / Full stack Development project under my hood, detail of which you can find here - <Link className="underline" to={"https://github.com/ramgore45"}>GitHub</Link>
          </p>

          {/* <TypeAnimation
            sequence={[
              "I am a software developer",
              1000,
              "I am a frontend developer",
              1000,
              "I am a backend developer",
              1000,
              "I am a fullstack developer",
            ]}
            wrapper="div"
            speed={50}
            repeat={Infinity}
            style={{ fontWeight: "500", fontSize: "1.2em" }}
          /> */}

          <a href={resume} target="_blank"  download>
            <div className=" bg-blue-600 border-none  rounded-sm px-2 text-white  font-semibold mt-4 py-2 hover:bg-blue-700 transition-all duration-200">
              Hire me
            </div>
          </a>
        </div>
        {/* <div> */}
        <img src={image} className=" md:w-[400px] md:h-[300px] md:rounded-md w-[250px] h-[250px] object-cover rounded-[100%]" />
        {/* </div> */}
      </div>
    </section>
  );
};

export default Hero;
