package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.fancyFilm.dao.CineDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.PromocionDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Cine;
import es.upm.dit.isst.fancyFilm.dao.model.Promocion;

@WebServlet("/NuevaPromoServlet")
public class NuevaPromoServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Servlet para guardar promociones
		String titulo = req.getParameter("titulo");
		String descripcion = req.getParameter("descripcion");
		String email = req.getParameter("cine");
		
		try {
			Cine cine = CineDAOImplementation.getInstance().readCine(email);
			
			//Control
			//System.out.println("El cine que pone su promo es: "+cine.getNombreCine());
			
			//Creación de la promoción en la BBDD
			Promocion promocion = new Promocion();
			promocion.setTitulo(titulo);
			promocion.setDescripcion(descripcion);
			promocion.setCine(cine);
			PromocionDAOImplementation.getInstance().createPromocion(promocion);
		}catch (Exception e){
			System.out.println("Ha habido un error. Seguramente no está registrado el cineLogeado.");
		}finally {
			System.out.println("Esto saldrá siempre al crear una promoción");
		}
		
				//Respuesta
				resp.setContentType("text/plain");
				PrintWriter pw = resp.getWriter();
				pw.print("200OK");	
				pw.flush();
				pw.close();
	}
}
