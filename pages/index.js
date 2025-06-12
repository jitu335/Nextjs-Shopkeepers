import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { useDebugValue, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



export default function Home() {


  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white"> 


      <Navbar />
    <p>dgfd</p>
      <Footer />
    
   
  
    </div>
  );
}
