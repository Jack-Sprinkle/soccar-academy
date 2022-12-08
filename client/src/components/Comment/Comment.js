import './Comment.scss';

function Comment({content, timestamp, user}) {
    return (
        <div className='comment'>
            <div className='comment__info'>
                <h3 className='comment__info-text'>{user}</h3>
                <h3 className='comment__info-text'>{timestamp}</h3>
            </div>
            <p className='comment__content'>{content}</p>
        </div>
    );
};

export default Comment;