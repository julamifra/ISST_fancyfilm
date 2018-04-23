package es.upm.dit.isst.fancyFilm.dao;

import java.util.List;

import es.upm.dit.isst.fancyFilm.dao.model.Cine;
import es.upm.dit.isst.fancyFilm.dao.model.Promocion;

public interface PromocionDAO {
	public List<Promocion> readAllPromociones();
	public void createPromocion(Promocion promo);
	public Promocion readPromocion(int id);
	public void updatePromocion(Promocion promo);
	public void deletePromocion(Promocion promo);
}
