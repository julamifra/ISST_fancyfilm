package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.fancyFilm.dao.EspectadorDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Espectador;

@WebServlet("/NuevoEspectadorServlet")
public class NuevoEspectadorServlet  extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Servlet para crear espectadores
		String nombreEspectador = req.getParameter("nombreEspectador");
		String email = req.getParameter("email");
		//Control
		System.out.println("El espectador tiene como email: "+ email);
		String usuario = req.getParameter("usuario");
		String password = req.getParameter("password");
		//Control
		System.out.println("El espectador tiene como password: "+ password);
		
		//Creación del espectador en la base de datos
		Espectador espectador = new Espectador();
		espectador.setEmail(email);
		espectador.setPassword(password);
		espectador.setNombreEspectador(nombreEspectador);
		espectador.setUsuario(usuario);
		EspectadorDAOImplementation.getInstance().createEspectador(espectador);
		
		//Control
		System.out.println("El espectador que se crea es: "+ espectador.getNombreEspectador());
				
		///Respuesta
				resp.setContentType("text/plain");
				PrintWriter pw = resp.getWriter();
				pw.print("200OK");	
				pw.flush();
				pw.close();
				
	}
}
