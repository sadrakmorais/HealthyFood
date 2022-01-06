import React from 'react';
import Button from '../button';
import * as S from './styles';

const CardRecipe = ({ recipe }) => {
	return (
		<S.Wrapper>
			<img src={recipe.img} alt='' />
			<div>
				<h1>{recipe.tittle}</h1>
				<Button>See Recipe</Button>
			</div>
		</S.Wrapper>
	);
};

export default CardRecipe;
