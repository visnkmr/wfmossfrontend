'use client';

// import { eCommit} from './columns';
import { DataTable } from './data-table';
// import dwc, { tabledata } from '../../src/dealcommits';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';
import a from "../../exampleapisresponses/samplefileapi.json"
import {getData, lofiles} from "../listoffiles"
import { useGlobalState } from '../../lib/GlobalStateContext';
import { ProgressDemo } from '../progressbar';


  interface dtableprops{
    columns:ColumnDef<lofiles>[];
    ipaddress:string;
    // data:lofiles[]
  }
  export default function Dtable({columns,ipaddress}:dtableprops) {
    let data = getData(ipaddress).filelist;
    let fsz = getData(ipaddress).freesize;
    let percinuse=100-(getData(ipaddress).storageinuse/getData(ipaddress).totalstorage*100);

    let dontshow=false;
    if(!Array.isArray(data) || ! data ){
      console.log("error or not array")
      data=[]
      dontshow=true
    }
    let [ipad]=useGlobalState("ipaddress")
  
    return (
      <div>
        <p className='flex justify-center'>{fsz}</p>
        {/* <p>{percinuse}</p> */}
        
        <ProgressDemo p={Math.ceil(percinuse)}/>
        <h1 className={dontshow ? '' : 'hidden'}>{`${(ipad==="")?"":""}Click on connect button to list the files or use the upload button after selecting the file to upload it.`}</h1>
      <div className={dontshow ? 'hidden' : ''}>
        <DataTable columns={columns} data={data} />
      </div>
      </div>
          
    );
  }