package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.fancyFilm.dao.ComentarioDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.PeliculaDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Comentario;
import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

@WebServlet("/ComentariosServlet")
public class ComentariosServlet  extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Servlet para guardar comentarios
		String cuerpo = req.getParameter("cuerpo");
		int valoracion = Integer.parseInt(req.getParameter("valoracion"));
		String nombrePeli = req.getParameter("nombrePeli");
		Pelicula pelicula = PeliculaDAOImplementation.getInstance().readPelicula(nombrePeli);
		
		//Control
		System.out.println("La pelicula que se comenta es: "+ pelicula);
		
		//Crear comentario en la base de datos
		Comentario comentario = new Comentario();
		comentario.setCuerpo(cuerpo);
		comentario.setValoracion(valoracion);
		comentario.setPelicula(pelicula);
		ComentarioDAOImplementation.getInstance().createComentario(comentario);
		
		//Respuesta
		resp.sendRedirect("localhost:3000");
	}
}
