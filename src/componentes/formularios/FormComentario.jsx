import React from 'react';
import { InputGroup, Input, Label, FormGroup } from 'reactstrap';


export default class FormComentario extends React.Component {
		constructor(props){
		super(props);
		this.clickPostComentario = this.clickPostComentario.bind(this);
    }
	clickPostComentario(){
		let email = document.getElementsByName("quien")[0].value;
		let tipo = document.getElementsByName("tipo")[0].value;
		let nombre = document.getElementsByName("nombre")[0].value;
    	let valoracion = document.getElementsByName("valoracion")[0].value;
    	let cuerpo = document.getElementsByName("cuerpo")[0].value;
    	this.props.clickPostComentario(email, tipo, nombre, valoracion, cuerpo);
	}

	render() {
		return(<div>	
				<FormGroup>
					<input type="hidden" name="quien" value={this.props.espectadorLogeado}/>
					<input type="hidden" name="tipo" value={this.props.tipo}/>
					<input type="hidden" name="nombre" value={this.props.nombre} />
					<InputGroup>
						<Input type="number" name="valoracion"  placeholder= "Valoracion" id = "input1" min="0" max="10" required />
					</InputGroup>
				</FormGroup>
				<FormGroup>
					
						<Label className="fuente-contacta" for="exampleText">Comentario</Label>
						<Input type="textarea" name="cuerpo"  id = "input1" rows="5" />
					
				</FormGroup>
					<p> </p>
					<button className="estiloSeleccion" onClick={this.clickPostComentario}>Publicar Comentario </button>
					<p></p>
		</div>);
	}
}
