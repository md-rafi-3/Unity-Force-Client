export const myApplicationsPromise=(email,accessToken)=>{
    return fetch(`https://unity-force-server-nine.vercel.app/applications?email=${email}`,{
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=>res.json())
}