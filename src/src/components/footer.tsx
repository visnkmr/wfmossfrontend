import Link from "next/link";
import React from "react";
// import '../../styles/globals.css'
export default function Footer() {
    return (
      <>
        <footer className="bg-slate-800 dark:bg-blue-500 text-white" >
           {/*<div className="pt-9 sm:grid sm:grid-cols-3 justify-center items-center text-center m-5">
            <div className="flex flex-col space-y-2">
              <div>
                  <a
                    aria-label="linkedin"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/vishnunk-59124/"
                    
                  >
                    Linkedin
                  </a>
                </div>
                <div>
                  <a
                    aria-label="github"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/visnkmr"
                    
                  >
                    Github
                  </a>
                </div>
                <div>
                  <a
                    aria-label="codeberg"
                    target="_blank"
                    rel="noreferrer"
                    href="https://codeberg.org/visnk"
                    
                  >
                    Codeberg
                  </a>
                </div>
                

              </div>
             <div className="flex flex-col space-y-2">
            <div  >
            <a
                    aria-label="youtube"
                    target="_blank"
                    rel="noreferrer"
                    href="https://youtube.com/@vishnunk"
                    
                  >
                    Youtube
                  </a>
                  </div>
                <div  >
                <a
                  aria-label="telegram"
                  target="_blank"
                  rel="noreferrer"
                  href="https://vishnunkmr.t.me/"
                  >Telegram</a>
                </div>
              </div> 

            <div  className="flex flex-col space-y-2">
              <div className="text-bold">

                </div>
                <div>
                  <a aria-aria-label="privacy policy" href="/privacy">Privacy Policy</a>
                </div>
                <div>
                  <a aria-aria-label="appchoose" href="https://appchoose.blogspot.com">AppChoose</a>
                </div>
            </div>
          </div> */}
          <div className="p-10 ">
            <div className="">
              <span>
                <p>
                  Make the site better, just submit PR after making changes. Source code available <Link href={"https://github.com/visnkmr/wfmpage"}>here</Link>
                  </p>
              </span>
            </div>
          </div>
        </footer>
      </>
    );
  }