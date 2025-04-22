import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useDebugValue, useEffect, useState } from "react";
import Cards from "./components/Cards"; 
import Navbar from "./components/Navbar";
import CodeEditor from "./components/CodeEditor";
import Bootcamps from "./components/Bootcamps";
import Footer from "./components/Footer";
import LastFooter from "./components/LastFooter";
import Features from "./components/Features";

export default function Home() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      {/* <div style={{ backgroundColor: '#6166f2', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>Welcome to Next.js!</h1>
    </div> */}

      {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-500">
          Hello, Tailwind CSS in Next.js!....
        </h1>
      </div>  */}

   



      <Navbar/>
       {/* <Features/>    */}
  <Cards/>  
 <Footer/>
  <LastFooter/>  

  {/* <Bootcamps/>   */}
{/* <CodeEditor/> */}

    </div>
  );
}
