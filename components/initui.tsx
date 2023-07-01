'use client'
import React, { useState } from "react";
import { Input } from '../components/ui/input';
import listoffiles, { Getlistoffilesfromapi } from '../components/listoffiles'

export default function InitUI(){
    const [ipaddress, setipaddress] = useState("");
    return(
        <>
        <form className="fileUpload" method="post" action="/upload.html" encType="multipart/form-data">
            <Input type="file" name="upfile" id="fileinput" required={true}/>
            <Input type="submit" value="Send"/>
        </form>
        <progress id="pr" max="100" value="77.68211229853571"></progress>
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