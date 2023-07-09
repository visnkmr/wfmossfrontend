import Link from "next/link";
import { Applistprops, appinfo } from "../shared/types";
import { getData } from "./listoffiles";
import { Button } from "./ui/button";
import { setGlobalState } from "../lib/GlobalStateContext";

export function Appslist({url}:Applistprops){
    let al=getData(url).applist;
    return(<>
    <div className="grid">
        
    { al&&al.map((each:appinfo,index:number) => {
        return ( 
          <>
            <Button 
            className="rounded-md border shadow-md mr-3" 
            onClick={
                () => {
                fetch(each.appopenurl, {
                method: 'POST',
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
                console.log("opened file on device successfully.")
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
                {each.name}
            </Button>
          </>
        )
    })}
    </div>
    </>);
}