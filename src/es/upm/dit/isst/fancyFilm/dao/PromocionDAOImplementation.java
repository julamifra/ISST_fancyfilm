package es.upm.dit.isst.fancyFilm.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.fancyFilm.dao.model.Cine;
import es.upm.dit.isst.fancyFilm.dao.model.Promocion;

public class PromocionDAOImplementation implements PromocionDAO{
	public static PromocionDAOImplementation instance = null;
	
	private PromocionDAOImplementation(){}
	public static PromocionDAOImplementation getInstance(){
		if(null == instance) {
			instance = new PromocionDAOImplementation();
		}
		return instance;
	}
	@Override
	public List<Promocion> readAllPromociones() {
		Session session = SessionFactoryService.get().openSession();
		List<Promocion> promociones = new ArrayList<>();
		try {
			session.beginTransaction();
			promociones.addAll(session.createQuery("select pro from Promocion pro").getResultList());
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return promociones;
	}

	@Override
	public void createPromocion(Promocion promo) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.save(promo);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
	}

	@Override
	public Promocion readPromocion(int id) {
		Session session = SessionFactoryService.get().openSession();
		Promocion promocion = null;
		try {
			promocion = session.get(Promocion.class, id);
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}return promocion;
	}

	@Override
	public void updatePromocion(Promocion promo) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.saveOrUpdate(promo);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
		
	}

	@Override
	public void deletePromocion(Promocion promo) {
		Session session = SessionFactoryService.get().openSession();
		try {
			session.beginTransaction();
			session.delete(promo);
			session.getTransaction().commit();
			
		}catch (Exception e){
			
		}finally {
			session.close();
		}
	}

}
