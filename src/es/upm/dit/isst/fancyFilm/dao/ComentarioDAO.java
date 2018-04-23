package es.upm.dit.isst.fancyFilm.dao;

import java.util.List;

import es.upm.dit.isst.fancyFilm.dao.model.Comentario;
import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

public interface ComentarioDAO {
	public List<Comentario> readAllComentarios();
	public void createComentario(Comentario comentario);
	public Comentario readComentario(int id);
	public void updateComentario(Comentario comentario);
	public void deleteComentario(Comentario comentario);
}
