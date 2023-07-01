'use client'
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import Link from "next/link";
import React from "react";

interface listoffiles
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
    return (
      <>
    {listoffiles(ipaddress).map((each:listoffiles) => {
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
export default function listoffiles(ipaddress:string):listoffiles[]{
    console.log(ipaddress)
    if(ipaddress===""){
        ipaddress="https://cdn.jsdelivr.net/gh/visnkmr/wfmossfrontend@main/exampleapisresponses/samplefileapi.json"
    }
    else{
        ipaddress=`http://${ipaddress}/samplefileapi.json`
    }
    
    let { data } = useQuery({ queryFn: async()=>{
        const response = await axios.get(ipaddress)
        console.log(response.data)
          return await response.data
      } })
      if(!data){
        data=[]
      }
        return data;
}