import './ThreadPage.scss';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

function ThreadPage() {
    const postParams = useParams();
    console.log(postParams)

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState(null)

    // useEffect(() => {
            //gets single comment
    //     axios.get(`http://localhost:8080/posts/${category}/${id}`)
        //axios.get(`http://localhost:8080/comments/${id})
    // })

    if(!post) {
        return (
            <div>
                Loading thread...
            </div>
        )
    }
    return (
        <div>
            List of comments here
        </div>
    );
};

export default ThreadPage;