import img1 from '../../assets/comida_1.svg';
import img2 from '../../assets/comida_2.svg';
import img3 from '../../assets/comida_3.svg';
import img4 from '../../assets/comida_4.svg';
import {randomId } from '@mui/x-data-grid-generator';

const data = [
	{
		id:randomId(),
		img: img1,
		tittle: 'Broccoli Salad with Bacon',
	},
	{
		id:randomId(),

		img: img2,
		tittle: 'Classic Beef Burgers',
	},
	{
		id:randomId(),

		img: img3,
		tittle: 'Classic Potato Salad',
	},
	{
		id:randomId(),
		img: img4,
		tittle: 'Cherry Cobbler on the Grill',
	},
];

export default data;
