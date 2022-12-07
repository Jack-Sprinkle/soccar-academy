import './Post.scss';

function Post({id, title, content, timestamp, user}) {
    return (
        <div className='post'>
            <h2 className='post__title'>{title}</h2>
            <div className='post__info'>
                <p className='post__info-text'>{user}</p>
                <p className='post__info-text'>{timestamp}</p>
            </div>
            <p className='post__info-text'>{content}</p>
        </div>
    );
};

export default Post;