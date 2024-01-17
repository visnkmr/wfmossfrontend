import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import { Button } from "./ui/button";
import { appinfo } from "../shared/types";
import { setGlobalState } from "../lib/GlobalStateContext";

interface appprops{
    app:appinfo
}

export default function Eapp({app}:appprops){
    {
        let iconurl="/api/icon?pkgname="+app.pkgname
        // console.log(`data:image/png;base64,${getappicon(iconurl)}`)
        return (
            // <p>`data:image/png;base64,${getappicon(iconurl)}`</p>
            <Button 
            key={app.appopenurl}
            className="rounded-md border shadow-md h-20 mr-3 w-[15rem]" 
            onClick={
                () => {
                      axios.request({
                          method: "post",
                          url: app.appopenurl
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
                {/* <img  src={`data:image/png;base64,${getappicon(iconurl)}`} alt="App Icon"  className="h-full object-contain p-3" /> */}
                <p className="line-clamp-1">
                {app.name}
                </p>
            </Button>
        )
      }
}

let getappicon=(name:string)=>{
    // return name
    let { data,isError } = useQuery({ 
      // enabled:false,
      queryKey:[`${name}`],
      
      queryFn: async()=>{
        
        const response = await axios.get(name)
        // return a
        // console.log(response.data)
          return response.data
      },
      // retry:false,
      // // refetchOnMount:true,
      
      // cacheTime:0,
      
      // staleTime:0,
      refetchOnWindowFocus:false,
      
      
    
    })
    if(!data || isError)
    data=""
    return data
  }