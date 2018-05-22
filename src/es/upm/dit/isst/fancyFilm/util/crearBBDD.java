package es.upm.dit.isst.fancyFilm.util;


import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import javax.persistence.FetchType;
import javax.persistence.OneToMany;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import es.upm.dit.isst.fancyFilm.dao.CineDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.EspectadorDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.PeliculaDAOImplementation;
import es.upm.dit.isst.fancyFilm.dao.model.Cine;
import es.upm.dit.isst.fancyFilm.dao.model.Comentario;
import es.upm.dit.isst.fancyFilm.dao.model.Espectador;
import es.upm.dit.isst.fancyFilm.dao.model.Pelicula;
import es.upm.dit.isst.fancyFilm.dao.model.Promocion;

public class crearBBDD {
	
	private static void transformaImagenEnBytes(String img, Pelicula pelicula) throws FileNotFoundException {
		String direccion = "/home/isst/eclipse-workspace/ISST/WebContent/";
		//System.out.println("Direccion: " + direccion);
		String direccCompleta = direccion + img;
		
		
		 File file = new File(direccCompleta);
		// System.out.println("Ruta absoluta: " + file.getAbsolutePath());
		
		  FileInputStream fis = new FileInputStream(file);
          ByteArrayOutputStream bos = new ByteArrayOutputStream();
          byte[] buf = new byte[1024];
          try {
              for (int readNum; (readNum = fis.read(buf)) != -1;) {
                  bos.write(buf, 0, readNum);
                  //System.out.println("read " + readNum + " bytes,");
              }
          } catch (IOException ex) {System.out.println("ERROR");}
          
      
  		pelicula.setCartel(bos.toByteArray());
    
	}

	public static void main(String[] args) throws FileNotFoundException {
		
		//Crear películas en la BBDD
		Pelicula peli1 = new Pelicula();
		peli1.setNombre("Avatar");
		peli1.setGenero("Ciencia Ficción");;
		peli1.setAño("2009");
		peli1.setPais("Estados Unidos");
		peli1.setDirectorNombre("James Cameron");
		peli1.setIdioma("Inglés");
		peli1.setTrailerURL("https://www.youtube.com/embed/kbA9TfGphOI");
		peli1.setSinopsis("Año 2154. Jake Sully (Sam Worthington), un ex-marine condenado a vivir en una silla de ruedas, sigue siendo, a pesar de ello, un auténtico guerrero. Precisamente por ello ha sido designado para ir a Pandora, donde algunas empresas están extrayendo un mineral extraño que podría resolver la crisis energética de la Tierra. Para contrarrestar la toxicidad de la atmósfera de Pandora, se ha creado el programa Avatar, gracias al cual los seres humanos mantienen sus conciencias unidas a un avatar: un cuerpo biológico controlado de forma remota que puede sobrevivir en el aire letal. Esos cuerpos han sido creados con ADN humano, mezclado con ADN de los nativos de Pandora, los Na'vi. Convertido en avatar, Jake puede caminar otra vez. Su misión consiste en infiltrarse entre los Na'vi, que se han convertido en el mayor obstáculo para la extracción del mineral. Pero cuando Neytiri, una bella Na'vi (Zoe Saldana), salva la vida de Jake, todo cambia: Jake, tras superar ciertas pruebas, es admitido en su clan. Mientras tanto, los hombres esperan los resultados de la misión de Jake.");
		transformaImagenEnBytes("avatar.jpg",peli1);
		PeliculaDAOImplementation.getInstance().createPelicula(peli1);
		
		Pelicula peli2 = new Pelicula();
		peli2.setNombre("Titanic");
		peli2.setGenero("Romance");
		peli2.setAño("1997");
		peli2.setPais("Estados Unidos");
		peli2.setDirectorNombre("James Cameron");
		peli2.setIdioma("Inglés");
		peli2.setTrailerURL("https://www.youtube.com/embeded/zCy5WQ9S4c0");
		peli2.setSinopsis("Jack (DiCaprio), un joven artista, gana en una partida de cartas un pasaje para viajar a América en el Titanic, el transatlántico más grande y seguro jamás construido. A bordo conoce a Rose (Kate Winslet), una joven de una buena familia venida a menos que va a contraer un matrimonio de conveniencia con Cal (Billy Zane), un millonario engreído a quien sólo interesa el prestigioso apellido de su prometida. Jack y Rose se enamoran, pero el prometido y la madre de ella ponen todo tipo de trabas a su relación. Mientras, el gigantesco y lujoso transatlántico se aproxima hacia un inmenso iceberg");
		transformaImagenEnBytes("titanic.jpg",peli2);
		PeliculaDAOImplementation.getInstance().createPelicula(peli2);
		

		Pelicula peli3 = new Pelicula();
		peli3.setNombre("Campeones");
		peli3.setGenero("Comedia");
		peli3.setAño("2018");
		peli3.setPais("España");
		peli3.setDirectorNombre("Javier Fresser");
		peli3.setIdioma("Español");
		peli3.setTrailerURL("https://www.youtube.com/embed/C0p5-b3YwIM");
		peli3.setSinopsis("Marco, un entrenador profesional de baloncesto, se encuentra un día, en medio de una crisis personal, entrenando a un equipo compuesto por personas con discapacidad intelectual. Lo que comienza como un problema se acaba convirtiendo en una lección de vida.");
		transformaImagenEnBytes("campeones.jpg",peli3);
		PeliculaDAOImplementation.getInstance().createPelicula(peli3);
	
		
		Pelicula peli4 = new Pelicula();
		peli4.setNombre("E.T.");
		peli4.setGenero("Ciencia Ficción");
		peli4.setAño("1982");
		peli4.setPais("Estados Unidos");
		peli4.setDirectorNombre("Steven Spielberg");
		peli4.setIdioma("ingles");
		peli4.setTrailerURL("https://www.youtube.com/embed/jzC0c-GWeDQ");
		peli4.setSinopsis("Un pequeño ser de otro planeta se queda abandonado en la Tierra cuando su nave, al emprender el regreso, se olvida de él. Está completamente solo y tiene miedo, pero se hará amigo de un niño, que lo esconde en su casa. El pequeño y sus hermanos intentan encontrar la forma de que el pequeño extraterrestre regrese a su planeta antes de que lo encuentren los científicos y la policía. ");
		transformaImagenEnBytes("ET.jpg",peli4);
		PeliculaDAOImplementation.getInstance().createPelicula(peli4);
		
		Pelicula peli5 = new Pelicula();
		peli5.setNombre("El Rey León");
		peli5.setGenero("Animación");;
		peli5.setAño("1994");
		peli5.setPais("Estados Unidos");
		peli5.setDirectorNombre(" Rob Minkoff y Roger Allers");
		peli5.setIdioma("Inglés");
		peli5.setTrailerURL("https://www.youtube.com/embed/9VocQeiYV9s");
		peli5.setSinopsis("La sabana africana es el escenario en el que tienen lugar las aventuras de Simba, un pequeño león que es el heredero del trono. Sin embargo, al ser injustamente acusado por el malvado Scar de la muerte de su padre, se ve obligado a exiliarse. Durante su destierro, hará buenas amistades e intentará regresar para recuperar lo que legítimamente le corresponde.");
		transformaImagenEnBytes("elReyLeon.jpg",peli5);
		PeliculaDAOImplementation.getInstance().createPelicula(peli5);
		
		Pelicula peli6 = new Pelicula();
		peli6.setNombre("Shutter Island");
		peli6.setGenero("Thriller");;
		peli6.setAño("2010");
		peli6.setPais("Estados Unidos");
		peli6.setDirectorNombre("Martin Scorsese");
		peli6.setIdioma("Inglés");
		peli6.setTrailerURL("https://www.youtube.com/embed/sybSFbmzyUg");
		peli6.setSinopsis("En el verano de 1954, los agentes judiciales Teddy Daniels (DiCaprio) y Chuck Aule (Ruffalo) son destinados a una remota isla del puerto de Boston para investigar la desaparición de una peligrosa asesina (Mortimer) que estaba recluida en el hospital psiquiátrico Ashecliffe, un centro penitenciario para criminales perturbados dirigido por el siniestro doctor John Cawley (Kingsley). Pronto descubrirán que el centro guarda muchos secretos y que la isla esconde algo más peligroso que los pacientes. Thriller psicológico basado en la novela homónima de Dennis Lehane (autor de Mystic River y Gone Baby Gone");
		transformaImagenEnBytes("shutterIsland.jpg",peli6);
		PeliculaDAOImplementation.getInstance().createPelicula(peli6);
	
		Pelicula peli7 = new Pelicula();
		peli7.setNombre("Origen");
		peli7.setGenero("Ciencia Ficción");;
		peli7.setAño("2010");
		peli7.setPais("Estados Unidos");
		peli7.setDirectorNombre("Christopher Nolan");
		peli7.setIdioma("Inglés");
		peli7.setTrailerURL("https://www.youtube.com/embeded/RV9L7ui9Cn8");
		peli7.setSinopsis("Dom Cobb (DiCaprio) es un experto en el arte de apropiarse, durante el sueño, de los secretos del subconsciente ajeno. La extraña habilidad de Cobb le ha convertido en un hombre muy cotizado en el mundo del espionaje, pero también lo ha condenado a ser un fugitivo y, por consiguiente, a renunciar a llevar una vida normal. Su única oportunidad para cambiar de vida será hacer exactamente lo contrario de lo que ha hecho siempre: la incepción, que consiste en implantar una idea en el subconsciente en lugar de sustraerla. Sin embargo, su plan se complica debido a la intervención de alguien que parece predecir cada uno de sus movimientos, alguien a quien sólo Cobb podrá descubrir.");
		transformaImagenEnBytes("origen.jpg",peli7);
		PeliculaDAOImplementation.getInstance().createPelicula(peli7);
	
		Pelicula peli8 = new Pelicula();
		peli8.setNombre("Ready Player One");
		peli8.setGenero("Ciencia Ficción");;
		peli8.setAño("2018");
		peli8.setPais("Estados Unidos");
		peli8.setDirectorNombre("Steven Spielberg");
		peli8.setIdioma("Inglés");
		peli8.setTrailerURL("https://www.youtube.com/embeded/eFihS8fvngA");
		peli8.setSinopsis("Año 2045. Wade Watts es un adolescente al que le gusta evadirse del cada vez más sombrío mundo real a través de una popular utopía virtual a escala global llamada 'Oasis'. Un día, su excéntrico y multimillonario creador muere, pero antes ofrece su fortuna y el destino de su empresa al ganador de una elaborada búsqueda del tesoro a través de los rincones más inhóspitos de su creación. Será el punto de partida para que Wade se enfrente a jugadores, poderosos enemigos corporativos y otros competidores despiadados, dispuestos a hacer lo que sea, tanto dentro de 'Oasis' como del mundo real, para hacerse con el premio");
		transformaImagenEnBytes("readyPlayerOne.jpg",peli8);
		PeliculaDAOImplementation.getInstance().createPelicula(peli8);
		
		Pelicula peli9 = new Pelicula();
		peli9.setNombre("El Secreto de Marrowbone");
		peli9.setGenero("Terror");;
		peli9.setAño("2017");
		peli9.setPais("España");
		peli9.setDirectorNombre("Sergio G. Sánchez");
		peli9.setIdioma("Español");
		peli9.setTrailerURL("https://www.youtube.com/embeded/J1XTICKRcE8");
		peli9.setSinopsis("Cuatro hermanos, temiendo que les separen tras la muerte de su madre, se esconden del mundo en su abandonada granja, un lugar cuyas viejas paredes esconden un terrible secreto.");
		transformaImagenEnBytes("elSecretoDeMarrowbone.jpg",peli9);
		PeliculaDAOImplementation.getInstance().createPelicula(peli9);
	
		Pelicula peli10 = new Pelicula();
		peli10.setNombre("Master And Commander");
		peli10.setGenero("Aventuras");;
		peli10.setAño("2003");
		peli10.setPais("Estados Unidos");
		peli10.setDirectorNombre("Peter Weir");
		peli10.setIdioma("Inglés");
		peli10.setTrailerURL("https://www.youtube.com/embeded/CAHnATci56k&t=23s");
		peli10.setSinopsis("Guerras napoleónicas, año 1805. Bonaparte domina Europa. Inglaterra consigue resistir porque es la primera potencia naval del mundo. Precisamente por eso los mares se convierten en un crucial y estratégico campo de batalla. En el Atlántico, el Surprise, un navío inglés capitaneado por Jack Aubrey (Crowe), es atacado por sorpresa por un buque de guerra francés. A pesar de los graves daños sufridos por la nave, Aubrey decide navegar a través de dos mares para interceptar y capturar al enemigo. Se trata de una misión que puede determinar el destino de toda una nación. ");
		transformaImagenEnBytes("masterAndCommander.jpg",peli10);
		PeliculaDAOImplementation.getInstance().createPelicula(peli10);
	
		
		//Crear cines en la BBDD
		Cine cine1 = new Cine();
		cine1.setEmail("principepiocine@gmail.com");
		cine1.setPassword("supercine");
		cine1.setNombreCine("Príncipe Pío");
		cine1.setDireccion("Centro Comercial Príncipe Pío");
		CineDAOImplementation.getInstance().createCine(cine1);
		
		Cine cine2 = new Cine();
		cine2.setEmail("renoircinesprincesacine@gmail.com");
		cine2.setPassword("supercine");
		cine2.setNombreCine("Renoir Cines Princesa");
		cine2.setDireccion("Plaza de los Cubos, Calle de la Princesa");
		CineDAOImplementation.getInstance().createCine(cine2);
		
		Cine cine3 = new Cine();
		cine3.setEmail("proyecciones3dcine@gmail.com");
		cine3.setPassword("supercine");
		cine3.setNombreCine("Proyecciones 3D");
		cine3.setDireccion("Calle Alcalá, 102");
		CineDAOImplementation.getInstance().createCine(cine3);
		
		
		//Crear espectador en la BBDD
		Espectador espectador1 = new Espectador();
		espectador1.setEmail("espectador@fancyfilm.com");
		espectador1.setPassword("espec");
		espectador1.setNombreEspectador("Espectador 1");
		espectador1.setUsuario("Espec1");
		EspectadorDAOImplementation.getInstance().createEspectador(espectador1);
		
	}

}