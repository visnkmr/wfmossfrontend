import { createGlobalState } from 'react-hooks-global-state';

const initialState = { 
    "ipaddress": "",
    "toast":"Hope you enjoy your day today!",
    "toast-visible":true,
    "search":"",
    "table-visible":true

};
const { setGlobalState,useGlobalState,getGlobalState } = createGlobalState(initialState);

export {useGlobalState,setGlobalState,getGlobalState}