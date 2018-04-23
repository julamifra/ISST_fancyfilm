package es.upm.dit.isst.fancyFilm.dao.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class Comentario implements Serializable{
	@Id
	private int id;
	private String cuerpo;
	private int valoracion;
	@ManyToOne
	private Pelicula pelicula;
	
	public Comentario() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCuerpo() {
		return cuerpo;
	}

	public void setCuerpo(String cuerpo) {
		this.cuerpo = cuerpo;
	}

	public int getValoracion() {
		return valoracion;
	}

	public void setValoracion(int valoracion) {
		this.valoracion = valoracion;
	}

	public Pelicula getPelicula() {
		return pelicula;
	}

	public void setPelicula(Pelicula pelicula) {
		this.pelicula = pelicula;
	}
	
}
