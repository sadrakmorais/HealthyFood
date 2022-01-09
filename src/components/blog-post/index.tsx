import React from 'react';
import * as S from './styled';

type Props = {
	post: any,
}

const BlogPost = ({ post }: Props) => {
	return (
		<S.Wrapper>
			<img src={post.imgPost} alt='' />
			<div className='containerInfos'>
				<h1>{post.tittle}</h1>
				<div className='infosAuthor'>
					<img src={post.author.avatar} alt={post.author.name} loading='lazy' />
					<span>{post.author.name}</span>
				</div>
			</div>
		</S.Wrapper>
	);
};

export default BlogPost;
