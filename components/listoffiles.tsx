'use client'
import { useQuery,useQueryClient } from "@tanstack/react-query";
import axios from 'axios'
import Link from "next/link";
// import React from "react";
import a from "../exampleapisresponses/samplefileapi.json"
import ListCommits from "./commits/commits"
export interface returnedjson{
  version:number,
  currentpath:string,
  storageinuse:number;
  totalstorage:number;
  freesize:string;
  percentsizefree:string;
  filelist:lofiles[];
}
export interface lofiles
  {
    filename:string,
    openapi:string,
    downloadapi:string,
    filesize:number,
    lastmodified:string,
    isfile:boolean,
    ipaddress?:string

  };
  interface filelistprops {
    ipaddress:string
  }
  export function getData(conip:string): returnedjson {
    // let ipaddress=""
    let ipaddress=conip;
      // nextjs 13 fetching api from our api folder/payments
      if(ipaddress===""){
      
        ipaddress="https://cdn.jsdelivr.net/gh/visnkmr/wfmossfrontend@main/exampleapisresponses/samplefileapi.json"
        // ipaddress=""
    }
    else{
      // data =a;
  ipaddress=`http://${ipaddress}/api/json/v1`
        // ipaddress=`http://${ipaddress}/samplefileapi.json`
    }
    console.log(ipaddress)
  //   let qc=useQueryClient();
  // qc.invalidateQueries(["lfl"]);
    let { data,isError } = useQuery({ 
      // enabled:false,
      queryKey:["lfl"],
      
      queryFn: async()=>{
        
        const response = await axios.get(ipaddress)
        // return a
        // console.log(response.data)
          return response.data
      },
      retry:false,
      refetchOnMount:false,
      
      cacheTime:0,
      
      staleTime:0,
      refetchOnWindowFocus:false,
      
      
    
    })
    // refetch();
    
    
      // if(!Array.isArray(data) || isError){
      //   console.log("error or not array")
      //   data=[]
      // }
      // console.log(data)
      // let retdata={} as returnedjson
      // let modretdata={} as returnedjson
      if(data && !isError)
      {  
        // retdata=data
      // modretdata=data;
      // modretdata.filelist = 
      data.filelist.map((each:lofiles)=>{
       each.ipaddress=conip;
        return each
      })
      // console.log(modretdata.filelist)
    }
    else{
      data={}
    }
    
      //  await fetch('http://localhost:3000/api/payments' || 'https://demo-table-eight.vercel.app', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
      // const data = await res.json();
      return data;
    }
export  function getlistoffilesfromapi(ipaddress:string) {
  
      // console.log(data)
        // return data;
        return (
          <div key={Date.now()}>
            <ListCommits ipaddress={ipaddress}/>
        {/*{ data.map((each:lofiles,index:number) => {
            return ( 
              <>
              <p key={index}>{JSON.stringify(each)} {index+"."+Date.now()}</p>
              /~ <tr
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
              </tr> ~/
              </>
            );
        })}*/}
        </div>
        );
}