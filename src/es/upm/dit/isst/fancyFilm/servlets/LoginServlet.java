package es.upm.dit.isst.fancyFilm.servlets;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import es.upm.dit.isst.fancyFilm.dao.CineDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.EspectadorDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Cine;
import es.upm.dit.isst.fancyFilm.dao.model.Espectador;

@WebServlet("/LoginServlet")
public class LoginServlet  extends HttpServlet{
		@Override
		protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			//Servlet para realizar login
			String tipo = req.getParameter("tipo");
			
			//Control
			System.out.println("El tipo que va a logearse es: " + tipo);
					
			try {
				switch(tipo) {
				case "espectador":
					String emailX = req.getParameter("email");
					String passwordX = req.getParameter("password");
					
					Espectador espectador = EspectadorDAOImplementation.getInstance().readEspectador(emailX);
					String pwdX = espectador.getPassword();
					boolean esCorrectoX = pwdX.equals(passwordX);
					if(!esCorrectoX) {System.out.println("La contraseña no es correcta");}
					else {
						//Control
						System.out.println("Se loguea el espectador con email: "+ emailX);
						//Respuesta
						resp.setContentType("text/plain");
						PrintWriter pw = resp.getWriter();
						pw.print(emailX);	
						pw.flush();
						pw.close();
						break;
					}
						
				case "cine":
					String emailY = req.getParameter("email");
					String passwordY = req.getParameter("password");
					
					Cine cine = CineDAOImplementation.getInstance().readCine(emailY);
					String pwdY = cine.getPassword();
					boolean esCorrectoY = pwdY.equals(passwordY);
					if(!esCorrectoY) {System.out.println("La contraseña no es correcta");}
					else {
						//Control
						System.out.println("Se loguea el cine con email: "+ emailY);
						//Respuesta
						resp.setContentType("text/plain");
						PrintWriter pw = resp.getWriter();
						pw.print(emailY);	
						pw.flush();
						pw.close();
						break;
					}
				default:
					//Error
					System.out.println("Error en el tipo de quién se logea");
					break;
				
				}}catch  (Exception e){
					//Error
					System.out.println("Error, el mail no existe");
				}finally {
					//Error
					System.out.println("Esto siempre sale cuando alguien se logea");
				}
		}
}
