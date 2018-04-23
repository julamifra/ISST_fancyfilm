import React from 'react';
import CarteleraElement from './CarteleraElement';


export default class Cartelera extends React.Component {
	constructor(props){
		super(props);
		this.detallePelisClick = this.detallePelisClick.bind(this);
    	}

	detallePelisClick(peli){
        	this.props.detallePelisClick(peli);
    	}
	render() {
		let pelis = this.props.pelis;

		if(pelis === undefined){
			return <div>Cargando nueva lista...</div>
            	}else{
			let pelis = this.props.pelis.map((peli, numeroPeli) => {
		 		let mykey = "" + numeroPeli;
		  		return (
					<CarteleraElement key={mykey} peli={peli} detallePelisClick={this.detallePelisClick}/>
				);
		  	});
		    	return (<div>
			    		<h2 className="fuente-inicio-titulo">Películas</h2>
			    		<div>{pelis}</div>
		   	 	</div>);
		}
	}
}
