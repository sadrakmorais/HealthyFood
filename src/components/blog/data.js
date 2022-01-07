import img1 from '../../assets/blog_image_1.svg';
import img2 from '../../assets/bloco_image_2.svg';
import img3 from '../../assets/bloco_image_3.svg';
import img4 from '../../assets/bloco_image_4.svg';
import avt1 from '../../assets/Photo.svg';
import avt2 from '../../assets/Photo-1.svg';
import avt3 from '../../assets/Photo-2.svg';
import avt4 from '../../assets/Photo-3.svg';
import { randomTraderName, randomId } from '@mui/x-data-grid-generator';
const data = [
	{
		id: randomId(),
		imgPost: img1,
		tittle: `Quick-start guide
    to nuts and seeds`,
		author: {
			avatar: avt1,
			name: randomTraderName(),
		},
	},
	{
		id: randomId(),
		imgPost: img1,
		tittle: `Quick-start guide
    to nuts and seeds`,
		author: {
			avatar: avt1,
			name: randomTraderName(),
		},
	},
	{
		id: randomId(),
		imgPost: img2,
		tittle: `Nutrition: Tips for
    Improving Your Health`,
		author: {
			avatar: avt2,
			name: randomTraderName(),
		},
	},
	{
		id: randomId(),
		imgPost: img3,
		tittle: `The top 10 benefits
    of eating healthy`,
		author: {
			avatar: avt3,
			name: randomTraderName(),
		},
	},
	{
		id: randomId(),
		imgPost: img4,
		tittle: `What Makes a
    Healthy Diet?`,
		author: {
			avatar: avt4,
			name: randomTraderName(),
		},
	},
	{
		id: randomId(),
		imgPost: img4,
		tittle: `What Makes a
    Healthy Diet?`,
		author: {
			avatar: avt4,
			name: randomTraderName(),
		},
	},
];

export default data;
