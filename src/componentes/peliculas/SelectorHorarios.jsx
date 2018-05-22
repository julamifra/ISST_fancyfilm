import React from 'react';
import { Button, Collapse, ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, Alert, DropdownItem } from 'reactstrap';

export default class SelectorHorarios extends React.Component {

	constructor(props) {
    	super(props);
    	this.toggleDrop = this.toggleDrop.bind(this);
    	this.toggle = this.toggle.bind(this);
    	this.changeValue = this.changeValue.bind(this);
    	this.addPeli = this.addPeli.bind(this);
    	this.state = { collapse: false,
    				cSelected: [],
    				dropdownOpen: false,
    				dropdownValue: 'Hora',
            visibleHorario: false,
    				horarios: [] };
    	this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
      this.onDismiss = this.onDismiss.bind(this);
  	}
    onDismiss(){
      this.setState({
        visibleHorario: false,})
    }

  	addPeli(){
  		console.log("entra en addpeli");
  		var horaLista;
  		var i;
  		var long = this.state.cSelected.length;
  		for(i = 0; i < long; i++){
  			console.log("entra bucle");
  			if(this.state.cSelected === 0){
  				horaLista = this.state.dropdownValue + ':00'
  			}if(this.state.cSelected === 1){
  				horaLista = this.state.dropdownValue + ':15'
  			}if(this.state.cSelected === 2){
  				horaLista = this.state.dropdownValue + ':30'
  			}else{
  				horaLista = this.state.dropdownValue + ':45'
  			}

  			//this.state.horarios += horaLista;
  			this.setState( {dropdownValue: 'Hora',
          horarios: this.state.horarios + horaLista,
          cSelected: [],
          visibleHorario:true,
      });
  			
  		}
 
  	}

  	changeValue(e) {
  		this.setState({dropdownValue: e.currentTarget.textContent})
	}

  	toggleDrop() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  	toggle() {
    	this.setState({ collapse: !this.state.collapse });
  	}

  	onCheckboxBtnClick(selected) {
    	const index = this.state.cSelected.indexOf(selected);
    	if (index < 0) {
      		this.state.cSelected.push(selected);
    	}else {
      		this.state.cSelected.splice(index, 1);
    	}
    	this.setState({ cSelected: [...this.state.cSelected] });
  	}

	render() {
				return (
      			<div>
              <Alert color="info" isOpen={this.state.visibleHorario} toggle={this.onDismiss}>
                Se ha añadido El Horario correctamente
              </Alert>
	           		 <div className = "div">
	           		 <Button outline color="secondary" onClick={this.toggle}>Añadir Horario</Button>
	           		 <Collapse isOpen={this.state.collapse}>
	           		 	<p className="fuente-contacta">Seleccione las horas de emisión:</p>
	           		 	<ButtonGroup>
	           		 		<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDrop}>
        						<DropdownToggle caret >
          							{this.state.dropdownValue}
        						</DropdownToggle>
        						<DropdownMenu>
          							<DropdownItem header>Seleccione una hora</DropdownItem>
          							<DropdownItem divider />
          							<DropdownItem onClick= {this.changeValue}>15</DropdownItem>
          							<DropdownItem onClick= {this.changeValue}>16</DropdownItem>
          							<DropdownItem onClick= {this.changeValue}>17</DropdownItem>
          							<DropdownItem onClick= {this.changeValue}>18</DropdownItem>
          							<DropdownItem onClick= {this.changeValue}>19</DropdownItem>
          							<DropdownItem onClick= {this.changeValue}>20</DropdownItem>
          							<DropdownItem onClick= {this.changeValue}>21</DropdownItem>
          							<DropdownItem onClick= {this.changeValue}>22</DropdownItem>
          							<DropdownItem onClick= {this.changeValue}>23</DropdownItem>
        						</DropdownMenu>
      						</ButtonDropdown>
          					<Button color="secondary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>00</Button>
          					<Button color="secondary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>15</Button>
          					<Button color="secondary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>30</Button>
        					<Button color="secondary" onClick={() => this.onCheckboxBtnClick(4)} active={this.state.cSelected.includes(4)}>45</Button>

        				</ButtonGroup>
        				<p/>
        				<Button outline color="secondary" onClick= {this.addPeli} >Añadir</Button>
        				<div> {this.state.horaLista}</div>
	           		 </Collapse>
	           		 </div>
           		</div>
      		);
  		     
  	}
}
