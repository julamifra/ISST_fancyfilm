import React from 'react';
import TablaElement from './TablaElement';

export default class Tabla extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		let pelis = this.props.pelis;
		let sines = this.props.sines;

		/*if(pelis.length>0){
            return(
                <div>
                    <h1>Películas</h1>
                    <ul>
                        {pelis.map((dato, index) => {
                            return (<li key={index}>
                                <p>{dato.titulo}</p>
                                <p>{dato.portada}</p>
                                <p>{dato.año}</p>
                                <p>{dato.sinopsis}</p>
                                <p>{dato.genero}</p>
                                <p>{dato.trailer}</p>
                                <p>{dato.valoracion}</p>
                                <p>{dato.director}</p>
                                <p>{dato.reparto}</p>
                            </li>);
                        })
                        }
                    </ul>
                </div>
            );
        }else{
            return(
                <div>
                    <p>Cargando nueva lista...</p>
                </div>
            )
        }

        if(sines.length>0){
           


dentro del div-->
<ul>
                        {pelis.map((dato, index) => {
                            return (<li key={index}>
                                <p>{dato.nombre}</p>
                                <p>{dato.foto}</p>
                                <p>{dato.direccion}</p>
                                <p>{dato.promociones}</p>
                                <p>{dato.horarios}</p>
                                <p>{dato.valoracion}</p>
                                <p>{dato.correo}</p>
                            </li>);
                        })
                        }
                    </ul>

           */ return(
                <div>
                    <h1>Cines</h1>
                </div>
            );
       /* }else{
            return(
                <div>
                    <p>Cargando nueva lista...</p>
                </div>
            )
        }*/
	}
}