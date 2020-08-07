import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return(
    <div className={s.item}>
    <img src="https://www.1zoom.ru/big2/946/289597-frederika.jpg" alt="avatar.pic" />
    {props.message}
    <div>
      <span>Like: {props.likesCount}</span>
    </div>
    </div>
  )
}

export default Post;
