// 'use client'
import dynamic from 'next/dynamic'

// import Project from "../src/components/project";
const Project =dynamic(()=>import ("../src/components/project"));

import Homepage from "../src/components/homepage";
// import Planglist from "../src/components/planlist";
// import Stats from "../src/components/stats";
import Workinp from "../src/components/wip";
import Footer from "../src/components/footer";
import '../styles/globals.css'
// import Ct from "../src/components/ct";
const Ct =dynamic(()=>import ("../src/components/ct"));

// const Commits =dynamic(()=>import ("../src/components/commits"));
// import Commits from "../src/components/commits";
import Topthread from "../src/components/topthread";
import DarkButton from "./but";
import Mq from "../src/components/mq";
import Contactme from "../src/components/contactme";
import Link from 'next/link';
// import { ThemeContext, ThemeProvider } from "../src/components/ThemeContext";
// import { useContext } from "react";
// import { createServerContext } from 'react';

// import dwc from "../src/dealcommits";
// import gtr from "./api/gtr";

interface listoffiles
  {
    filename:string,
    openapi:string,
    downloadapi:string,
    filesize:number,
    lastmodified:string

  };
let lof:listoffiles[]=[
  {
    filename:"filename1.extension",
    openapi:"/delete.html?path=",
    downloadapi:"/download/filename?path=",
    filesize:0,
    lastmodified:"days ago"

  },{
    filename:"filename2.extension",
    openapi:"/delete.html?path=",
    downloadapi:"/download/filename?path=",
    filesize:0,
    lastmodified:"days ago"

  }
];
function getlistoffilesfromapi(lof:listoffiles[]): import("react").ReactNode {
  return (
    <>
  {lof.map((each:listoffiles) => {
      return ( 
        <tr>
          <td>
            <Link href={each.openapi}>Open on tv</Link>
          </td>
          <td>
            <Link href={each.downloadapi}>{each.filename}</Link>
          </td>
          <td>
            <p>{each.filesize}</p>
          </td>
          <td>
            <p>{each.lastmodified}</p>
          </td>
        </tr>
      );
  })}
  </>
  );
  }
export default function Page() {
  

  // console.log("hello world")
  // console.log(JSON.parse(gtr()))
  // console.log(dwc())
  // console.log("hello")
  // const { dark } = useContext(ThemeContext);

    return (
      <>
      {/* <ThemeProvider> */}
      {/* <div className={dark ? 'dark' : ''}> */}
      <div className="dark:bg-gray-900 flex flex-col justify-center p-10">
          <p>Selected storage has </p>
          <table>
            {getlistoffilesfromapi(lof)}
            
          </table>
          {/* <Homepage/> */}
          {/* <Planglist/> */}
          {/* <Project/>
          <Ct/>
          <Commits/>
          <Contactme/> */}
          <p className="text-center flex justify-center italic p-10">This page was made using NextJS, React and Tailwind.</p>
      </div>

        {/* </div> */}
      {/* </ThemeProvider> */}
      </>

    );
  }