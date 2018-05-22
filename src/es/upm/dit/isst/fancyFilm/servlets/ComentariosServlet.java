package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import es.upm.dit.isst.fancyFilm.dao.ComentarioDAO;
import es.upm.dit.isst.fancyFilm.dao.ComentarioDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Comentario;

@WebServlet("/ComentariosServlet")
public class ComentariosServlet extends HttpServlet{
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		//Servlet para la lista de comentarios
		String nombre = req.getParameter("name");
		System.out.println("nombre lista comentarios: " + nombre);
		String tipo = req.getParameter("tipo");
		
		try {
				switch(tipo) {
				case "pelicula":
					
					ComentarioDAO comentDao = ComentarioDAOImplementation.getInstance();
					List<Comentario> listaComentarios = comentDao.readAllComentarios();
					List<Comentario> listaComentariosPeliculasSelec = new ArrayList<Comentario>();
					
					for(Comentario c: listaComentarios) {
						//System.out.println( "nombres coinciden: " + c.getPelicula().getNombre());
						//System.out.println( "nombres : " + nombre);
						if(!(c.getPelicula()==null)) {
						if(c.getPelicula().getNombre().equals(nombre)) {
							listaComentariosPeliculasSelec.add(c);
							System.out.println("peliSlect: " + c);
						}
						}
					}
					
					for(Comentario h: listaComentariosPeliculasSelec) {
						h.setCine(null);
						h.setEspectadorNombre(h.getEspectador().getNombreEspectador().toString());
						h.setEspectador(null);
						h.setPelicula(null);
					}				
					
					///Generación del JSON para responder con los comentarios de la peli
					Gson gson = new Gson();
					String json = gson.toJson(listaComentariosPeliculasSelec);
					//PeliculasSelec
					System.out.println("JSON de comentarios: " + json);
					
					//Respuesta
					resp.setContentType("application/json");
					PrintWriter pw = resp.getWriter();
					pw.print(json);	
					pw.flush();
					pw.close();
					break;
				case "cine":
				
					ComentarioDAO comentDaoC = ComentarioDAOImplementation.getInstance();
					List<Comentario> listaComentariosC = comentDaoC.readAllComentarios();
					List<Comentario> listaComentariosCinesSelec = new ArrayList<Comentario>();

					for(Comentario c: listaComentariosC) {
						//System.out.println( "nombres coinciden: " + c.getCine().getNombreCine());
						//System.out.println( "nombres : " + nombre);
						if(!(c.getCine()==null)) {
							if(c.getCine().getEmail().equals(nombre)) {
								listaComentariosCinesSelec.add(c);
								System.out.println("cineSlect: " + c);
							}
						}
					}
					
					for(Comentario h: listaComentariosCinesSelec) {
						h.setCine(null);
						h.setEspectadorNombre(h.getEspectador().getNombreEspectador().toString());
						h.setEspectador(null);
						h.setPelicula(null);
					}

					///Generación del JSON para responder con los comentarios de los cines
					Gson gson1 = new Gson();
					String json1 = gson1.toJson(listaComentariosCinesSelec);
					//PeliculasSelec
					System.out.println("JSON de comentarios: " + json1);
					
					//Respuesta
					resp.setContentType("application/json");
					PrintWriter pw1 = resp.getWriter();
					pw1.print(json1);	
					pw1.flush();
					pw1.close();
					break;
				default:
					//Error
					System.out.println("Error en el tipo de lista de comentario");
					break;
				}
		}catch  (Exception e){
				//Error
				System.out.println("El error en la lista de comentarios es: " + e);
		}finally {
				//Error
				System.out.println("Esto siempre sale al pedir la lista de comentarios");
		}

   }

}