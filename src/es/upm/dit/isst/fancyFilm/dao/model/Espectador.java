package es.upm.dit.isst.fancyFilm.dao.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Espectador implements Serializable{
	@Id
	private String email;
	private String password;
	private String nombreEspectador;
	private String usuario;
	@OneToMany(mappedBy = "espectador", fetch = FetchType.EAGER)
	private List<Comentario> misComentarios;
	
	public Espectador() {
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
	
	public String getNombreEspectador() {
		return nombreEspectador;
	}

	public void setNombreEspectador(String nombreEspectador) {
		this.nombreEspectador = nombreEspectador;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public List<Comentario> getMisComentarios() {
		return misComentarios;
	}

	public void setMisComentarios(List<Comentario> misComentarios) {
		this.misComentarios = misComentarios;
	}
	
	
}
