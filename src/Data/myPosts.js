export const myPostsPromise=(email)=>{
    return fetch(`http://localhost:3000/needPosts?email=${email}`).then(res=>res.json())
}