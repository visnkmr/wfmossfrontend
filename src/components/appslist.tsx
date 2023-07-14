import Link from "next/link";
import { Applistprops, appinfo } from "../shared/types";
import { getData } from "./listoffiles";
import { Button } from "./ui/button";
import { setGlobalState } from "../lib/GlobalStateContext";
import axios from "axios"
import b from "../exampleapisresponses/samplefileapi.json"
import { useState } from "react";
import { Input } from "./ui/input";
// import {distance,closest} from "fastest-levenshtein";
import Fuse from "fuse.js"

function compareStrings(str1, str2) {
       const ratio = distance(str1, str2);
       console.log(str1+"\t"+str2+"\t"+ratio)
       // Use a threshold to determine if the strings are similar enough
       if (ratio >= 0) {
         // Strings are similar
         return true;
       } else {
         // Strings are not similar
         return false;
       }
     }

export function Appslist({url}:Applistprops){
    const options = {
        includeScore: true
      }
      
      
      let [tosearch,setsearch]=useState("")
      let al=b.applist as appinfo[];
      let a=[] as appinfo[]
      const fuse = new Fuse(list, options)
    // let ia:appinfo;
     al.map((ia:appinfo,index:number) => {
        let shouldshow=false;
        if(tosearch==="")
            shouldshow=true;
        else if(compareStrings(ia.name,tosearch)){
        // else if(ia.name.includes(tosearch)){
            shouldshow=true
        }
        if(shouldshow)
        a=[...a,
        ...[{
                name:ia.name,
                icon:ia.icon,
                appopenurl:ia.appopenurl
            }]
        ]
    });
    // let al=getData(url).applist;
    return(<>
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
    { a&&a.map((each:appinfo,index:number) => {

// const byteArray = Uint8Array.from(atob(each.appicon), c => c.charCodeAt(0));
// Create a Blob from the byte array
// const blob = new Blob([byteArray], { type: 'image/bmp' });

// Create a data URL using the Blob
// const dataUrl = URL.createObjectURL(blob);
const dataUrl = `data:image/png;base64,${each.icon}`;
// const dataUrl = `data:image/png;base64,${each.appicon}`;

        return ( 
          <>
          
            <Button 
            key={each.appopenurl}
            className="rounded-md border shadow-md h-20 mr-3 w-[15rem]" 
            onClick={
                () => {
                    axios.request({
                        method: "post",
                        url: each.appopenurl
            })
            .then(response => 
                {
                console.log(response);
                return response
                })
            .then(data => {
                // let what=data[0] as st
                // Handle the response from the server
                // console.log(what);
                if(data.status===200){
                let message="opened app successfully "+(data.data).opened
                setGlobalState("toast-visible",true)
                setGlobalState("toast",message)
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
            }>
                <img src={dataUrl} alt="App Icon"  className="h-full object-contain p-3" />
                <p className="line-clamp-1">
                {each.name}
                </p>
            </Button>
          </>
        )
    })}
    </div>
    </>);
}