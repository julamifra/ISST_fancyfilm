import React from 'react';

export default class CarteleraElement extends React.Component {

	constructor(props){
		super(props);
		this.clickPeli = this.clickPeli.bind(this);
    	}
	clickPeli(){
    		this.props.detallePelisClick(this.props.peli);
	}

	render() {
  		let nombrePeli = this.props.peli.nombre;

      		return (<div>
	      			<table>
					<tbody>
	      				<tr> 
	      					<td><button id="IrPeli" onClick={this.clickPeli} className = "estiloSeleccion"> {nombrePeli} </button></td>
	      				</tr>
					</tbody>
	      			</table>
			</div>
      		);
  	}
}
