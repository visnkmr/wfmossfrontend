import Link from "next/link";
import { Applistprops, appinfo } from "../shared/types";
import { getData } from "./listoffiles";
import { Button } from "./ui/button";
import axios from "axios"
// import b from "../exampleapisresponses/samplefileapi.json"
import { useState } from "react";
import { Input } from "./ui/input";
import Fuse from "fuse.js"
import { useQuery } from "@tanstack/react-query";
import Eapp from "./eachapp";

let listapps=()=>{
  let { data,isError } = useQuery({ 
    // enabled:false,
    queryKey:["apl"],
    
    queryFn: async()=>{
      
      const response = await axios.get(`/api/json/v1/apps`)
      // return a
      console.log(response.data)
        return response.data
    },
    retry:false,
    // refetchOnMount:true,
    
    cacheTime:0,
    
    staleTime:0,
    // refetchOnWindowFocus:false,
    
    
  
  })
  if(!data || isError)
  data=[]
  return data
}


export function Appslist({url}:Applistprops){
    const options = {
        includeScore: true,
        keys:['name']
      }
      
      
      let [tosearch,setsearch]=useState("")
    //   let al=b.applist as appinfo[];
      let al=listapps() as appinfo[];
      console.log(al)
    //   let a=[] as appinfo[]
      const fuse = new Fuse(al, options)
      let a=tosearch===""?al:fuse.search(tosearch).map((result) => result.item);
      console.log(a)
    return(
    <>
    <div className="grid-flow-col w-full p-5 gap-5 ">
    <div className="flex justify-center m-5">
        <Input
          placeholder="Search in apps..."
        //   value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            setsearch(event.target.value.toString().toLocaleLowerCase())
          }
          className="max-w-sm"
        />
    </div>
    { a&&a.map((each,index:number) => {
      
// const byteArray = Uint8Array.from(atob(each.appicon), c => c.charCodeAt(0));
// Create a Blob from the byte array
// const blob = new Blob([byteArray], { type: 'image/bmp' });

// Create a data URL using the Blob
// const dataUrl = URL.createObjectURL(blob);
// const dataUrl = `data:image/png;base64,${getappicon(each.pkgname)}`;
// const dataUrl = `data:image/png;base64,${each.appicon}`;

        return ( 
          <>
          <Eapp app = {each}/>
            
          </>
        )
    })}
    </div>
    </>);
}