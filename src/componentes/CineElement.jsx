import React from 'react';

export default class CineElement extends React.Component {
	constructor(props){
		super(props);
		this.clickCine = this.clickCine.bind(this);
   	}
	clickCine(){
    		this.props.detalleCineClick(this.props.cine);
	}

	render() {
  		let nombreCine = this.props.cine.nombreCine;

      		return (<div>
	      			<table>
					<tbody>
	      				<tr> 
	      					<td><button id="IrCine" onClick={this.clickCine} className = "estiloSeleccion" > {nombreCine} </button></td>
	      				</tr>
					</tbody>
	      			</table>
			</div>
      		);
  	}
}
