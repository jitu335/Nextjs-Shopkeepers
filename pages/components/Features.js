import Image from "next/image";
import React from 'react'

function Features() {


  return (
    
    
    <div className="text-center  w-full h-full min-h-screen relative "  style={{top: '-420px'}} >   
    <button className="bg-slate-300 hover:bg-gray-100 text-blue-600 font-semibold py-2 px-5 border border-gray-50 rounded-full shadow">
      Ready to be used
    </button>

    <h1 className="text-5xl mb-4 mt-10 text-white leading-[4rem]">
      Unleash your potential by leveraging <br /> the Expertise available and honing
      your skills
    </h1>

    <div className="space-x-4 flex justify-center mt-10 font-bold">
      <button
        style={{ backgroundColor: "#F2D732" }}
        className="text-black py-2 px-4 rounded-full flex items-center"
      >
        <Image
          src={"/pezala_photos/bulb.png"}
          width={20}
          height={20}
          alt="Icon"
          className="mr-2"
        />
        Idea
      </button>

      <button
        style={{ backgroundColor: "#90E0EF" }}
        className="text-black py-2 px-4 rounded-full flex items-center"
      >
        <Image
          src={"/pezala_photos/setting.png"}
          width={20}
          height={20}
          alt="Icon"
          className="mr-2"
        />
        Build
      </button>

      <button
        style={{ backgroundColor: "#C8D8F0" }}
        className="text-black py-2 px-4 rounded-full flex items-center"
      >
        <Image
          src={"/pezala_photos/roket.png"}
          width={20}
          height={20}
          alt="Icon"
          className="mr-2"
        />
        Launch
      </button>
    </div>

    <div className="relative mt-10">
      <Image
        src={"/pezala_photos/5.png"}
        width={430}
        height={300}
        alt="Placeholder image"
        className="relative top-32 -right-36"
      />
    </div>

    <div className="relative flex justify-center -mt-10">
      <Image
        src={"/pezala_photos/4.png"}
        width={1250}
        height={600}
        alt="Placeholder image"
        className="relative -top-[30rem] -right-[32rem]"
      />
    </div>
  </div>
  )
}

export default Features