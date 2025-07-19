export const myPostsPromise=(email,accessToken)=>{
    return fetch(`https://unity-force-server-nine.vercel.app/myPosts?email=${email}`,{
         headers:{
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=>res.json())
}