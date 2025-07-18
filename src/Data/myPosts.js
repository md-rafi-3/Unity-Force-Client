export const myPostsPromise=(email,accessToken)=>{
    return fetch(`http://localhost:3000/myPosts?email=${email}`,{
         headers:{
            authorization: `Bearer ${accessToken}`
        }
    }).then(res=>res.json())
}