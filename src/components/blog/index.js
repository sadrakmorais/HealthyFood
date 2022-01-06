import React from 'react';
import * as S from './styled';
import data from './data';
import BlogPost from '../blog-post';

const Blog = () => {
	return (
		<S.Wrapper id='blog'>
			<div className='container'>
				<h1>Read Our Blog</h1>
				<span>
					Far far away, behind the word mountains, far from the countries Vokalia and
					Consonantia, there live the blind texts.
				</span>

				<S.PostList>
					{data.map((post) => (
						<BlogPost key={post.id} post={post} />
					))}
				</S.PostList>
			</div>
		</S.Wrapper>
	);
};

export default Blog;
