export const myApplicationsPromise=(email,accessToken)=>{
    return fetch(`http://localhost:3000/applications?email=${email}`,{
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=>res.json())
}