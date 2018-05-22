package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;

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
		String email = req.getParameter("email");
		String nombreCine = req.getParameter("nombreCine");
		//Control
		System.out.println("El cine tiene como email: "+ email);
		String direccion = req.getParameter("direccion");
		String password = req.getParameter("password");
		//Control
		System.out.println("El cine tiene como password: "+ password);
		
		//Creación del cine en la base de datos
		Cine cine = new Cine();
		cine.setEmail(email);
		cine.setPassword(password);
		cine.setNombreCine(nombreCine);
		cine.setDireccion(direccion);
		CineDAOImplementation.getInstance().createCine(cine);
		
		//Control
		System.out.println("El cine quese crea es: "+cine.getNombreCine());
				
		//Respuesta
		resp.setContentType("text/plain");
		PrintWriter pw = resp.getWriter();
		pw.print("200OK");	
		pw.flush();
		pw.close();
				
	}
}
