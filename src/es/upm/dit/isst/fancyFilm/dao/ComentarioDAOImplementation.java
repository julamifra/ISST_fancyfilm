package es.upm.dit.isst.fancyFilm.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.fancyFilm.dao.model.Comentario;
import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

public class ComentarioDAOImplementation implements ComentarioDAO{
	public static ComentarioDAOImplementation instance = null;
	private static int idNext = 1;
	
	private ComentarioDAOImplementation(){}
	public static ComentarioDAOImplementation getInstance(){
		if(null == instance) {
			instance = new ComentarioDAOImplementation();
		}
		return instance;
	}
	@Override
	public List<Comentario> readAllComentarios() {
		Session session = SessionFactoryService.get().openSession();
		List<Comentario> comentarios = new ArrayList<>();
		try {
			session.beginTransaction();
			comentarios.addAll(session.createQuery("select com from Comentario com").getResultList());
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return comentarios;
	}

	@Override
	public void createComentario(Comentario comentario) {
		Session session = SessionFactoryService.get().openSession();
		comentario.setId(idNext);
		idNext++;
		try {
			session.beginTransaction();
			session.save(comentario);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
	}

	@Override
	public Comentario readComentario(int id) {
		Session session = SessionFactoryService.get().openSession();
		Comentario comentario = null;
		try {
			comentario = session.get(Comentario.class, id);
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return comentario;
	}

	@Override
	public void updateComentario(Comentario comentario) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.saveOrUpdate(comentario);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
		
	}

	@Override
	public void deleteComentario(Comentario comentario) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.delete(comentario);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
		
	}
	
}
