package es.upm.dit.isst.fancyFilm.dao;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import es.upm.dit.isst.fancyFilm.dao.model.Espectador;

public class EspectadorDAOImplementationTest {
	private Espectador espectador = null;
	@Before
	public void setUp() throws Exception {
	  espectador = new Espectador();
	  espectador.setEmail("pruebaespectador@fancyfilm.com");
	  espectador.setPassword("pruebapw");
	  espectador.setUsuario("Espec");
	  espectador.setNombreEspectador("Espectador Prueba");
	  EspectadorDAOImplementation.getInstance().createEspectador(espectador);
	}
	@After
	public void tearDown() throws Exception {
	  EspectadorDAOImplementation.getInstance().deleteEspectador(espectador);
	  espectador = null;
	}
	
	@Test
	public void testCreateEspectador() {
		EspectadorDAO dao = EspectadorDAOImplementation.getInstance();
		Espectador espectador2 = new Espectador();
		espectador2.setEmail("crearespectador@fancyfilm.com");
		espectador2.setPassword("pruebapw");
		espectador2.setUsuario("CreateEspec");
		espectador2.setNombreEspectador("Espectador Crear");
		dao.createEspectador(espectador2);
			
		Espectador espectador3 = dao.readEspectador("crearespectador@fancyfilm.com");
		dao.deleteEspectador(espectador2);
		
		assertEquals(espectador2.getEmail(), espectador3.getEmail());
		assertEquals(espectador2.getPassword(), espectador3.getPassword());
		assertEquals(espectador2.getUsuario(), espectador3.getUsuario());
		assertEquals(espectador2.getNombreEspectador(), espectador3.getNombreEspectador());
	}

	@Test
	public void testReadEspectador() {
		EspectadorDAO dao = EspectadorDAOImplementation.getInstance();
		Espectador espectador2 = dao.readEspectador("pruebaespectador@fancyfilm.com");
		assertEquals(espectador.getEmail(), espectador2.getEmail());
		assertEquals(espectador.getPassword(), espectador2.getPassword());
		assertEquals(espectador.getUsuario(), espectador2.getUsuario());
		assertEquals(espectador.getNombreEspectador(), espectador2.getNombreEspectador());
	}

	@Test
	public void testUpdateEspectador() {
		EspectadorDAO dao = EspectadorDAOImplementation.getInstance();
		Espectador espectador2 = dao.readEspectador("pruebaespectador@fancyfilm.com");
		espectador2.setNombreEspectador("Distinto Nombre");
		dao.updateEspectador(espectador2);
		assertNotEquals(espectador.getNombreEspectador(), espectador2.getNombreEspectador());
		assertEquals(espectador.getEmail(), espectador2.getEmail());
	}

	@Test
	public void testDeleteEspectador() {
		EspectadorDAO dao = EspectadorDAOImplementation.getInstance();
		dao.deleteEspectador(espectador);
		Espectador espectador2 = dao.readEspectador("pruebaespectador@fancyfilm.com");
		assertNull(espectador2);
	}

}
