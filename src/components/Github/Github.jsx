import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AyushKumar2555')
    //     .then(response=>response.json())
    //         .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='items-center justify-around flex bg-orange-50 text-orange-900  shadow-md text-xl  font-semibold rounded-2xl text-center m-4 p-4'>
            <div className='flex flex-col gap-5 w40 text-start'>
              <h1>Github Followers : {data.followers}</h1>  
                <h1>Github UserName: {data.login}</h1>
                <h1>Github Following : {data.following}</h1>

            </div>
            <img
                className='rounded-2xl border-2 '
                src={data.avatar_url}
                alt="gitpicture"
                width={200}
            />
        </div>
    )
}
export default Github
export const githubInfoLoader = async () => {
    const response=await fetch ('https://api.github.com/users/AyushKumar2555')
    return response.json()
}