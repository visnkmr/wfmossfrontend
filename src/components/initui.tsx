'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Globe,Upload,Bell,HelpCircle,History,Grid,HardDrive,RefreshCcw } from 'lucide-react';
import React, { useEffect, useRef, useState } from "react";
import { Input } from '../components/ui/input';
import { returnedjson } from '../shared/types';

import { getData, getlistoffilesfromapi } from '../components/listoffiles'
import {ReadonlyURLSearchParams, useSearchParams} from 'next/navigation'
import Link from "next/link";
import { Button } from './ui/button';
import toast, { Toaster } from 'react-hot-toast';
import {setGlobalState, useGlobalState} from "../lib/GlobalStateContext"
import axios from "axios"
import { Appslist } from './appslist';
import { DataTable } from './commits/data-table';
import { columns_full } from './commits/columns_full';
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
  let firstime=useRef(true)
  // let ft=useRef(true)
  const inputRef = useRef(null);
  const [ipvis,setipvis] = useState(false);
  const [toastv] = useGlobalState("toast-visible");
  const [tablev] = useGlobalState("table-visible");
  const [toastcontent] = useGlobalState("toast");
  const [ufvis,setufvis] = useState(true);
  const [salvis,setsalvis] = useState(false);
  // const [helpvis,sethvis] = useState(false);
  const searchParams = useSearchParams();
  let [url] = useGlobalState("ipaddress");

  const [dummyState, setDummyState] = useState(0);

  const forceUpdate = () => {
    setDummyState(dummyState + 1);
  };


  // var toastNotification = ToastNotification();
// let [uua,setuua]=useState("")
    
    const [ipaddress, setipaddress] = useState(searchParams!.get('ipaddress')!==null?searchParams!.get('ipaddress')!:"");
    setGlobalState("ipaddress",ipaddress)
    if(!url.includes("http"))
    url=`http://${ipaddress}/api/json/v1`;
    // if(ipaddress &&(searchParams!.get('ipaddress')!==null?searchParams!.get('ipaddress')!:"")!=="" && ft.current){
    //   console.log("rhere")
    //   console.log("ipaddress"+ipaddress)
    //   // setGlobalState("ipaddress",`http://${ipaddress}/api/json/v1`)
    //   ft.current=false
    // }
    // if(url===""&&ipaddress)
    // // if(ipaddress && searchParams!.get('ipaddress')!==null?searchParams!.get('ipaddress')!:"")
    // {
    //   let sp=searchParams!.get('ipaddress')!==null?searchParams!.get('ipaddress')!:"";
    //   if(ipaddress===""&&sp)
    //     setGlobalState("ipaddress",`http://${sp}/api/json/v1`)
    // }
    // if(ipaddress.toString().indexOf("http")===0 && ipaddress!==""){
    //   if(firstime.current){
    //     setGlobalState("ipaddress",`http://${inputRef.current.value}/api/json/v1`)
    //     firstime.current=false
    //   }
    // }
    console.log("ip--->"+ipaddress)
    if(
      (!url.includes("http") &&toastv) ||
      toastv
    )
    {
      if(firstime.current && inputRef.current){
        setGlobalState("ipaddress",`http://${inputRef.current.value}/api/json/v1`)
        firstime.current=false
      }
      setGlobalState("toast-visible",false)
    toast(toastcontent, {
      position: "top-center",
      duration:3000,

      // autoClose: 3000,
      // hideProgressBar: true,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
      // theme: "light",
      });
    }
    
    // useEffect(()=>{

    //   setGlobalState("ipaddress",);
    // },[searchParams])

    // const [ipaddress, setipaddress] = useState(searchParams!.get('ipaddress')!==null?searchParams!.get('ipaddress')!:"");
    const handleClick = () => {
      // console.log("clicked")
      
      // toastNotification.create({
      //   // redirect: 
      //   // {
      //   // url: 'http',
      //   // newWindow: 'true',
      //   // },
      //   progressBar: 
      //   {
      //   show: 'false',
      //   },
      //   position: 
      //   {
      //   y: 'bottom',
      //   x: 'right',
      //   },
      //   icon:  '🍞',
      //   message:  'try',
      //   title:  'sdad',
      //   closeButton:  'true',
      //   });
      // setGlobalState("toast","connecting to "+inputRef.current.value)
      // 👇 "inputRef.current.value" is input value
      console.log(inputRef.current.value);
      setGlobalState("ipaddress",`http://${inputRef.current.value}/api/json/v1`);
      setipaddress(`${inputRef.current.value}`);
      // if(ft(ipaddress))
      // setuua(ft(ipaddress).percentsizefree)
    };
    const handleUpload=(event:React.FormEvent)=> {
      event.preventDefault();
      
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      const file = fileInput.files![0];
      
      const formData = new FormData();
      formData.append('file', file);
      // var xhr = new XMLHttpRequest();

      // // Progress event listener
      // xhr.upload.addEventListener("progress", function(event) {
      //   if (event.lengthComputable) {
      //     var percentComplete = (event.loaded / event.total) * 100;
      //     console.log("Upload progress: " + percentComplete.toFixed(2) + "%");
      //   }
      // });
    
      // // Upload completed event listener
      // xhr.addEventListener("load", function() {
      //   console.log("Upload completed");
      // });
    
      // // Upload failed event listener
      // xhr.addEventListener("error", function() {
      //   console.error("Upload failed");
      // });
    
      // // Set up the request

      // // Set the Content-Type header
      // xhr.open("POST", `http://${ipaddress}/api/upload`);
      // xhr.setRequestHeader("Content-Type", "multipart/form-data");
      // // xhr.setRequestHeader("Access-Control-Allow-Headers", "origin, content-type");
      // // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
      // // xhr.setRequestHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
      // // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
      // xhr.send(file);
      axios.request({
        method: "post",
        url: `http://${ipaddress}/api/upload`,
        data: formData,
        // onUploadProgress: (progressEvent) => {
        //   progressEvent.total
        //   const percentCompleted = Math.round(
        //     (progressEvent.loaded * 100) / progressEvent.total!
        //   );
        //   console.log(percentCompleted);
        //   // Update your progress UI here
        // },
      })
      // .then((response) => {
      //   console.log(response.data);
      //   // Handle the response here
      // });
      // fetch(`http://${ipaddress}/api/upload`, {
      //   method: 'POST',
      //   body: formData
      // })
      .then(response => 
        {
          // console.log(response.json());
          
          return response.data
        })
      .then(data => {
        console.log(data)
        if(data){
        // let what=data[0] as st
        // Handle the response from the server
        // console.log(what);
        // if(data===200){
          // setGlobalState("toast","uploaded file "+file.name)
          let message="succeeded to send "+file.name+" to "+data.savedat;
          console.log(message)
          setGlobalState("toast-visible",true)
          setGlobalState("toast",message)
          // settoastv(true)
          // }
        // else {
        //   console.log("failed")
        // }
        }
        else{
          setGlobalState("toast","Upload failed")
        }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    }
    let showoldv=ipaddress!==""
    
    // React.useEffect(() => {
    //     setipaddress(ipad as string)
    //     // console.log("ran once")
          
    //   // code to run after render goes here
    // }, []) // <-- empty array means 'run once'
    return(
        <>
        <Toaster />

        {/* <div className='flex justify-center m-2 '>
        <Button className={`bg-green-500 text-black ml-4 rounded-md border shadow-md ${toastv ? '' : 'hidden'}`} onClick={()=>{settoastv(!toastv)}} variant={"default"}><Bell className='mr-2 h-4 w-4' /> {toastcontent} <span className='ml-2' >x</span></Button>
        
        </div> */}
        <div className='flex justify-center'>
          <div className='grid-flow-row m-5 gap-2'>
          <Button variant={"destructive"} className="rounded-md border shadow-md m-2" onClick={()=>{setufvis(!ufvis)}}><Upload className='mr-2 h-4 w-4' />Upload</Button>
          <Button className="rounded-md border shadow-md m-2 " onClick={()=>{forceUpdate}}><RefreshCcw className='mr-2 h-4 w-4' />Reload</Button>
          <Button className="rounded-md border shadow-md m-2" onClick={()=>{setipvis(!ipvis)}}><Globe className='mr-2 h-4 w-4' />IP</Button>
          <Button className="rounded-md border shadow-md  m-2" onClick={()=>{
            setsalvis(true);
            setGlobalState("table-visible",false);

            }}><Grid className='mr-2 h-4 w-4' />Apps</Button>
          <Button className="rounded-md border shadow-md m-2" onClick={()=>{
            setsalvis(false);
            setGlobalState("table-visible",true);

            }}><HardDrive className='mr-2 h-4 w-4' />Files</Button>
          
          <Link className={`${showoldv?"":"hidden " }inline-flex items-center justify-center py-2 px-4 button font-medium rounded-md border shadow-md m-2`} href={`http://${ipaddress}/old`}><History className='mr-2 h-4 w-4' />Old version</Link>
          <Link className="m-2 inline-flex items-center justify-center py-2 px-4 button font-medium rounded-md border shadow-md" target="_blank" href='http://github.com/visnkmr/wfm/issues'><HelpCircle className='mr-2 h-4 w-4' />Help</Link>
          </div>
        </div>
        
           <div className={`flex justify-center ${ipvis ? '' : 'hidden'}`}>
        <div className={`rounded-md border shadow-md p-2 m-2 }`}>
          {/* <h2 className='flex justify-center'>Connected to: {ipaddress}</h2> */}
       
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
            <Button className="ml-4 rounded-md border shadow-md" type="submit" onClick={handleUpload}>Upload</Button>
          </div>
        </form>
        </div>
        
    </div>
    <div className={`flex justify-center ${salvis ? '' : 'hidden'}`}>
          <Appslist url={url}/>
        </div>

        {/* <div className="flex justify-center p-5">
      <div className="flex flex-col w-[60%] sm:w-[30%]"> */}
        {/* <ProgressDemo a={ipaddress}/> */}
        {/* <progress id="pr" max="100" value="77.68211229853571"></progress> */}
        {/* <p>
          Seleted Storage has
        </p> */}
      {/* </div>
        </div> */}
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
        {/* <DataTable columns={columns_full} data={!getData(url).filelist?[]:getData(url).filelist} /> */}
          {tablev?getlistoffilesfromapi(url):""}
          
        </div>
        
        {/* </tbody>
      </table> */}
    </div>
        <ReactQueryDevtools/>        
        </>
        );
}


