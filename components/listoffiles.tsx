'use client'
import { useQuery,useQueryClient } from "@tanstack/react-query";
import axios from 'axios'
import Link from "next/link";
import React from "react";
import a from "../exampleapisresponses/samplefileapi.json"

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
  // let data:any[] =[];
  // let isError=false;
    console.log(ipaddress)
    if(ipaddress===""){
    
        // ipaddress="https://cdn.jsdelivr.net/gh/visnkmr/wfmossfrontend@main/exampleapisresponses/samplefileapi.json"
        ipaddress=""
    }
    else{
      // data =a;

        ipaddress=`http://${ipaddress}/samplefileapi.json`
    }
    console.log(ipaddress)
  //   let qc=useQueryClient();
  // qc.invalidateQueries(["lfl"]);
    let { data,isError } = useQuery({ 
      queryKey:["lfl"],
      
      queryFn: async()=>{
        if(ipaddress==="")
          return [];
        else
          return a;
        // const response = await axios.get(ipaddress)
        // console.log(response.data)
          // return response.data
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
          <div>
        { data.map((each:lofiles,index:number) => {
            return ( 
              <>
              <p key={index}>{JSON.stringify(each)} {index}</p>
              {/* <tr
              key={Date.now()}>
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
              </tr> */}
              </>
            );
        })}
        </div>
        );
}