package es.upm.dit.isst.fancyFilm.dao;

import org.hibernate.Session;

import es.upm.dit.isst.fancyFilm.dao.model.Espectador;

public class EspectadorDAOImplementation implements EspectadorDAO{
	
	public static EspectadorDAOImplementation instance = null;
	
	private EspectadorDAOImplementation(){}
	public static EspectadorDAOImplementation getInstance(){
		if(null == instance) {
			instance = new EspectadorDAOImplementation();
		}
		return instance;
	}
	@Override
	public void createEspectador(Espectador espectador) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.save(espectador);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
	}

	@Override
	public Espectador readEspectador(String email) {
		Session session = SessionFactoryService.get().openSession();
		Espectador espectador = null;
		try {
			espectador = session.get(Espectador.class, email);
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return espectador;
	}

	@Override
	public void updateEspectador(Espectador espectador) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.saveOrUpdate(espectador);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
	}

	@Override
	public void deleteEspectador(Espectador espectador) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.delete(espectador);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
	}

}
