import React from 'react';
import img1 from './imagenes/publi4.jpg';
import img2 from './imagenes/publi3.jpg';
import img3 from './imagenes/publi2.jpg';
import img4 from './imagenes/publi5.jpg';

import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: img1,
    altText: '',
    caption: '',
  },
  {
   src: img2,
   altText: '',
   caption: '',
  },
  {
   src: img3,
   altText: '',
   caption: '',
  },
  {
   src: img4,
   altText: '',
   caption: '',
  }
];

export default class Publi extends React.Component {

	render() {
		return(
			<div className="publi">
				<UncontrolledCarousel className="bajar" items ={items}/>
			</div>
		);
	}
}
