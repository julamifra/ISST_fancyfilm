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

      		return (
      				<tr>   
                <td className="fuente-tabla" id="IrCine" onClick={this.clickCine}> {nombreCine}</td>
              </tr>
      		);
  	}
}

/*<td className="tabla-th"><img className="foto-tabla" src={urlImg}/></td>*/