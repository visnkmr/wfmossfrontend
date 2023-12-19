'use client'
import React, { useEffect, useRef } from 'react'
import axios from "axios";
import { Button } from './ui/button';
import {Loader2, Percent} from "lucide-react"
// import './src/app/globals.css'

// import nodeDatachannelPolyfill from 'node-datachannel/polyfill';
import { useState } from 'react'
import {Avatar,AvatarFallback,AvatarImage} from "./ui/avatar"
import {Card,CardContent, CardFooter,CardHeader,CardTitle} from "./ui/card"
// import { createRequire } from 'module';
// import wrtc from "wrtc"

import Peer from 'simple-peer'
// import Ably from "ably"
import download from "js-file-download"
export enum MessageTypeDesc {
  FILE = 'FILE',
  OTHER = 'OTHER'

}

function submittodb(id:string,listtosave:object){
  console.log("whenhere:\n"+JSON.stringify(listtosave))

  return axios.request({
    url: `https://listallfrompscale.vercel.app/api/putredis/`,
    method: 'POST',
    data: {id: id, value: JSON.stringify(listtosave)},
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})
// .then(response => {
//   console.log(response)
//       // value="\nsaved selected tab(s)\t";
//       // +title.substring(0,30);
//       // response.json()
//     }
//   )
// // .then(data => {
// //     // Do something with the response data
// //     console.log(data);
// // })
// .catch(error => {
//     // Handle any errors
//     console.error(error);
// });
}
function getfromdb(id:string){
  // console.log("whenhere:\n"+JSON.stringify(listtosave))

   return axios.request({
    url: `https://listallfrompscale.vercel.app/api/getvalue/${id}`,
    method: 'GET',
    // data: {id: id, value: JSON.stringify(listtosave)},
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
})
// .then(response => {
//   console.log(JSON.parse(response.data.data))
//       // value="\nsaved selected tab(s)\t";
//       // +title.substring(0,30);
//       // response.json()
//     }
//   )
// .then(data => {
//     // Do something with the response data
//     console.log(data);
// })
// .catch(error => {
//     // Handle any errors
//     console.error(error);
// });
}
// import { v4 as uuidv4 } from 'uuid';

// import { createClient } from "@vercel/kv";

export interface DataTypeDesc {
  dataType: MessageTypeDesc
  file?: Blob
  fileName?: string
  fileType?: string
  message?: string
}
const de=true;
export const dlfd =(m)=>{
  if(de){

    console.log(m)
  }
}
interface comminfo{
  
      id: string,
      text: string,
      time: string,
      userName: string,
      userColorIndex: number,
}
export default function Sow(){
  const [sdp, setSdp] = useState('')
  // const [channel, setchannel] = useState<Ably.Types.RealtimeChannelPromise>()
  // var channel:Ably.Types.RealtimeChannelPromise;
  // const [offer, setoffer] = useState('')
  // const [answer, setanswer] = useState('')
  // const [amitheinitiator, setinitiator] = useState(true)
  // const [peer, setp] = useState<Peer>(null)
  var savepeer=useRef();
  var showornot=useRef(false)
  var [readyforconn,setr]=useState(false)

  const initialMessages: comminfo[]  = [
    // {
    //   id: '1',
    //   text: 'Hello, World!',
    //   time: new Date().toString(),
    //   userName: 'User1',
    //   userColorIndex: 1,
    // },
    // More messages...
   ];
   const [messages, setMessages] = React.useState(initialMessages);

  var [ready,setready]=useState(true)
  var [waittext,setwt]=useState("")
  var [readytosend,setrts]=useState(false)
  var [joinoth,setjoth]=useState(false)
  var peer:Peer=savepeer.current;
  var saveui4=useRef("");
  // var ui4=saveui4.current;
  const [showtext, setshowtext] = useState("")
//  dlfd(peer)
  const startconn=(amitheinitiator)=>{
    // useEffect(()=>{
    return new Peer({
    initiator: amitheinitiator,
    trickle: false,
    objectMode:true,
    
    // wrtc: wrtc
    // wrtc:nodeDatachannelPolyfill
  })
    // setp(p)
  // },[amitheinitiator])
}

      // runonce.current=true;
    // }
  // },[])

// const setupchannel=()=>{
//   dlfd("setup channel name "+ui4)

//   channel=(ably.channels.get(ui4));
// }

// var onDataHandlerSetss = false;
//once an offer is instantiated
// const offerset=(offer)=>{

//   // if(offer.trim().length!==0 ){
//     dlfd("setting offer on redis")
  // useEffect(()=>{
    const setofferdata = async (recdata) => {
      // if(!onDataHandlerSetss){
        let randomNumber = Math.floor(Date.now() % 10000);
        console.log(randomNumber);
        saveui4.current=randomNumber.toString();
        dlfd(saveui4.current)
        // dlfd(recdata)
        await submittodb(saveui4.current, recdata);
        setready(true)
        dlfd("Share code with reciever")
        showornot.current=true
        // await getoffer()
        // dlfd(uuidv4()); // Outputs a unique UUID
        // const session = await kvstore.get(ui4);
        // dlfd(session)
        setshowtext("Share code: "+saveui4.current)
        dlfd("initiator uid---->"+saveui4.current)
        // dlfd(ably)
        // onDataHandlerSetss = true;
        //  try{
          
          
        // }
        // catch(e){
        //   dlfd("FAILED")
        //   dlfd(e)
        // }
          // // get the channel to subscribe to
          // setupchannel()
          // /*
          //   Subscribe to a channel.
          //   The promise resolves when the channel is attached
          //   (and resolves synchronously if the channel is already attached).
          // */
          //subscribe to know when answers are being sent
          // await channel.subscribe('answer', (message) => {
          //   answerrecieved(message.data)
          //   dlfd('Received a greeting message in realtime: ' + message.data)
          // });
        // ably.close()
      // }
      // const data = await getData(1);
      // setData(data);
   }

  //  const answerrecieved=(answer)=>{
  //   dlfd("answerr recieved--------->"+answer)
  //           peer.signal(JSON.parse(answer))
    
  //  }
  
  //  fetchData(offer);
    // async ()=>{
    // }
  // },[offer])
// }
// }
// //once decided on initiator
// if(sdp.trim().length!==0)
// {useEffect(()=>{
//   const fetchData = async () => {
//     var session;
//       try{
//         session = await kv.get(sdp);
//         setinitiator(false)
//         peer.signal(JSON.parse(session))
//         //ably join the channel of sdp and close this ones channel
//       setchannel(ably.channels.get(sdp));

//       }
//       catch(e){

//       }
    
    
//       // setshowtext(session)
//  }

//  fetchData();
//   // async ()=>{
//   // }
// },[sdp])}
// //send answer to initiator
// if(answer.trim().length!==0)
// {useEffect(()=>{
const setanswerdata = async (answer) => {
  await submittodb(saveui4.current, answer);
  dlfd("sent answer to db")
  setr(true)
  console.log(readyforconn)
  // setready(true)
  setwt("Waiting for connection")
  // setupchannel()
      //ably send the answer over the connection
  // await channel.publish('answer', answer);

    // setshowtext(session)
}
const getoffer=async()=>{
console.log(saveui4.current)
var resp=await getfromdb(saveui4.current);

// Wait for the axios request to complete
var response = await resp;

// Access the data property of the response
var offer = response.data.data;
dlfd("got offer"+JSON.parse(offer))
  peer.signal(JSON.parse(offer))

}
const getanswer=async()=>{
console.log(saveui4.current)
var resp=await getfromdb(saveui4.current);

// Wait for the axios request to complete
var response = await resp;

// Access the data property of the response
var answer = response.data.data;
dlfd("answerr recieved--------->"+answer)
peer.signal(JSON.parse(answer))
  // peer.signal(offer)

}
interface fileinfo{
fileType:string,
fileName:string,
fileSize:number

}
//  fetchData();
//   // async ()=>{
//   // }
// },[answer])}
// var onDataHandlerSet=false;
// useEffect(() => {
  let receiveBuffer=[]
  let receivedSize=0
  const initpeer=()=>{

    if (peer) {
      // Check if 'data' event listener has already been set up
      // if (!onDataHandlerSet) {
        peer.on('error', err => dlfd('error'+ err))

        peer.on('signal', data => {
          let recdata=JSON.stringify(data)
          dlfd('SIGNAL'+ recdata)
          // setshowtext(JSON.stringify(data))
          if(data.type==="offer"){
            dlfd("offer signal recieved")
            // dlfd(recdata)
            // setoffer(recdata)
            // dlfd(offer)
            setofferdata(recdata)
          }else if(data.type==="answer"){
            dlfd("answer signal recieved")
            setanswerdata(recdata)
            dlfd((peer))
          }
        })
        peer.on('connect', () => {
          // dlfd('CONNECT')
          setready(true)
          dlfd("Connected.")

          setrts(true)

          // ably.close()
          
        })
        
        var e:fileinfo;
        peer.on('data', data => {
          if (typeof data.byteLength !== "undefined") {
            let percentage = 0;
            receiveBuffer.push(data);
            receivedSize += data.byteLength;
            percentage = ((receivedSize / e.fileSize) * 100).toFixed(3);
            
            peer.send(
              JSON.stringify({
                type: "progress",
                value: percentage
              })
            );
            if (e.fileSize !== 0 && e.fileName) {
              if (receivedSize == e.fileSize) {
                setready(true)
                const received = new Blob(receiveBuffer);
                receiveBuffer = [];
                download(received || '', e.fileName || "fileName", e.fileType)
              }
            }
          } else {
            try {
              if (isJSON(data)) {
                var sData = JSON.parse(data);
    
                if (sData.type === "progress") {
                  console.log("progressing "+sData.value)
                  setready(false)
                  setwt("File transfer "+sData.value)
                }
                else if (sData.type === "fileinfo") {
                  e=JSON.parse(sData.value)
                }
                else if (sData.type === "message") {
                  // dlfd(JSON.stringify(sData.value))
                  const newMessage = {
                    id: Date.now().toString(),
                    text: sData.value,
                    time: new Date().toString(),
                    userName: 'User2',
                    userColorIndex: 2,
                  };
                  setMessages((prevMessages) => [...prevMessages, newMessage]);
                }
              }
            } catch (error) {
              console.log("TryCatch", error);
            }
          }
        })
    }
  //  }, [peer]);
  }
  const isJSON = str => {
    try {
      return JSON.parse(str) && !!str;
    } catch (e) {
      return false;
    }
  };
  
const handleJoin=() => {
  setready(false)
  setwt("Initialising connection. Please wait.")
  savepeer.current=startconn(false)
  peer=savepeer.current
  dlfd(JSON.stringify(peer))
  initpeer()
  // dlfd("offer got from kvstore----->"+sdp)
  
  saveui4.current=sdp
  // setupchannel()
  
  getoffer()
}



const joinothenable=()=>{
setjoth(true)
}

const [fileList, setFileList] = React.useState<[File]>([])
  const [sendLoading, setSendLoading] = React.useState(false)
  const handleUpload = async () => {
      if(fileList){
    
        if (fileList.length === 0) {
            dlfd("Please select file")
            return
        }
        dlfd(peer)
        if (!peer) {
            dlfd("Please select a connection")
            return
        }
        try {
            await setSendLoading(true);
            let file = fileList[0] as unknown as File;
            
            sendData(file)
      
            // await peer.send({
            //   dataType: MessageTypeDesc.FILE,
            //   file: blob,
            //   fileName: file.name,
            //   fileType: file.type
            // })
            await setSendLoading(false)
            dlfd("Send file successfully")
        } catch (err) {
            await setSendLoading(false)
            dlfd(err)
            dlfd("Error when sending file")
        }
      }
    }
      const addfile=(event) => {
        console.log(peer)
        event.preventDefault();
        const file = event.target.files[0];
        if (file) {
          setFileList([file]);
        } else {
          setFileList([]);
        }
      }
      let sendBuffer = [];

      const sendData = (file) => {
            setready(false)
        if (file.size === 0) {
          dlfd("empty file")
        }
        const chunkSize = 32000;
        var fileReader = new FileReader();
        let offset = 0;
        let fi:fileinfo={
          fileType: file.type,
          fileName: file.name,
          fileSize: file.size
        }
        peer.send(JSON.stringify({
          type:"fileinfo",
          value:JSON.stringify(fi)
        }))

        sendBuffer=[]      
        // wRTCTransferPaused = false;
        fileReader.addEventListener("error", error =>
          console.error("Error reading file:", error)
        );
        fileReader.addEventListener("abort", event =>
          console.log("File reading aborted:", event)
        );
        fileReader.addEventListener("load", e => {
          sendChunk(e.target.result);
          offset += e.target.result.byteLength;
          if (offset < file.size) {
            readSlice(offset);
          }
        });
        const readSlice = o => {
          const slice = file.slice(offset, o + chunkSize);
          fileReader.readAsArrayBuffer(slice);
        };
        readSlice(0);
      };
      const sendChunk = (data) => {
        peer.send(data)
        // if (wRTCTransferPaused) {
        //   return;
        // }
    
      };
      let [text,addtext]=useState("")
      const sendMessage=()=> {
          // send message at sender or receiver side
          if (peer) {
              dlfd("sending message")
            let sm=(JSON.stringify(
              {
              type:"message",
              value: 
              text
      
            }))
              // setm("Me : " + msg.value)
              dlfd(sm)
              peer.send(sm)
              // dlfd(JSON.stringify(sData.value))
              const newMessage = {
                  id: "me",
                  text: text,
                  time: new Date().toString(),
                  userName: 'me',
                  userColorIndex: 2,
              };
              setMessages((prevMessages) => [...prevMessages, newMessage]);
              
          }
      }
    return (
      <div className='grid grid-flow-row place-content-center'>
        <div className={!readytosend ? "flex flex-col items-center" : "hidden"}>
        <div className='flex place-content-center m-5'>

        <p className={!ready ? "flex flex-row items-center" : "hidden"}>{waittext}<Loader2 className='animate-spin ml-5'/></p>
        </div>
        {/* <h1>Simple Next.js App</h1> */}
        {/* <Button  className="rounded-md border shadow-md m-2"  onClick={handleConnect}>Connect</Button> */}
        <div className='flex flex-row place-content-center'>

        <Button  className="rounded-md border shadow-md m-2"  onClick={()=>{
          savepeer.current=startconn(true)
          setready(false)
          setwt("Initialising connection. Please wait.")
          peer=savepeer.current
          initpeer()
        }}>Start Session</Button>
        <br/>
        <Button  className="rounded-md border shadow-md m-2"  onClick={joinothenable}>Join Session </Button>
        </div>
        <br />
        <p className="text-center text-xl m-5" >
         {showtext}
        </p>
        <br />
        <Button className={showornot.current ? "flex place-content-center rounded-md border shadow-md m-2" : "hidden"} onClick={getanswer}>Connect</Button>
        <div className={joinoth ? "flex flex-col items-center" : "hidden"}>

        <textarea className="rounded-md border shadow-md m-2" placeholder="Enter code here" value={sdp} onChange={(e) => setSdp(e.target.value)} />
        <br />
        <Button  className="rounded-md border shadow-md m-2"  onClick={handleJoin}>Join Session</Button>
        </div>
        <br />
        <div className={readyforconn ? "flex flex-col items-center" : "hidden"}>Ready for Connection</div>
        </div>
        
        
        <br />
        <div className={readytosend ? "flex flex-col items-center  " : "hidden"}>
          <div className='flex flex-col m-5'>
            <textarea className='w-[100%]' placeholder="Enter message to send here" value={text} onChange={(e) => {
                addtext(e.target.value);
                
                }} />
            <br />
            {/* <p>
                {mh}
            </p> */}
            <button onClick={sendMessage}>Send</button>
          </div>
          <br />
        {/* <Fileup peer={savepeer.current}/> */}
        <div className='flex flex-row'>

        <input
          type="file"
          onChange={addfile}
        />
        <Button  className="rounded-md border shadow-md m-2" 
          onClick={handleUpload}
          // loading={sendLoading}
          disabled={fileList.length === 0}
          style={{ marginTop: 16 }}
        >
          {sendLoading ? "Sending" : "Send"}
        </Button>
        </div>
        <section className="flex-1 overflow-y-auto space-y-4 w-[100%]">
        {messages.reverse().map((message) => (
          message.id === "me" ? (
            <div className="flex space-x-4" id={message.id}>
             <Card className="max-w-sm text-center">
             {/* <CardHeader>
                <CardTitle>{message.userName}</CardTitle>
              </CardHeader> */}
              <CardContent>
                <p>{message.text}</p>
              </CardContent>
              <CardFooter>
                <p className='text-xs'>{message.time}</p>
              </CardFooter>
            </Card>
            <Avatar>
              {/* <AvatarImage alt="Chat Partner" src="/placeholder-avatar.jpg" /> */}
              <AvatarFallback>Me</AvatarFallback>
            </Avatar>
          </div>
            // <li key={message.id}>
            //   <span>{message.text}</span>
            //   {/* <span>{message.time}</span> */}
            //   {/* <span>{message.userName}</span> */}
            // </li>
          ) : (
            <div className="flex justify-end space-x-4">
             <Card className="max-w-sm bg-blue-100 text-center">
              {/* <CardHeader>
                <CardTitle>{message.userName}</CardTitle>
              </CardHeader> */}
              <CardContent>
                <p>{message.text}</p>
              </CardContent>
              <CardFooter>
                <p className='text-xs'>{message.time}</p>
              </CardFooter>
            </Card>
            <Avatar>
              {/* <AvatarImage alt="Chat Partner" src="/placeholder-avatar.jpg" /> */}
              <AvatarFallback>{message.userName}</AvatarFallback>
            </Avatar>
          </div>
          )
        ))}
        </section>
          
        
        </div>
        <div className="flex flex-col place-content-center text-left">
          {/* section detailing that this section allows to send data via webrtc across internet */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Send Files via WebRTC</h2>
            <p className="mb-4">This new option allows to send files via WebRTC across the internet.</p>
            <ol className="list-decimal list-inside mb-4">
            <li>
                Tap on "Start session" on this device(device A) and copy the Share code shown here.
              </li>
              <li>
                Go to{" "}
                <a className="text-blue-600 underline" href="#">
                  https://wfmossfrontend.vercel.app
                </a>
                .
              </li>
              <li>
                Tap on "Send over internet" and then choose "Join session" on device B and Enter the Share code received from Device A.
              </li>
              <li>Once the device B is ready for connection.</li>
              <li>Tap on connect on Device A.</li>
              <li>Once connected you can send files.</li>
            </ol>
            <p>
              If you encounter any issues while sending/receiving data post issues at{" "}
              <a className="text-blue-600 underline" href="#">
                https://github.com/visnkmr/wfm_wrtc/issues
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    )
}