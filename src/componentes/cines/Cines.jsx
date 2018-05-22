import React from 'react';
import CineElement from './CineElement';
import { Table } from 'reactstrap';


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
			return <div className="tamaño-vista">
					 <h2 className="fuente-inicio-titulo">Cines</h2>
					 Cargando nueva lista...
					</div>
            	}else{
			let cines = this.props.cines.map((cine, numeroCine) => {
		 		let mykey = "" + numeroCine;
		  		return (
					<CineElement key={mykey} cine={cine} detalleCineClick={this.detalleCineClick}/>
				);
		  	});
		    	return (<div>
			    		<h2 className="fuente-inicio-titulo">Cines</h2>
			    		<div>
			    			<Table hover>
			    				<tbody>
			    				{cines}
			    				</tbody>
			    			</Table>
			    		</div>
		   	 	</div>);
		}
		
	}
}
