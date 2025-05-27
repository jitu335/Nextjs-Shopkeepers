import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useDebugValue, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Content } from "./components/Content";


export default function Home() {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white"> 


    
      <Navbar />
 {/* <Content/>   */}
      <Footer />
    
       
  
    </div>
  );
}
