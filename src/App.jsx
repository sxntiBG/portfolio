import "./App.css";
import { useState, useEffect } from "react";

// Imágenes
import pfp from "./assets/img/pfp.jpg";
import html from "./assets/img/tecnologias/HTML.svg";
import css from "./assets/img/tecnologias/CSS.svg";
import js from "./assets/img/tecnologias/JS.svg";
import react from "./assets/img/tecnologias/REACT.svg";
import python from "./assets/img/tecnologias/PYTHON.svg";
import git from "./assets/img/tecnologias/GIT.svg";
import github from "./assets/img/tecnologias/GITHUB.svg";
import vscode from "./assets/img/tecnologias/VSCODE.svg";
import domina from "./assets/img/empresas/domina_entrega_total_sas_logo.jpg";
import beautySales from "./assets/img/empresas/BeautySales.png";
import minimercado from "./assets/img/proyectos/minimercado.png";

// Componentes
import Habilidades from "./components/habilidades.jsx";
import Experiencia from "./components/experiencia.jsx";
import Proyectos from "./components/proyectos.jsx";
import Estudios from "./components/estudios.jsx";
import ToggleContent from "./components/visibilidad.jsx";
import BotonCV from "./components/botonCV.jsx";

// Iconos
import { SlSocialLinkedin } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { LuDownload } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

function App() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("zapataospinasantiago8@gmail.com");
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000);
  };

  const handleScroll = () => {
    setShowScrollTop(window.pageYOffset > 300);
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <div className="contenedor  sm:w-[80%] sm:my-20 mx-auto rounded-2xl shadow-[0px_4px_10px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-[0px_6px_15px_rgba(0,0,0,0.3)]">
        <main className="p-4 sm:p-12">
          <section className="encabezado flex flex-col-reverse md:flex-row md:justify-between sm:flex-col-reverse sm:items-center sm:justify-center">
            <article className="informacion-encabezado w-full flex flex-col justify-start items-center lg:items-start sm:items-left sm:w-[90%] lg:px-4">
              <h1 className="font-bold w-full text-[20px] sm:text-4xl flex justify-center lg:justify-start">
                Santiago Zapata Ospina
              </h1>
              <p className="mt-5 text-lg">🧑🏻‍💻 Desarrollador Front-End</p>
              <div className=" flex gap-4 mt-5 items-center">
                <BotonCV />
                <a
                  href="https://github.com/sxntiBG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-[#a987c9] "
                >
                  <FiGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/santiago-zapata-ospina/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#a987c9]"
                >
                  <SlSocialLinkedin className="w-5 h-5" />
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="hover:text-[#a987c9] focus:outline-none flex justify-start items-start mt-2"
              >
                {isEmailCopied ? (
                  <span className="flex items-center">
                    <FaCheck className="w-5 h-5 mr" />
                    Copiado
                  </span>
                ) : (
                  <span className="flex items-center gap-2 text-[13px] sm:text-base">
                    <HiOutlineMail />
                    zapataospinasantiago8@gmail.com
                  </span>
                )}
              </button>
            </article>
            <article className="img-encabezado mb-5 lg:mb-0 sm:mb-10 flex justify-center lg:px-4">
              <img
                src={pfp}
                alt="Foto de perfil"
                className="rounded-full w-80"
              />
            </article>
          </section>
          <hr className="my-10" />
          <section className="sobre-mi w-full flex flex-col justify-center items-center mt-20 ">
            <h2 className="text-3xl font-bold mx-auto">Sobre mí</h2>
            <p className="flex flex-col justify-center items-center mt-10 bg-white p-6 rounded-xl w-full sm:w-[95%] shadow-md transition-shadow duration-300 hover:shadow-lg">
              Soy una persona apasionada por la tecnología, especialmente la
              programación. Actualmente, me desempeño como desarrollador
              front-end, pero estoy abierto a aprender y explorar nuevas áreas,
              como el desarrollo back-end, para ampliar mis conocimientos y
              habilidades en el mundo del software.
            </p>
          </section>
          <section className="w-full flex flex-col justify-center mt-20 ">
            <h2 className="text-3xl font-bold mx-auto">Tecnologías</h2>
            <div className="skills flex flex-wrap justify-evenly gap-4 w-full">
              <Habilidades urlImagen={html} nombre="HTML" />
              <Habilidades urlImagen={css} nombre="CSS" />
              <Habilidades urlImagen={js} nombre="JavaScript" />
              <Habilidades urlImagen={react} nombre="React" />
              <Habilidades urlImagen={python} nombre="Python" />
              <Habilidades urlImagen={git} nombre="Git" />
              <Habilidades urlImagen={github} nombre="GitHub" />
              <Habilidades urlImagen={vscode} nombre="GitHub" />
            </div>
          </section>
          <section className="w-full flex flex-col justify-center mt-20">
            <h2 className="text-3xl font-bold mx-auto">Experiencia</h2>
            <div className="flex flex-col justify-center items-center gap-4 w-full">
              <Experiencia
                imgEmpresa={domina}
                nombreEmpresa="Domina Entrega Total S.A.S"
                cargo="Aprendiz en practicas"
                anioComienzo="2024"
                anioFinal="2025"
                mesComienzo="Julio"
                mesFinal="Enero"
                habilidades={["JavaScript", "Python", "Cypress", "NodeJS"]}
                descripcion={
                  <>
                    <p className="mb-4">
                      Durante mis prácticas, participé activamente en el ciclo
                      completo de desarrollo de software, enfocándome en la
                      creación de historias de usuario, épicas y manuales
                      técnicos. Formé parte del área de QA, donde realicé
                      pruebas manuales y de rendimiento, así como tareas de
                      automatización de pruebas para mejorar la eficiencia del
                      proceso de aseguramiento de calidad.
                    </p>
                    <ToggleContent>
                      <p className="mb-4">
                        Utilicé JavaScript y Cypress para automatizar pruebas en
                        las plataformas web de la empresa. Además, integré
                        Python para la gestión de archivos y datos, y empleé
                        NodeJS para generar reportes automatizados en formato
                        PDF, contribuyendo a la mejora de los procesos de
                        documentación y validación.
                      </p>
                      <p>
                        Esta experiencia me permitió desarrollar habilidades
                        técnicas y prácticas en la implementación de soluciones
                        que optimizan los procesos de pruebas y aseguran la
                        calidad de los sistemas.
                      </p>
                    </ToggleContent>
                  </>
                }
              />
              <Experiencia
                imgEmpresa={beautySales}
                nombreEmpresa="Beauty Sales"
                cargo="Sistema POS - Freelance"
                anioComienzo="2024"
                habilidades={[
                  "React",
                  "Vite",
                  "Tailwind CSS",
                  "NodeJS",
                  "ExpressJS",
                  "MongoDB",
                ]}
                descripcion={
                  <>
                    <p className="mb-4">
                      Participé en el desarrollo de un proyecto FullStack junto
                      con un equipo de tres personas, creando un sistema POS
                      para un cliente del sector de salones de belleza y ventas
                      de productos estéticos. El sistema incluye funcionalidades
                      como gestión de ventas, compras, productos, categorías,
                      proveedores, usuarios, roles y un dashboard interactivo.
                    </p>
                    <ToggleContent>
                      <p className="mb-4">
                        El proyecto se desarrolló utilizando tecnologías
                        modernas como React, Vite, TailwindCSS en el frontend, y
                        NodeJS, ExpressJS, MongoDB en el backend. Implementamos
                        buenas prácticas de desarrollo, incluyendo el uso de
                        tokens para autenticación y encriptación de contraseñas,
                        asegurando la seguridad del sistema.
                      </p>
                      <p className="mb-4">
                        Mi principal responsabilidad fue liderar el desarrollo
                        del frontend, diseñando y construyendo la mayor parte
                        visual del sistema y los componentes principales.
                        También consumí las APIs, que en varios casos desarrollé
                        personalmente, y gestioné la seguridad del sistema
                        mediante la implementación de tokens.
                      </p>
                      <p className="mb-4">
                        Entre mis aportes más destacados están el desarrollo de
                        los módulos de login, recuperación de contraseña (con
                        envío de códigos de verificación al correo), dashboard,
                        y gestión de usuarios y roles. Además, apoyé a mis
                        compañeros en la creación de otros módulos,
                        contribuyendo al éxito del proyecto en su totalidad.
                      </p>
                    </ToggleContent>
                  </>
                }
              />
            </div>
          </section>
          <section className="proyectos w-full flex flex-col justify-center mt-20">
            <h2 className="text-3xl font-bold mx-auto">Proyectos</h2>
            <div className="flex flex-wrap items-center gap-4 w-full justify-center">
              <Proyectos
                imgProyecto={minimercado}
                nombreProyecto="Minimercado"
                descripcion="Este es un proyecto interactivo de Minimercado hecho con que simula una aplicación básica para la selección de productos, cálculo de totales y manejo del pago y cambio del cliente."
                habilidades={["HTML", "CSS", "JavaScript"]}
                urlRepositorio="https://github.com/sxntiBG/minimercado"
                urlDemo="https://sxntibg.github.io/minimercado/"
              />
            </div>
          </section>
          <section className="educacion w-full flex flex-col justify-center mt-20">
            <h2 className="text-3xl font-bold mx-auto">Estudios</h2>
            <div className="flex flex-wrap items-center gap-4 w-full justify-center">
              <Estudios
                carrera="Tecnología en Análisis y Desarrollo de Software"
                nombre="SENA: Servicio Nacional de Aprendizaje"
                anioComienzo="2021"
                anioFinal="2025"
                mesComienzo="Octubre"
                mesFinal="Enero"
              />
            </div>
          </section>
          <section className="cursos w-full flex flex-col justify-center mt-20">
            <h2 className="text-3xl font-bold mx-auto">
              Cursos y certificaciones
            </h2>
            <div className="flex flex-wrap items-center gap-4 w-full justify-center">
              <Estudios
                carrera="Desarrollo Personal G8 - ONE"
                nombre="Alura"
                anioComienzo="2025"
                rutaCertificado="./assets/pdf/Desarrollo_Personal_G8_ONE.pdf"
              />
              <Estudios
                carrera="Aprende JavaScript de CERO a EXPERTO"
                nombre="Udemy"
                anioComienzo="2024"
                rutaCertificado="./assets/img/certificados/Aprende_Javascript_de_cero_a_experto.jpg"
              />
              <Estudios
                carrera="Fundamentos esenciales de la programación"
                nombre="Linkedin"
                anioComienzo="2024"
                rutaCertificado="./assets/img/certificados/Fundamentos_esenciales_de_la_programacion.jpg"
              />
              <Estudios
                carrera="Introduction to Data Science"
                nombre="Cisco Networking Academy"
                anioComienzo="2024"
                rutaCertificado="./assets/pdf/Introduction_to_Data_Science_Badge20240403-29-n2modh.pdf"
              />
              <ToggleContent>
                <div className="flex flex-wrap items-center gap-4 w-full justify-center">
                  <Estudios
                    carrera="Python esencial"
                    nombre="Linkedin"
                    anioComienzo="2023"
                    rutaCertificado="./assets/img/certificados/Python_esencial.jpg"
                  />
                  <Estudios
                    carrera="GitHub para programadores"
                    nombre="Linkedin"
                    anioComienzo="2023"
                    rutaCertificado="./assets/img/certificados/GitHub_para_programadores.jpg"
                  />
                  <Estudios
                    carrera="HTML esencial"
                    nombre="Linkedin"
                    anioComienzo="2023"
                    rutaCertificado="./assets/img/certificados/HTML_esencial.jpg"
                  />
                  <Estudios
                    carrera="CSS esencial"
                    nombre="Linkedin"
                    anioComienzo="2022"
                    rutaCertificado="./assets/img/certificados/CSS_esencial.png"
                  />
                  <Estudios
                    carrera="Desarrollo ágil de software"
                    nombre="Linkedin"
                    anioComienzo="2022"
                    rutaCertificado="./assets/img/certificados/Desarrollo_agil_de_software.png"
                  />
                </div>
              </ToggleContent>
            </div>
          </section>
          <section className="contacto w-full flex flex-col justify-center items-center mt-20">
            <h2 className="text-3xl font-bold mx-auto">Contacto</h2>
            <article className="redes flex justify-center items-center gap-4 mt-10 mb-5">
              <a
                href="https://github.com/sxntiBG"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a987c9]"
              >
                <FiGithub className="w-8 h-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/santiago-zapata-ospina/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#a987c9]"
              >
                <SlSocialLinkedin className="w-8 h-8" />
              </a>
            </article>
            <BotonCV />
            <button
              onClick={copyEmail}
              className="hover:text-[#a987c9] focus:outline-none"
            >
              {isEmailCopied ? (
                <span className="flex items-center">
                  <FaCheck className="w-5 h-5 mr-2" />
                  Copiado
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <HiOutlineMail />
                  zapataospinasantiago8@gmail.com
                </span>
              )}
            </button>
          </section>
          <hr className="mt-10" />
        </main>
        <footer className="flex justify-center items-center pb-10">
          <div className="text-center sm:flex">
            <p>&copy; 2025 Santiago Zapata Ospina.</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </footer>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed lg:bottom-8 lg:right-8 sm:bottom-4 sm:right-4 bg-[#a987c9] text-white p-2 rounded-full shadow-lg hover:bg-[#8a6ba7] transition duration-300 z-20"
            aria-label="Volver arriba"
          >
            <IoIosArrowUp className="w-6 h-6" />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
