import React, { use } from 'react';

const MyPost = ({myPostsPromise}) => {
    const myPostsData=use(myPostsPromise)
    console.log(myPostsData)
    return (
        <div>
            
        </div>
    );
};

export default MyPost;