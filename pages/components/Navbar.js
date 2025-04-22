import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { Card, Input } from "antd";
import React from "react";

function Navbar() {
  return (
    <div className=" w-full h-full min-h-screen overflow-x-hidden ">
      <div className="flex justify-between items-center p-4  ">
        <div className="flex space-x-4 ">
          <h2 className="text-lg font-semibold">Get response</h2>
          <h2 className="text-lg font-semibold">products</h2>
          <RiArrowRightSLine size={20} className="mt-2 relative -left-5" />
          <h2 className="text-lg font-semibold">pricing</h2>
          <h2 className="text-lg font-semibold">recource</h2>
          <RiArrowRightSLine size={20} className="mt-2 relative -left-5" />
          <CiSearch size={25} className="relative -left-6 " />
        </div>

        <div className="flex space-x-4">
          <button className=" text-lg font-bold bg-slate-100 px-6 py-2 rounded-3xl ">
            Login
          </button>

          <button className="text-lg font-bold bg-cyan-500 text-white rounded-3xl px-6 py-">
            Sign up for free{" "}
          </button>
        </div>
      </div>

      <div className="flex justify-start items-start gap-x-16 bg-blue-300">
        <div className="ml-28 -mt-1 p-3">
          <p>Discover all new</p>
          <p className="bg-amber-400 font-bold">AI Email Generator</p>
        </div>

        <p className="text-gray-600 mt-5">
          Create better emails in less time with a ChatGPT-powered email and
          subject line generator
        </p>
        <button className="text-lg font-bold bg-amber-400 text-black rounded-3xl px-6 py-2 mt-3 ml-12">
          LEARN MORE
        </button>
      </div>

      <Image
        src={"/my_photos/using-laptop.png"}
        width={600}
        height={400}
        alt="Placeholder image"
        className="ml-auto h-[400px] object-cover"
      />

      <Card
        className="shadow-lg border border-gray-300 rounded-lg p-1 w-56 mr-auto ml-[970px] mt-[-360px]"
        style={{ minHeight: "auto", height: "70px" }}
      >
        <div className="flex items-center gap-2 font-bold">
          <MdEmail size={32} color="blue" className="mt-[-20px]"/>
          <div className="mt-[-20px]">
            <p>Card content</p>
            <p>Email Marketing</p>
          </div>
        </div>
      </Card>

      <Card
        className="shadow-lg border border-gray-300 rounded-lg p-1 w-56 mr-auto ml-[970px] mt-[20px]"
        style={{  minHeight: "auto", height: "70px" }}
      >
        <div className="flex items-center gap-2 font-bold">
          <CgWebsite size={32} color="blue" className="mt-[-20px]"/>
          <div  className="mt-[-20px]">
            <p>Website</p>
            <p>Builder</p>
          </div>
        </div>
      </Card>

      <Card
        className="shadow-lg border border-gray-300 rounded-lg p-1 w-56 mr-auto ml-[970px] mt-[20px]"
        style={{ minHeight: "auto", height: "70px" }}
      >
        <div className="flex items-center gap-2 font-bold">
          <CiSettings size={32} color="blue" className="mt-[-20px]"/>
          <div className="mt-[-20px]">
            <p>Marketing</p>
            <p>Automation</p>
          </div>
        </div>
      </Card>

      <div className="absolute left-[10%] top-[40%]">
  <p className="text-5xl font-bold bg-amber-400 mb-5">Marketing</p>
  <p className="text-5xl font-bold">
    Beyond <span className="bg-amber-400 text-white px-2">email</span>
  </p>
</div>
<p>An affortable, easy platform to send emails, </p>{""}
<p>grow your list Automation and comunication.</p>


<div className="h-screen flex flex-col justify-start items-start">
  <div className="relative w-1/2">
    <Input
      className="font-bold text-black placeholder-black pr-16"  
      style={{ width: '100%' }}
      placeholder="Email address"
    />
    <button 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-cyan-500 text-white rounded-3xl px-24 py-2"
    >
      Create free account 
    </button>
  </div>
</div>


  

    </div>
  );
}

export default Navbar;
