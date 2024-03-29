'use client'
import { returnedjson } from '../shared/types';

import { useQuery,useQueryClient } from "@tanstack/react-query";
import axios from 'axios'
import Link from "next/link";
// import React from "react";
import a from "../exampleapisresponses/samplefileapi.json"
import ListCommits from "./commits/commits"
import { useGlobalState } from '../lib/GlobalStateContext';

  export function getData(ipaddress:string): returnedjson {
    // let ipaddress=""
      // nextjs 13 fetching api from our api folder/payments
      if(ipaddress===""){
        
        // ipaddress="https://cdn.jsdelivr.net/gh/visnkmr/wfmossfrontend@main/exampleapisresponses/samplefileapi.json"
        // ipaddress=""
    }
    else{
      // data =a;
  ipaddress=`${ipaddress}`
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
      // retry:false,
      // // refetchOnMount:true,
      
      // cacheTime:0,
      
      // staleTime:0,
      refetchOnWindowFocus:false,
      
      
    
    })
    // refetch();
    
    
      // if(!Array.isArray(data) || isError){
      //   console.log("error or not array")
      //   data=[]
      // }
      // console.log(data)
      if(!data || isError)
        data=""
    
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
  // let [dontshow]=useGlobalState("table-visible")
    // if(dontshow){
    //   return(<>
    //   </>)
    // }
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