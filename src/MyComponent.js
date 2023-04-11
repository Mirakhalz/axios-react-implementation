import React ,{useState,useEffect} from 'react';
import axios from 'axios';

const MyComponent = () => {

    //state variable hooks

    const [data,setData]=useState([])

    //aynchronous function declaration
    const fetchData=()=> {
        try{
            const response = await axios.get("")
        }

    }

    return (
        <div>
            {/*here the JSX syntax goes here */}
            <h1>My component</h1>
        </div>
    )
}

export default MyComponent