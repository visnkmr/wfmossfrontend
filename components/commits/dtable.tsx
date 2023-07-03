'use client';

// import { eCommit} from './columns';
import { DataTable } from './data-table';
// import dwc, { tabledata } from '../../src/dealcommits';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';
import a from "../../exampleapisresponses/samplefileapi.json"
import {lofiles} from "../listoffiles"

function getData(ipaddress:string): lofiles[] {
  // let ipaddress=""
    // nextjs 13 fetching api from our api folder/payments
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
    // enabled:false,
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
    // refetchOnMount:true,
    
    cacheTime:0,
    staleTime:0,
    // refetchOnWindowFocus:false,
    
    
  
  })
  // refetch();
  
  
    if(!Array.isArray(data) || isError){
      console.log("error or not array")
      data=[]
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
  interface dtableprops{
    columns:ColumnDef<lofiles>[];
    ipaddress:string;
  }
  export default function Dtable({columns,ipaddress}:dtableprops) {
    const data = getData(ipaddress);
  
    return (
      
        <DataTable columns={columns} data={data} />
          
    );
  }