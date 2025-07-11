export const myPostsPromise=(email)=>{
    return fetch(`http://localhost:3000/myPosts?email=${email}`).then(res=>res.json())
}