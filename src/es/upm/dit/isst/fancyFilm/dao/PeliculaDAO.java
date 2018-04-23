package es.upm.dit.isst.fancyFilm.dao;

import java.util.List;

import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

public interface PeliculaDAO {
	public List<Pelicula> readAllPeliculas();
	public void createPelicula(Pelicula peli);
	public Pelicula readPelicula(String nombre);
	public void updatePelicula(Pelicula peli);
	public void deletePelicula(Pelicula peli);
}
