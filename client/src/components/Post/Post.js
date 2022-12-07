import './Post.scss';
import {Link} from 'react-router-dom';

function Post({id, title, content, timestamp, user}) {
    return (
        <div className='post'>
            <Link to={`${id}/comments`} key={id}><h2 className='post__title'>{title}</h2></Link>
            <div className='post__info'>
                <p className='post__info-text'>{user}</p>
                <p className='post__info-text'>{timestamp}</p>
            </div>
            <p className='post__info-text'>{content}</p>
        </div>
    );
};

export default Post;