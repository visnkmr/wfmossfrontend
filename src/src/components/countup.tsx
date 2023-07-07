'use client'
import CountUp from 'react-countup';

export default function Upto(){
    return (
        <CountUp enableScrollSpy start={14999900} end={15000000} duration={20}/>
    );
}