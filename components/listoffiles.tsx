'use client'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import Link from "next/link";
import React from "react";

interface lofiles
  {
    filename:string,
    openapi:string,
    downloadapi:string,
    filesize:number,
    lastmodified:string

  };
  interface filelistprops {
    ipaddress:string
  }
export function Getlistoffilesfromapi({ipaddress}:filelistprops) {
  console.log("loading filelist")
    return (
      <>
      <h2>Updated: {ipaddress}</h2>
    {listoffiles(ipaddress).map((each:lofiles) => {
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
export default function listoffiles(ipaddress:string):lofiles[]{
    console.log(ipaddress)
    if(ipaddress===""){
        // ipaddress="https://cdn.jsdelivr.net/gh/visnkmr/wfmossfrontend@main/exampleapisresponses/samplefileapi.json"
        ipaddress=""
    }
    else{
        ipaddress=`http://${ipaddress}/samplefileapi.json`
    }
    console.log(ipaddress)
    let { data } = useQuery({ queryFn: async()=>{
        const response = await axios.get(ipaddress)
        // console.log(response.data)
          return response.data
      } })
      if(!Array.isArray(data)){
        data=[]
      }
        return data;
}