import React,{useState} from 'react'

export const Home = () => {
    const [myname,setmyname]=useState("all_components")
    const change_name = () =>{
        if(myname === "all_components") setmyname("expenseTracker");
        else setmyname("all_components");
        

    }
    console.log(myname);
    return (
        <div className='container'>
            <h3>{myname}</h3>
            <button className='btn' onClick={change_name}> click</button>

        </div>
    )
}
