import React from "react";
interface returnedjson{
  version:number,
  currentpath:string,
  storageinuse:number;
  totalstorage:number;
  freesize:string;
  percentsizefree:string;
  filelist:lofiles[];
  applist:appinfo[];
}
interface Applistprops{
  url:string
}
interface lofiles
  {
    filename:string,
    openapi:string,
    downloadapi:string,
    filesize:number,
    lastmodified:string,
    isfile:boolean

  }
  interface appinfo
  {
    name:string;
    appopenurl:string;
    icon:string;

  }
  interface filelistprops {
    ipaddress:string
  }
  interface dtableprops{
    columns:ColumnDef<lofiles>[];
    ipaddress:string;
    // data:lofiles[]
  }