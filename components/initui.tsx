'use client'
import React, { useState } from "react";
import { Input } from '../components/ui/input';
import listoffiles, { Getlistoffilesfromapi } from '../components/listoffiles'

export default function InitUI(){
    const [ipaddress, setipaddress] = useState("");
    return(
        <>
        <p className="mt-5 flex justify-center">{"Enter IP address to connect to"}</p>
        <div className="flex justify-center p-2">
<Input

    placeholder='Enter IP Address'
    onChange={(event) =>
      setipaddress(event.target.value)
    }
    className='max-w-sm'
  />
</div>
    
        <div className="flex justify-center p-5">
        <form method="post" action="/upload.html" encType="multipart/form-data">
            <p className="mb-5 mt-5 flex justify-center">{"Send files to"}</p>
          <div className="flex flex-row">
            <Input type="file" name="upfile" id="fileinput" required={true}/>
            <Input type="submit" value="Send" className=""/>
          </div>
        </form>
        </div>
        <div className="flex justify-center p-5">
      <div className="flex flex-col flex-wrap">

        <progress id="pr" max="100" value="77.68211229853571"></progress>
        <p>
          Seleted Storage has
        </p>
      </div>
        </div>
    
        <table>
          <Getlistoffilesfromapi ipaddress={ipaddress}/>
          
        </table>
        </>
        );
}