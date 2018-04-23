package es.upm.dit.isst.fancyFilm.dao.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
public class Pelicula implements Serializable{
	@Id
	private String nombre;
	private String genero;
	private String año;
	private String pais;
	private String directorNombre;
	private String idioma;
	@Lob
	private byte[] cartel;
	private String trailerURL;
	@OneToMany(mappedBy = "pelicula", fetch = FetchType.EAGER)
	private List<Comentario> misComentarios;

	public Pelicula() {
		this.misComentarios = new ArrayList<>();
	}
	
	public List<Comentario> getMisComentarios() {
		return misComentarios;
	}

	public void setMisComentarios(List<Comentario> misComentarios) {
		this.misComentarios = misComentarios;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getAño() {
		return año;
	}

	public void setAño(String año) {
		this.año = año;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public String getDirectorNombre() {
		return directorNombre;
	}

	public void setDirectorNombre(String directorNombre) {
		this.directorNombre = directorNombre;
	}

	public String getIdioma() {
		return idioma;
	}

	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}

	public byte[] getCartel() {
		return cartel;
	}

	public void setCartel(byte[] cartel) {
		this.cartel = cartel;
	}

	public String getTrailerURL() {
		return trailerURL;
	}

	public void setTrailerURL(String trailerURL) {
		this.trailerURL = trailerURL;
	}
	
	
}
