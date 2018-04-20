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
		let carteleraseleccionado = this.props.carteleraseleccionado;
		let cinesseleccionado = this.props.cinesseleccionado;
		if(carteleraseleccionado === 1){
            /*
COMO NO ESTA EL JSON, HE COMENTADO ESTO Y ENTRA EN EL ELSE DE LA OTRA CONDICION!!!!!
            return(
                <div>
                    <h1>Películas</h1>
                    <ul>
                        {carteleraseleccionado.map((dato, index) => {
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
            );*/
        }else{
            return(
                <div>
                	<h1>Cines</h1>
                    <p>Cargando nueva lista...</p>
                </div>
            )
        }

        if(cinesseleccionado === 1){
        	console.log("entra en cines");
           return(
                <div>
                    <h1>Cines</h1>
                   <ul>
                        {cinesseleccionado.map((dato, index) => {
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
                </div>
            );
        }else{
            return(
                <div>
                	<h1>Películas</h1>
                    <p>Cargando nueva lista...</p>
                </div>
            )
        }
	}
}