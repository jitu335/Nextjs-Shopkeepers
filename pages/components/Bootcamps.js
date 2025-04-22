import Image from "next/image";

import React from "react";

function Bootcamps() {

  // NOT USED THIS IMAGE GO TO LASTFOOTER.JS
  return (

    <div className="relative w-full h-screen bg-gradient-to-b from-[#0E2841] to-[#121b23] via-[#121b23 ] via-74% to-[#02233 ] to-100% to-[#13181c ] min-h-screen " style={{ position: 'relative', top: '-120px' }}>
    <div className="absolute top-0 w-full h-full" style={{ right: "-30%" }}>
      <Image
        src="/pezala_photos/11.png"
        style={{
          maxWidth: "4000px",
          width: "64%",
          height: "auto",
          marginLeft: "20%",
        }}
        width={2000}
        height={30000}
      />
    </div>

    {/* Text Content */}
    <div className="relative z-10 flex flex-col justify-center text-lg h-full -top-16 px-10 text-white max-w-2xl">
      <h1 className="text-5xl  leading-tight">
        <span className="font-bold">Bridging</span> Academic Learning With
        &nbsp;
        <span className="font-bold">Real-World</span> Experience.
      </h1>

      <p className="mt-10 text-xl">
        Our Platform Connects Students With Industry,
      </p>

      <ul className="mt-6 space-y-4 text-lg">
        <li className="flex items-center">
          <span className="w-2.5 h-2.5 bg-white rounded-full inline-block mr-2"></span>
          Providing Invaluable Industrial Exposure
        </li>
        <li className="flex items-center">
          <span className="w-2.5 h-2.5 bg-white rounded-full inline-block mr-2"></span>
          Facilitating Knowledge Sharing
        </li>
      </ul>

      <p className="mt-10 text-lg text-gray-200 relative top-40 left-4">
By Combining These Approaches, We Empower Students With <br /> 
The Skills And Understanding Required To Excel In Their Future <br /> 
Careers.
</p>


    </div>
  </div>
       
  );
}

export default Bootcamps;
