import React from 'react';
import * as S from './styled';
import data from './data';
import BlogPost from '../blog-post';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 3,
		partialVisibilityGutter: 40,
	},
	mobile: {
		breakpoint: {
			max: 650,
			min: 0,
		},
		items: 1,
		partialVisibilityGutter: 30,
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 650,
		},
		items: 2,
		partialVisibilityGutter: 30,
	},
};

const Blog = () => {
	return (
		<S.Wrapper id='blog'>
			<div className='container'>
				<h1>Read Our Blog</h1>
				<span>
					Far far away, behind the word mountains, far from the countries Vokalia and
					Consonantia, there live the blind texts.
				</span>
			</div>

			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className=''
				containerClass='containerCarousel'
				dotListClass=''
				draggable
				focusOnSelect={false}
				infinite={false}
				itemClass=''
				keyBoardControl
				minimumTouchDrag={80}
				partialVisible
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={responsive}
				showDots={false}
				sliderClass=''
				slidesToSlide={1}>
				{data.map((post) => (
					<BlogPost key={post.id} post={post} />
				))}
			</Carousel>
		</S.Wrapper>
	);
};

export default Blog;
