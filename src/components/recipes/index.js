import React from 'react';
import * as S from './styles';
import data from './data';
import CardRecipe from '../card-recipes';

const Recipes = () => {
	return (
		<S.Recipes id='recipes'>
			<h1>Our Best Recipes</h1>
			<span>
				Far far away, behind the word mountains, far from the countries Vokalia and
				Consonantia, there live the blind texts.
			</span>
			<section>
				{data.map((recipe, index) => (
					<CardRecipe recipe={recipe} key={data.index} />
				))}{' '}
			</section>
		</S.Recipes>
	);
};

export default Recipes;
