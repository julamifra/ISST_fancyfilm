package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.fancyFilm.dao.CineDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.PromocionDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Cine;
import es.upm.dit.isst.fancyFilm.dao.model.Promocion;

@WebServlet("/PromocionesServlet")
public class PromocionesServlet   extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Servlet para guardar promociones
		String titulo = req.getParameter("titulo");
		String descripcion = req.getParameter("descripcion");
		String nombreCine = req.getParameter("cine");
		Cine cine = CineDAOImplementation.getInstance().readCine(nombreCine);
		
		//Control
		System.out.println("El cine que pone su promo es :"+cine);
		
		//Creación de la promoción en la BBDD
		Promocion promocion = new Promocion();
		promocion.setTitulo(titulo);
		promocion.setDescripcion(descripcion);
		promocion.setCine(cine);
		PromocionDAOImplementation.getInstance().createPromocion(promocion);
		
		//Respuesta
		resp.sendRedirect("localhost:3000");
	}
}
