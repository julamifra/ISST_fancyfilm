import React from 'react';
import CarteleraElement from './CarteleraElement';
import { CardColumns } from 'reactstrap';


export default class Cartelera extends React.Component {
	constructor(props){
		super(props);
		this.detallePelisClick = this.detallePelisClick.bind(this);
    	}

	detallePelisClick(peli, urlImg){
        	this.props.detallePelisClick(peli, urlImg);
    	}
	render() {
		let pelis = this.props.pelis;

		if(pelis === undefined){
			return <div className="tamaño-vista">
						<h2 className="fuente-inicio-titulo">Películas</h2>
						Cargando Películas...
					</div>
            	}else{
			let pelis = this.props.pelis.map((peli, numeroPeli) => {
		 		let mykey = "" + numeroPeli;
		  		return (
					<CarteleraElement key={mykey} peli={peli} detallePelisClick={this.detallePelisClick}/>
				);
		  	});
		    	return (<div>
			    		<h2 className="fuente-inicio-titulo">Películas</h2>
			    		<div>
			    			<CardColumns>
			    				{pelis}	
			    			</CardColumns>
			    		</div>
		   	 	</div>);
		}
	}
}
