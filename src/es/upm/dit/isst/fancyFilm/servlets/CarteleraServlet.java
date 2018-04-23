package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.*;
import javax.servlet.http.*;

import com.google.gson.Gson;

import es.upm.dit.isst.fancyFilm.dao.PeliculaDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.PeliculaDAO;
import es.upm.dit.isst.fancyFilm.dao.model.*;
import es.upm.dit.isst.fancyFilm.util.crearBBDD;

@WebServlet("/CarteleraServlet")
public class CarteleraServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Creación de la base de datos, con nuestras peliculas
		crearBBDD.main();
		
		//Servlet para la lista de peliculas
		PeliculaDAO peli = PeliculaDAOImplementation.getInstance();
		List<Pelicula> pelis = peli.readAllPeliculas();
		
		//Generación del JSON para responder
		Gson gson = new Gson();
		String json = gson.toJson(pelis);
		
		//Control
		System.out.println("JSON en la respuesta (cartelera): " + json);
		
		//Respuesta
		resp.setContentType("application/json");
		PrintWriter pw = resp.getWriter();
		pw.print(json);	
		pw.flush();
		pw.close();
	}
}
