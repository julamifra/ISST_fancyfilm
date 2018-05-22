package es.upm.dit.isst.fancyFilm.dao;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import es.upm.dit.isst.fancyFilm.dao.model.Cine;

public class CineDAOImplementationTest {
	private Cine cine = null;
	@Before
	public void setUp() throws Exception {
	  cine = new Cine();
	  cine.setEmail("pruebacine@fancyfilm.com");
	  cine.setPassword("pruebapw");
	  cine.setDireccion("Calle Prueba");
	  cine.setNombreCine("Cine Prueba");
	  CineDAOImplementation.getInstance().createCine(cine);
	}
	@After
	public void tearDown() throws Exception {
	  CineDAOImplementation.getInstance().deleteCine(cine);
	  cine = null;
	}

	@Test
	public void testReadAllCines() {
		CineDAO dao = CineDAOImplementation.getInstance();
		List<Cine> cines = dao.readAllCines();
		assertNotNull(cines);
	}

	@Test
	public void testCreateCine() {
		CineDAO dao = CineDAOImplementation.getInstance();
		Cine cine2 = new Cine();
		cine2.setEmail("crearcine@fancyfilm.com");
		cine2.setPassword("pruebapw");
		cine2.setDireccion("Calle Crear");
		cine2.setNombreCine("Cine Crear");
		dao.createCine(cine2);
			
		Cine cine3 = dao.readCine("crearcine@fancyfilm.com");
		dao.deleteCine(cine2);
		
		assertEquals(cine2.getEmail(), cine3.getEmail());
		assertEquals(cine2.getPassword(), cine3.getPassword());
		assertEquals(cine2.getDireccion(), cine3.getDireccion());
		assertEquals(cine2.getNombreCine(), cine3.getNombreCine());

	}

	@Test
	public void testReadCine() {
		CineDAO dao = CineDAOImplementation.getInstance();
		Cine cine2 = dao.readCine("pruebacine@fancyfilm.com");
		assertEquals(cine.getEmail(), cine2.getEmail());
		assertEquals(cine.getPassword(), cine2.getPassword());
		assertEquals(cine.getDireccion(), cine2.getDireccion());
		assertEquals(cine.getNombreCine(), cine2.getNombreCine());
	}

	@Test
	public void testUpdateCine() {
		CineDAO dao = CineDAOImplementation.getInstance();
		Cine cine2 = dao.readCine("pruebacine@fancyfilm.com");
		cine2.setNombreCine("Distinto Nombre");
		dao.updateCine(cine2);
		assertNotEquals(cine.getNombreCine(), cine2.getNombreCine());
		assertEquals(cine.getEmail(), cine2.getEmail());
	}

	@Test
	public void testDeleteCine() {
		CineDAO dao = CineDAOImplementation.getInstance();
		dao.deleteCine(cine);
		Cine cine2 = dao.readCine("pruebacine@fancyfilm.com");
		assertNull(cine2);
	}

}
