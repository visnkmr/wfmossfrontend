'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Globe,Upload,Bell } from 'lucide-react';
import React, { useRef, useState } from "react";
import { Input } from '../components/ui/input';
import { getData, getlistoffilesfromapi, returnedjson } from '../components/listoffiles'
import {useSearchParams} from 'next/navigation'
import Link from "next/link";
// let ft = (ipaddress:string):returnedjson=>{
//   let { data,isError } = useQuery({ 
//     // enabled:false,
//     queryKey:["lfl"],
    
//     queryFn: async()=>{
      
//       const response = await axios.get(ipaddress)
//       // return a
//       // console.log(response.data)
//         return response.data
//     },
//     retry:false,
//     // refetchOnMount:true,
    
//     cacheTime:0,
    
//     staleTime:0,
//     // refetchOnWindowFocus:false,
    
    
  
//   })
//   return data
// }

interface st{
  status:string
}
export default function InitUI(){
  const inputRef = useRef(null);
  const [ipvis,setipvis] = useState(true);
  const [toastv,settoastv] = useState(true);
  const [toast,settoast] = useState("Sample Text");
  const [ufvis,setufvis] = useState(false);
  const searchParams = useSearchParams()
// let [uua,setuua]=useState("")
    const [ipaddress, setipaddress] = useState(searchParams!.get('ipaddress')!==null?searchParams!.get('ipaddress')!:"");
    const handleClick = () => {
      console.log("clicked")
      settoast("uplaoded")
      // 👇 "inputRef.current.value" is input value
      console.log(inputRef.current.value);
      setipaddress(inputRef.current.value);
      // if(ft(ipaddress))
      // setuua(ft(ipaddress).percentsizefree)
    };
    const handleUpload=(event:React.FormEvent)=> {
      event.preventDefault();
      
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      const file = fileInput.files![0];
      
      const formData = new FormData();
      formData.append('file', file);
      
      fetch(`http://${ipaddress}/api/upload`, {
        method: 'POST',
        body: formData
      })
      .then(response => 
        {
          console.log(response);
          return response.status
        })
      .then(data => {
        // let what=data[0] as st
        // Handle the response from the server
        // console.log(what);
        if(data===200){
          let message="succeeded to send "+file.name;
          console.log(message)
          settoast(message)
          settoastv(true)
        }
        else {
          console.log("failed")
        }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    }
    
    // React.useEffect(() => {
    //     setipaddress(ipad as string)
    //     // console.log("ran once")
          
    //   // code to run after render goes here
    // }, []) // <-- empty array means 'run once'
    return(
        <>
        <div className='flex justify-center m-2 '>
        <Button className={`bg-green-500 text-black ml-4 rounded-md border shadow-md ${toastv ? '' : 'hidden'}`} onClick={()=>{settoastv(!toastv)}} variant={"default"}><Bell className='mr-2 h-4 w-4' /> {toast} <span className='ml-2' >x</span></Button>
        
        </div>
        <div className='flex justify-center'>
          <Button className="rounded-md border shadow-md mr-3" onClick={()=>{setipvis(!ipvis)}}><Globe className='mr-2 h-4 w-4' />IP</Button>
          <Button variant={"destructive"} className="rounded-md border shadow-md" onClick={()=>{setufvis(!ufvis)}}><Upload className='mr-2 h-4 w-4' />Upload</Button>
        </div>
        
        <div className={`flex justify-center ${ipvis ? '' : 'hidden'}`}>
        <div className={`rounded-md border shadow-md p-4 m-2 }`}>
          <h2 className='flex justify-center'>Connected to: {ipaddress}</h2>
       
          <p className="mt-5 flex justify-center">{"Enter IP address to connect to"}</p>
          <div className="flex justify-center p-2">
            <Input
                id="ipaddress"
                ref={inputRef}
                placeholder='Enter IP Address'
                className='max-w-sm'
                defaultValue={ipaddress}
              />
            <Button className="ml-4 rounded-md border shadow-md" onClick={handleClick} variant={"default"}>Connect</Button>
          </div>
        </div>
        </div>
        
        <div className={`flex justify-center ${ufvis ? '' : 'hidden'}`}>

        <div className="flex justify-center p-5 rounded-md border shadow-md m-2 ">
        <form>
            <p className="mb-5 mt-5 flex justify-center">{"Select file and click Send"}</p>
          <div className="flex flex-row">
            <Input type="file" name="upfile" id="fileInput" required={true}/>
            <button type="submit" onClick={handleUpload}>Upload</button>
          </div>
        </form>
        </div>
    </div>

        <div className="flex justify-center p-5">
      <div className="flex flex-col w-[60%] sm:w-[30%]">
        <ProgressDemo/>
        {/* <progress id="pr" max="100" value="77.68211229853571"></progress> */}
        {/* <p>
          Seleted Storage has
        </p> */}
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

import { Progress } from "../components/ui/progress"
import { Button } from './ui/button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
 
  return <Progress value={progress} className="w-full" />
}
