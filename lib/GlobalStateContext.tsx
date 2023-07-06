import { createGlobalState } from 'react-hooks-global-state';

const initialState = { "ipaddress": "" };
const { setGlobalState,useGlobalState } = createGlobalState(initialState);

export {useGlobalState,setGlobalState}