package es.upm.dit.isst.fancyFilm.util;

import es.upm.dit.isst.fancyFilm.dao.PeliculaDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

public class crearBBDD {

	public static void main() {
		
		Pelicula peli1 = new Pelicula();
		peli1.setNombre("Avatar");
		peli1.setGenero("Ciencia Ficción");;
		peli1.setAño("2009");
		peli1.setPais("Estados Unidos");
		peli1.setDirectorNombre("James Cameron");
		peli1.setIdioma("Inglés");
		peli1.setTrailerURL("https://www.youtube.com/embed/kbA9TfGphOI");
		PeliculaDAOImplementation.getInstance().createPelicula(peli1);
		
		Pelicula peli2 = new Pelicula();
		peli2.setNombre("Titanic");
		peli2.setGenero("Romance");
		peli2.setAño("1997");
		peli2.setPais("Estados Unidos");
		peli2.setDirectorNombre("James Cameron");
		peli2.setIdioma("Inglés");
		peli2.setTrailerURL("https://www.youtube.com/embed/xdIY4OjPas0&t=51s");
		PeliculaDAOImplementation.getInstance().createPelicula(peli2);
		

		Pelicula peli3 = new Pelicula();
		peli3.setNombre("Campeones");
		peli3.setGenero("Comedia");
		peli3.setAño("2018");
		peli3.setPais("España");
		peli3.setDirectorNombre("Javier Fresser");
		peli3.setIdioma("Español");
		peli3.setTrailerURL("https://www.youtube.com/embed/C0p5-b3YwIM");
		PeliculaDAOImplementation.getInstance().createPelicula(peli3);
		
		Pelicula peli4 = new Pelicula();
		peli4.setNombre("E.T.");
		peli4.setGenero("Ciencia Ficción");
		peli4.setAño("1982");
		peli4.setPais("Estados Unidos");
		peli4.setDirectorNombre("Steven Spielberg");
		peli4.setIdioma("ingles");
		peli4.setTrailerURL("https://www.youtube.com/embed/jzC0c-GWeDQ");
		PeliculaDAOImplementation.getInstance().createPelicula(peli4);
	}

}
