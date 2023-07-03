'use client';

// import { eCommit} from './columns';
import { DataTable } from './data-table';
// import dwc, { tabledata } from '../../src/dealcommits';
import React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useQuery } from '@tanstack/react-query';
import a from "../../exampleapisresponses/samplefileapi.json"
import {getData, lofiles} from "../listoffiles"


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