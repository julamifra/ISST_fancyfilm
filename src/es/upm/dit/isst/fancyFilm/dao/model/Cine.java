package es.upm.dit.isst.fancyFilm.dao.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;


@Entity
public class Cine implements Serializable{
	@Id
	private String email;
	private String password;
	private String nombreCine;
	private String direccion;
	@OneToMany(mappedBy = "cine", fetch = FetchType.EAGER)
	private List<Promocion> misPromos;
	@LazyCollection(LazyCollectionOption.FALSE)
	@OneToMany(mappedBy = "cine")
	private List<Comentario> misComentarios;
	
	public Cine () {
		this.misPromos = new ArrayList<>();
		this.misComentarios = new ArrayList<>();
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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

	public List<Comentario> getMisComentarios() {
		return misComentarios;
	}

	public void setMisComentarios(List<Comentario> misComentarios) {
		this.misComentarios = misComentarios;
	}
}
