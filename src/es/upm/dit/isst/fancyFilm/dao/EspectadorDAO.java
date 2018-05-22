package es.upm.dit.isst.fancyFilm.dao;

import es.upm.dit.isst.fancyFilm.dao.model.Espectador;

public interface EspectadorDAO {
	public void createEspectador(Espectador espectador);
	public Espectador readEspectador(String email);
	public void updateEspectador(Espectador espectador);
	public void deleteEspectador(Espectador espectador);
}
