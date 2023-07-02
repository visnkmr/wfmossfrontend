'use client'
import { useQuery,useQueryClient } from "@tanstack/react-query";
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
export  function getlistoffilesfromapi(ipaddress:string) {
  
    console.log(ipaddress)
    if(ipaddress===""){
        // ipaddress="https://cdn.jsdelivr.net/gh/visnkmr/wfmossfrontend@main/exampleapisresponses/samplefileapi.json"
        ipaddress=""
    }
    else{
        ipaddress=`http://${ipaddress}/samplefileapi.json`
    }
    console.log(ipaddress)
  //   let qc=useQueryClient();
  // qc.invalidateQueries(["lfl"]);
    let { data,isError } = useQuery({ 
      queryKey:["lfl"],
      
      queryFn: async()=>{
        const response = await axios.get(ipaddress)
        // console.log(response.data)
          return response.data
      },
      retry:false,
      // cacheTime:0
      
    
    })
      if(!Array.isArray(data) || isError){
        console.log("error or not array")
        data=[]
      }
        // return data;
        return (
          <>
          <h2>Updated: {ipaddress}</h2>
        { data.map((each:lofiles) => {
            return ( 
              <>
              <h1>row</h1>
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
              </>
            );
        })}
        </>
        );
}