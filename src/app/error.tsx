'use client' // Error components must be Client Components
 
import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  //  useEffect(() => {
  //   // Redirect to a specific link on error
  //   if (typeof window !== 'undefined') {
  //     window.location.href = '/old';
  //   }
  // }, []);

  return (
    <div className='flex justify-center flex-col'>
       <h2>Error occured:
         </h2>
         <p>Please post on github with following info if necessary:</p>
         <p>
           {JSON.stringify(error)}
         </p>
         <Link href="/old">Redirecting you to old webpage.</Link>
       <div>
         <button
         onClick={
           // Attempt to recover by trying to re-render the segment
           () => reset()
         }
       >
         Try again
       </button>
         </div>
     </div>
    );
//   useEffect(() => {
//     // Log the error to an error reporting service
//     // console.error(error)
//   }, [error])
 
  return (
    <>
    </>
    // <div className='flex justify-center flex-col'>
    //   <h2>Error occured please contact developer with this info:
    //     </h2>
    //     <p>
    //       {JSON.stringify(error)}
    //     </p>
    //     <Link href="/old">Please visit the Old webpage here if the issue persists</Link>
    //   <div>
    //     <button
    //     onClick={
    //       // Attempt to recover by trying to re-render the segment
    //       () => reset()
    //     }
    //   >
    //     Try again
    //   </button>
    //     </div>
    // </div>
  )
}