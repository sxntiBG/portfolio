import './App.css';
import Habilidades from './assets/components/habilidades/habilidades.jsx';
import Experiencia from './assets/components/experiencia/experiencia.jsx';
import Proyectos from './assets/components/proyectos/proyectos.jsx';
import Estudios from './assets/components/estudios/estudios.jsx';

function App() {

  return (
    <>
    <div className="contenedor">
      <main>
      <section className="encabezado">
        <article className="informacion-encabezado">
          <h1>Santiago Zapata Ospina</h1>
          <p>Analista y Desarrollador de Software</p>
        </article>
        <article className="img-encabezado">
          <img src="src/assets/img/pfp.jpg" alt="Foto de perfil" />
        </article>
      </section>
      <hr />
      <section className="sobre-mi">
        <h2>Sobre mí</h2>
        <p>Soy una persona apasionada por la tecnología, especialmente la programación. Actualmente, me desempeño como desarrollador front-end, pero estoy abierto a aprender y explorar nuevas áreas, como el desarrollo back-end, para ampliar mis conocimientos y habilidades en el mundo del software.</p>
      </section>
      <section className="habilidades">
        <h2>Tecnologías</h2>
        <Habilidades urlImagen="" nombre="HTML" />
      </section>
      <section className="experiencia">
        <h2>Experiencia</h2>
        <Experiencia imgEmpresa="" nombreEmpresa="Empresa 1" cargo="Desarrollador Front-End" anioComienzo="2020" anioFinal="2021" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec odio eget velit ultricies vehicula." />
      </section>
      <section className="proyectos">
        <h2>Proyectos</h2>
        <Proyectos imgProyecto="" nombreProyecto="Proyecto 1" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec odio eget velit ultricies vehicula." habilidades={["HTML", "CSS", "JavaScript"]} urlRepositorio="" />
      </section>
      <section className="educacion">
        <h2>Estudios</h2>
        <Estudios carrera="Ingeniería de Sistemas" nombre="Universidad de Antioquia" anioInicio="2015" anioFinal="2020" />
      </section>
      <section className="cursos">
        <h2>Cursos y certificaciones</h2>
        <Estudios carrera="Curso de Desarrollo Web" nombre="Platzi" anioInicio="2021" anioFinal="2021" />
      </section>
      <section className="contacto">
        <h2>Contacto</h2>
        <article className="redes">
          <a href=""><img src="" alt="LinkedIn" /></a>
          <a href=""><img src="" alt="GitHub" /></a>
        </article>
        <p>zapataospinasantiago8@gmail.com</p>
      </section>
      <hr />
      </main>
      <footer>
        <span>© 2025 Santiago Zapata Ospina. Todos los derechos reservados.</span>
      </footer>
    </div>
    </>
  )
}

export default App
