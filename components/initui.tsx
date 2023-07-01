'use client'
import React, { useState } from "react";
import { Input } from '../components/ui/input';
import listoffiles, { Getlistoffilesfromapi } from '../components/listoffiles'

export default function InitUI(){
    const [ipaddress, setipaddress] = useState("");
    return(
        <>
    <Input
        placeholder='Filter by reponame...'
        onChange={(event) =>
          setipaddress(event.target.value)
        }
        className='max-w-sm'
      />
        <p>Selected storage has </p>
        <table>
          <Getlistoffilesfromapi ipaddress={ipaddress}/>
          
        </table>
        </>
        );
}