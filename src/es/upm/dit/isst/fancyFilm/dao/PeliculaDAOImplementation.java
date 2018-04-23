package es.upm.dit.isst.fancyFilm.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

public class PeliculaDAOImplementation implements PeliculaDAO {
	public static PeliculaDAOImplementation instance = null;
	
	private PeliculaDAOImplementation(){}
	public static PeliculaDAOImplementation getInstance(){
		if(null == instance) {
			instance = new PeliculaDAOImplementation();
		}
		return instance;
	}
	
	@Override
	public List<Pelicula> readAllPeliculas() {
		Session session = SessionFactoryService.get().openSession();
		List<Pelicula> pelis = new ArrayList<>();
		try {
			session.beginTransaction();
			pelis.addAll(session.createQuery("select p from Pelicula p").getResultList());
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return pelis;
	}
	@Override
	public void createPelicula(Pelicula peli) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.save(peli);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
		
	}
	@Override
	public Pelicula readPelicula(String nombre) {
		Session session = SessionFactoryService.get().openSession();
		Pelicula pelicula = null;
		try {
			pelicula = session.get(Pelicula.class, nombre);
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return pelicula;
	}
	@Override
	public void updatePelicula(Pelicula peli) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.saveOrUpdate(peli);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
		
	}
	@Override
	public void deletePelicula(Pelicula peli) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.delete(peli);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
		
	}
}
