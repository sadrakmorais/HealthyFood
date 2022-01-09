import React from 'react';
import Button from '../button';
import * as S from './styles';

type Props = {
recipe: any,
}

const CardRecipe = ({ recipe }: Props) => {
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
