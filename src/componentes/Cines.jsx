import React from 'react';
import CineElement from './CineElement';


export default class Cines extends React.Component {
	constructor(props){
		super(props);
		this.detalleCineClick = this.detalleCineClick.bind(this);
	    }

	detalleCineClick(cine){
		this.props.detalleCineClick(cine);
	    }

	render() {
		let cines = this.props.cines;

		if(cines === undefined){
			return <div>Cargando nueva lista...</div>
            	}else{
			let cines = this.props.cines.map((cine, numeroCine) => {
		 		let mykey = "" + numeroCine;
		  		return (
					<CineElement key={mykey} cine={cine} detalleCineClick={this.detalleCineClick}/>
				);
		  	});
		    	return (<div>
			    		<h2 className="fuente-inicio-titulo">Cines</h2>
			    		<div >{cines}</div>
		   	 	</div>);
		}
		
	}
}
