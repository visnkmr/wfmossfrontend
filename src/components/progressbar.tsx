import { Progress } from "../components/ui/progress"
import { useQuery } from '@tanstack/react-query';
import {getGlobalState, useGlobalState} from "../lib/GlobalStateContext"
import axios from 'axios';
import { getData } from "./listoffiles";
import React from "react";

interface progressprops{
    p:number
}
export function ProgressDemo({p}:progressprops) {
    // let [a] = useGlobalState("ipaddress")
  const [progress, setProgress] = React.useState(p)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(progress), 100)
    return () => clearTimeout(timer)
  }, [])
  if(progress){

      return (
        <div className="flex justify-center ">

            <Progress value={progress} className="w-[60%]" />
        </div>

      )
  }
  else
  return(<>
  </>)
}