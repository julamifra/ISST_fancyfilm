package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.fancyFilm.dao.CineDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.ComentarioDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.EspectadorDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.PeliculaDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Cine;
import es.upm.dit.isst.fancyFilm.dao.model.Comentario;
import es.upm.dit.isst.fancyFilm.dao.model.Espectador;
import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;

@WebServlet("/NuevoComentarioServlet")
public class NuevoComentarioServlet  extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//Servlet para guardar comentarios
		String cuerpo = req.getParameter("cuerpo");
		int valoracion = Integer.parseInt(req.getParameter("valoracion"));
		String tipo = req.getParameter("tipo");
		
		//Control
		//System.out.println("El tipo que llega es de: "+ tipo);
		try {
		switch(tipo) {
		case "pelicula":
			String nombrePeli = req.getParameter("nombre");
			Pelicula pelicula = PeliculaDAOImplementation.getInstance().readPelicula(nombrePeli);
			String quienX = req.getParameter("email");
			//System.out.println("quien comenta: "+quienX);
			Espectador espectadorX = EspectadorDAOImplementation.getInstance().readEspectador(quienX);
			//Control
			//System.out.println("La pelicula que se comenta es: "+ pelicula.getNombre());
			
			//Crear comentario en la base de datos
			Comentario comentarioPeli = new Comentario();
			comentarioPeli.setCuerpo(cuerpo);
			comentarioPeli.setValoracion(valoracion);
			comentarioPeli.setPelicula(pelicula);
			comentarioPeli.setEspectador(espectadorX);
			ComentarioDAOImplementation.getInstance().createComentario(comentarioPeli);
			break;
		case "cine":
			String emailCine = req.getParameter("nombre");
			Cine cine = CineDAOImplementation.getInstance().readCine(emailCine);
			String quienY = req.getParameter("email");
			//System.out.println("quien comenta: "+quienY);
			Espectador espectadorY = EspectadorDAOImplementation.getInstance().readEspectador(quienY);
			
			//Control
			//System.out.println("El cine que se comenta es: "+ cine.getNombreCine());
			
			//Crear comentario en la base de datos
			Comentario comentarioCine = new Comentario();
			comentarioCine.setCuerpo(cuerpo);
			comentarioCine.setValoracion(valoracion);
			comentarioCine.setCine(cine);
			comentarioCine.setEspectador(espectadorY);
			ComentarioDAOImplementation.getInstance().createComentario(comentarioCine);
			break;
		default:
			//Error
			System.out.println("Error en el tipo de comentario");
			break;
		
		}}catch  (Exception e){
			//Error
			System.out.println("Error en el quien del comentario");
		}finally {
			//Error
			System.out.println("Esto siempre sale al comentar algo");
		}
		//Respuesta
		resp.setContentType("text/plain");
		PrintWriter pw = resp.getWriter();
		pw.print("200OK");	
		pw.flush();
		pw.close();
	}
}