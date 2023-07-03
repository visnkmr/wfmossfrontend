'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import React, { useRef, useState } from "react";
import { Input } from '../components/ui/input';
import { getlistoffilesfromapi } from '../components/listoffiles'
import {useSearchParams} from 'next/navigation'
import Link from "next/link";

export default function InitUI(){
  const inputRef = useRef(null);

    const [ipaddress, setipaddress] = useState("");
    const handleClick = () => {
      console.log("clicked")
      // 👇 "inputRef.current.value" is input value
      console.log(inputRef.current.value);
      setipaddress(inputRef.current.value);
    };
    const searchParams = useSearchParams()
    const ipad = searchParams.get('ipaddress')!==null?searchParams.get('ipaddress'):""
    
    React.useEffect(() => {
    setipaddress(ipad as string)
    // console.log("ran once")
      
  // code to run after render goes here
}, [ipad]) // <-- empty array means 'run once'
    return(
        <>
        <h2>Updated: {ipaddress}</h2>
       
        <p className="mt-5 flex justify-center">{"Enter IP address to connect to"}</p>
        <div className="flex justify-center p-2">
<Input
    id="ipaddress"
    ref={inputRef}
    placeholder='Enter IP Address'
    className='max-w-sm'
    defaultValue={ipaddress}
  />
  <button onClick={handleClick} className="pl-2">Test</button>
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
    <div>
      {/* <table>
        <thead>
          <tr>
            <td>sample</td>
            <td>sample</td>
            <td>sample</td>
            <td>sample</td>
          </tr>
        </thead>
        <tbody> */}
        <div>

          {getlistoffilesfromapi(ipaddress)}
        </div>
        {/* </tbody>
      </table> */}
    </div>
        <ReactQueryDevtools/>        
        </>
        );
}