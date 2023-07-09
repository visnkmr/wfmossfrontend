'use client';

// import { eCommit} from './columns';
import { DataTable } from './data-table';
// import dwc, { tabledata } from '../../src/dealcommits';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';
import a from "../../exampleapisresponses/samplefileapi.json"
import {getData} from "../listoffiles"
import {lofiles,dtableprops} from "../../shared/types"
import { useGlobalState } from '../../lib/GlobalStateContext';
import { ProgressDemo } from '../progressbar';
import Balancer from 'react-wrap-balancer'


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
          <h1 className={`text-center p-10 ${dontshow ? '' : 'hidden'}`}>
        <Balancer>
            {`${(ipad==="")?"":""}Click on connect button to list the files or use the upload button after selecting the file to upload it.`}
          </Balancer>
            </h1>
      <div className={dontshow ? 'hidden' : ''}>
        <DataTable columns={columns} data={data} />
      </div>
      </div>
          
    );
  }