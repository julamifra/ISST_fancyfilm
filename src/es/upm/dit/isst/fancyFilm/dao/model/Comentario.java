package es.upm.dit.isst.fancyFilm.dao.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class Comentario implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	@Column(columnDefinition = "longvarchar") 
	private String cuerpo;
	private String espectadorNombre;
	private int valoracion;
	@ManyToOne
	private Pelicula pelicula;
	@ManyToOne
	private Cine cine;
	@ManyToOne
	private Espectador espectador;
	
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

	public Cine getCine() {
		return cine;
	}

	public void setCine(Cine cine) {
		this.cine = cine;
	}

	public Espectador getEspectador() {
		return espectador;
	}

	public void setEspectador(Espectador espectador) {
		this.espectador = espectador;
	}

	public String getEspectadorNombre() {
		return espectadorNombre;
	}

	public void setEspectadorNombre(String espectadorNombre) {
		this.espectadorNombre = espectadorNombre;
	}
	
}
