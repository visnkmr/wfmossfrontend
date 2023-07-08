import { createGlobalState } from 'react-hooks-global-state';

const initialState = { 
    "ipaddress": "",
    "toast":"Hope you enjoy your day today!",
    "search":""

};
const { setGlobalState,useGlobalState } = createGlobalState(initialState);

export {useGlobalState,setGlobalState}