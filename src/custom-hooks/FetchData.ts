import React, { useState, useEffect } from "react"; // the {  } means we are grabbing the specific thing from react instead of grabbing 
// everything --> {  } is inside the folder of react
import { server_calls } from "../api"; // { server_calls } means it is in the overall index of ../api

// Create custom hook called useGetData

export const useGetData = () => {
    const [droneData, setData] = useState<any>([]) // useState with a type of any --> we default it to an array ([])
    // setData is the manipulator that is going to change droneData
    const handleFetchData = async () => { // wait for the server calls 
        const result = await server_calls.get();
        // Once that happens:
        setData(result)
    };

    // UseEffect goes here ... adds data to the react state 
    useEffect( () => {
        handleFetchData();
    },[])
    return {droneData, getData: handleFetchData} 
}