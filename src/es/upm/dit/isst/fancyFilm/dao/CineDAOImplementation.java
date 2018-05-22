package es.upm.dit.isst.fancyFilm.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.fancyFilm.dao.model.Cine;

public class CineDAOImplementation implements CineDAO{
	public static CineDAOImplementation instance = null;
	
	private CineDAOImplementation(){}
	public static CineDAOImplementation getInstance(){
		if(null == instance) {
			instance = new CineDAOImplementation();
		}
		return instance;
	}
	@Override
	public List<Cine> readAllCines() {
		Session session = SessionFactoryService.get().openSession();
		List<Cine> cines = new ArrayList<>();
		try {
			session.beginTransaction();
			cines.addAll(session.createQuery("select c from Cine c").getResultList());
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return cines;
	}
	@Override
	public void createCine(Cine cine) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.save(cine);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
		
	}
	@Override
	public Cine readCine(String email) {
		Session session = SessionFactoryService.get().openSession();
		Cine cine = null;
		try {
			cine = session.get(Cine.class, email);
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return cine;
	}
	@Override
	public void updateCine(Cine cine) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.saveOrUpdate(cine);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
		
	}
	@Override
	public void deleteCine(Cine cine) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.delete(cine);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
	}
}
