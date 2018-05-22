package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import es.upm.dit.isst.fancyFilm.dao.CineDAO;
import es.upm.dit.isst.fancyFilm.dao.CineDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Cine;
import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

@WebServlet("/CinesServlet")
public class CinesServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Servlet para lista de cines
		CineDAO cine = CineDAOImplementation.getInstance();
		List<Cine> cines = cine.readAllCines();
		
		//Generación del JSON para responder
		Gson gson = new Gson();
		for(Cine c: cines)c.setMisComentarios(null);
		for(Cine c: cines)c.setMisPromos(null);
		String json = gson.toJson(cines);
		
		//Control
		//System.out.println("JSON en la respuesta (cines): " + json);
		
		//Respuesta
		resp.setContentType("application/json");
		PrintWriter pw = resp.getWriter();
		pw.print(json);	
		pw.flush();
		pw.close();
	}
}
