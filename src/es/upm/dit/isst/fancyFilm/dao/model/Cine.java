package es.upm.dit.isst.fancyFilm.dao.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class Cine  implements Serializable{
	@Id
	private String nombreCine;
	private String direccion;
	@OneToMany(mappedBy = "cine", fetch = FetchType.EAGER)
	private List<Promocion> misPromos;
	
	public Cine () {
		this.misPromos = new ArrayList<>();
	}

	public String getNombreCine() {
		return nombreCine;
	}

	public void setNombreCine(String nombreCine) {
		this.nombreCine = nombreCine;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public List<Promocion> getMisPromos() {
		return misPromos;
	}

	public void setMisPromos(List<Promocion> misPromos) {
		this.misPromos = misPromos;
	}
}
