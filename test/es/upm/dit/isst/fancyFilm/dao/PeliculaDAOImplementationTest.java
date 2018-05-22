package es.upm.dit.isst.fancyFilm.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;;

public class PeliculaDAOImplementationTest {
	private Pelicula pelicula = null;
	@Before
	public void setUp() throws Exception {
		pelicula = new Pelicula();
		pelicula.setNombre("Pelicula Prueba");
		pelicula.setGenero("Genero Prueba");
		pelicula.setAño("2018");
		pelicula.setPais("España");
		pelicula.setDirectorNombre("Scrum");
		pelicula.setIdioma("Español");
		PeliculaDAOImplementation.getInstance().createPelicula(pelicula);
	}
	@After
	public void tearDown() throws Exception {
	  PeliculaDAOImplementation.getInstance().deletePelicula(pelicula);
	  pelicula = null;
	}
	
	@Test
	public void testReadAllPeliculas() {
		PeliculaDAO dao = PeliculaDAOImplementation.getInstance();
		List<Pelicula> peliculas = dao.readAllPeliculas();
		assertNotNull(peliculas);
	}

	@Test
	public void testCreatePelicula() {
		PeliculaDAO dao = PeliculaDAOImplementation.getInstance();
		Pelicula pelicula2 = new Pelicula();
		pelicula2 = new Pelicula();
		pelicula2.setNombre("Pelicula Crear");
		pelicula2.setGenero("Genero Crear");
		pelicula2.setAño("2018");
		pelicula2.setPais("España");
		pelicula2.setDirectorNombre("Kanban");
		pelicula2.setIdioma("Español");
		dao.createPelicula(pelicula2);
			
		Pelicula pelicula3 = dao.readPelicula("Pelicula Crear");
		dao.deletePelicula(pelicula2);
		
		assertEquals(pelicula2.getNombre(), pelicula3.getNombre());
		assertEquals(pelicula2.getGenero(), pelicula3.getGenero());
		assertEquals(pelicula2.getAño(), pelicula3.getAño());
		assertEquals(pelicula2.getPais(), pelicula3.getPais());
		assertEquals(pelicula2.getDirectorNombre(), pelicula3.getDirectorNombre());
		assertEquals(pelicula2.getIdioma(), pelicula3.getIdioma());
	}

	@Test
	public void testReadPelicula() {
		PeliculaDAO dao = PeliculaDAOImplementation.getInstance();
		Pelicula pelicula2 = dao.readPelicula("Pelicula Prueba");
		assertEquals(pelicula.getNombre(), pelicula2.getNombre());
		assertEquals(pelicula.getGenero(), pelicula2.getGenero());
		assertEquals(pelicula.getAño(), pelicula2.getAño());
		assertEquals(pelicula.getPais(), pelicula2.getPais());
		assertEquals(pelicula.getDirectorNombre(), pelicula2.getDirectorNombre());
		assertEquals(pelicula.getIdioma(), pelicula2.getIdioma());
	}

	@Test
	public void testUpdatePelicula() {
		PeliculaDAO dao = PeliculaDAOImplementation.getInstance();
		Pelicula pelicula2 = dao.readPelicula("Pelicula Prueba");
		pelicula2.setGenero("Distinto Genero");
		dao.updatePelicula(pelicula2);
		assertNotEquals(pelicula.getGenero(), pelicula2.getGenero());
		assertEquals(pelicula.getNombre(), pelicula2.getNombre());
	}

	@Test
	public void testDeletePelicula() {
		PeliculaDAO dao = PeliculaDAOImplementation.getInstance();
		dao.deletePelicula(pelicula);
		Pelicula pelicula2 = dao.readPelicula("Pelicula Prueba");
		assertNull(pelicula2);
	}

}
