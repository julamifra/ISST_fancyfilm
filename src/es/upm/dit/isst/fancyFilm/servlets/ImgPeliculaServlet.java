package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.fancyFilm.dao.PeliculaDAO;
import es.upm.dit.isst.fancyFilm.dao.PeliculaDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

@MultipartConfig
@WebServlet("/ImgPeliculaServlet")
public class ImgPeliculaServlet  extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		String nombre = req.getParameter("name");
		PeliculaDAO dao = PeliculaDAOImplementation.getInstance();
		Pelicula peli = dao.readPelicula(nombre);
		
		System.out.println("nombre: " + nombre);
		
		resp.setContentType("application/jpeg");
		resp.setContentLength(peli.getCartel().length);
		resp.getOutputStream().write(peli.getCartel());

	}
}
