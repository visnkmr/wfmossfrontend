
'use client';

import React from 'react';

// import '../../styles/committablestyle.css'
import { columns_full } from './columns_full';
import Dtable from './dtable'

interface tablecustomprops{
  ipaddress:string
}

export default function ListCommits({ipaddress}:tablecustomprops){
  // console.log(req.searchParams.reponame)
  return(
    <div className='center'>
        <section className='committablestyle flex gap-6 dark:text-white'>
          <div className='m-auto'>

          {/* <div className='mx-auto gap-4 md:max-w-[58rem]'>
            <h2 className='font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl '>
              Files List
            </h2>
          </div> */}
          <Dtable columns={columns_full} ipaddress={ipaddress}/>
          {/* <p className='max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7 p-10'>
          using Shadcn ui and tanstack{' '}
        </p> */}
      </div>

    </section>
    </div>
  );
}
