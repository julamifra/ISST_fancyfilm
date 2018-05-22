package es.upm.dit.isst.fancyFilm.dao;

import java.util.List;

import es.upm.dit.isst.fancyFilm.dao.model.Cine;

public interface CineDAO {
	public List<Cine> readAllCines();
	public void createCine(Cine cine);
	public Cine readCine(String email);
	public void updateCine(Cine cine);
	public void deleteCine(Cine cine);
}
