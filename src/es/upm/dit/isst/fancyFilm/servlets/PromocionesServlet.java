package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import es.upm.dit.isst.fancyFilm.dao.PromocionDAO;
import es.upm.dit.isst.fancyFilm.dao.PromocionDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Promocion;

@WebServlet("/PromocionesServlet")
public class PromocionesServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		//Servlet para la lista de promociones
		String emailCine = req.getParameter("emailCine");
		
		try {
					PromocionDAO promoDao = PromocionDAOImplementation.getInstance();
					List<Promocion> listaPromociones = promoDao.readAllPromociones();
					List<Promocion> listaPromocionesCinesSelec = new ArrayList<Promocion>();
					
					for(Promocion p: listaPromociones) {
						if(!(p.getCine()==null)) {
						if(p.getCine().getEmail().equals(emailCine)) {
							listaPromocionesCinesSelec.add(p);
						}
						}
					}
					
					for(Promocion h: listaPromocionesCinesSelec) {
						h.setCine(null);
					}				
					
					///Generación del JSON para responder con los comentarios de la peli
					Gson gson = new Gson();
					String json = gson.toJson(listaPromocionesCinesSelec);
					//PeliculasSelec
					System.out.println("JSON de promociones: " + json);
					
					//Respuesta
					resp.setContentType("application/json");
					PrintWriter pw = resp.getWriter();
					pw.print(json);	
					pw.flush();
					pw.close();
		}catch  (Exception e){
			//Error
			System.out.println("El error en la lista de promociones es: " + e);
		}finally {
			//Error
			System.out.println("Esto siempre sale al pedir la lista de promociones");
		}
	}
}
