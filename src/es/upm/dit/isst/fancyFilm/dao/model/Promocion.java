package es.upm.dit.isst.fancyFilm.dao.model;

import java.io.Serializable;

import javax.persistence.*;

@Entity
public class Promocion implements Serializable{
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String titulo;
	@Column(columnDefinition = "longvarchar") 
	private String descripcion;
	@ManyToOne
	private Cine cine;
	
	public Promocion() {
		
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public Cine getCine() {
		return cine;
	}

	public void setCine(Cine cine) {
		this.cine = cine;
	}
	
	
}
