import './Post.scss';

function Post({id, title, content, timestamp, user}) {
    const date = new Date(timestamp)
    return (
        <div className='post'>
            <h2 className='post__title'>{title}</h2>
            <div className='post__info'>
                <p>{user}</p>
                <p>{timestamp}</p>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default Post;