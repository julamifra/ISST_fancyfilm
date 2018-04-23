package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.fancyFilm.dao.CineDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Cine;

@WebServlet("/NuevoCineServlet")
public class NuevoCineServlet  extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Servlet para crear cines
		String nombreCine = req.getParameter("nombreCine");
		String direccion = req.getParameter("direccion");
		
		//Creación del cine en la base de datos
		Cine cine = new Cine();
		cine.setNombreCine(nombreCine);
		cine.setDireccion(direccion);
		CineDAOImplementation.getInstance().createCine(cine);
		
		//Control
		System.out.println("El cine quese crea es :"+cine);
				
		//Respuesta
		resp.sendRedirect("localhost:3000");
				
	}
}
