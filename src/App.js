// Feito por Eduardo Pontes
import React, { Fragment, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalTheme from "./globals";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
      <Fragment>
        <GlobalTheme />
          <div className='Navbar'>
            <nav className="navbar navbar-expand-lg navbar">
              <a className="navbar-brand"><img className="img-fluid" src="images/icon/favicon.ico"/></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa-solid fa-align-justify"></i></button>
                    
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#habilidades">Habilidades</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#projetos">Projetos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contato">Contato</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redes</a>  
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="https://github.com/eduardolpsss" target="_blank">Github</a>
                      <a className="dropdown-item" href="https://www.linkedin.com/in/eduardolpsss/" target="_blank">Linkedin</a>
                      <div className="dropdown-divider">
                      </div>
                      <a className="dropdown-item" href="mailto:eduardo.pontes2801@gmail.com">Email me</a>
                    </div>
                  </li>
                </ul>
                <br/>
                {/* <!-- theme switcher  --> */}
                <div className="toggle">
                  <div className="text-right">
                    <i className="fa-solid fa-lightbulb"></i>
                    <input id="switch" type="checkbox" name="switch-theme" onClick={toggleTheme}/>
                    <label for="switch"></label>
                  </div>
                </div>
              </div>
            </nav>

            {/* <!-- Botão go to top --> */}
            <a href="#"><i className="fa-solid fa-circle-up back-to-top"></i></a>          
          </div>

          <section>
            <div className="container">
              <div className="row">
                <div className="col-flex">
                  <element className="typewriter">
                    <h1>&nbsp;&nbsp;Olá, me chamo Eduardo</h1>
                  </element>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    Sou estudante de Ciências da Computação na instituição de ensino superior Universidade Católica de Brasília - UCB (7º semestre), interesse relacionado ao desenvolvimento, noções de programação, front-end e back-end web.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <img className="img-fluid" src="images/673a70fa-110d-4c5b-a800-28b4f88e5357.webp" alt=""/>
                </div>
              </div>
            </div>
          </section>

          <section id="habilidades">
            <div className="container">
              <hr/>
              <div className="row">
                <div className="col-12 text-center">
                  <h1>Habilidades</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    Desenvolvi e sigo desenvolvendo habilidades referentes seguintes linguagens e frameworks:
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <i className="fa-brands fa-html5" title="HTML 5"></i>
                  <i className="fa-brands fa-css3-alt" title="CSS 3"></i>
                  <i className="fa-brands fa-js-square" title="JavaScript"></i>
                  <i className="fa-brands fa-react" title="React.js"></i>
                  <i className="fa-brands fa-node" title="Node.js"></i>
                  <i className="fa-brands fa-npm" title="Node Package Manager"></i>
                  <i className="fa-solid fa-database" title="MySQL Relational Database Management System"></i>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    Métodos de trabalho e atvididades desenvolvidas:
                  </p>
                  <ul>
                    <li>Scrum (sprints) no Jyra e Trello</li>
                    <li>Challenge Based Learning (CBL)</li>
                    <li>UX/UI no Figma</li>
                    <li>Desenvolvimento responsivo (mobile view)</li>
                    <li>Analise e projeto de softwares (documentação)</li>
                    <li>Integração com banco de dados (MySQL) no back-end</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section id="projetos">
            <div className="container">
              <hr/>
              <div className="row">
                <div className="col-12 text-center">
                  <h1>Projetos</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p>
                    Os projetos que produzi e participei estão atualmente hospedados no meu GitHub.
                  </p>
                  <br/>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  <a href="https://github.com/eduardolpsss?tab=repositories" target="_blank">
                    <button type="button" className="btn btn-dark">Ir para os meus repositórios</button>
                  </a>
                  <br/><br/>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container" id="contato">
              <hr/>
              <div className="row">
                <div className="col-md-8 col-12">
                  <h1>Entre em contato comigo!</h1>
                  <p>
                    <i className="fa-solid fa-location-dot"></i> Brasília - DF/Brasil
                  </p>
                  <p>
                    Sigo sempre aprendendo, você pode entrar em contato comigo pelas seguintes redes:
                  </p>
                  <div className="text-center">
                    <a href="https://github.com/eduardolpsss" target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/eduardolpsss/" target="_blank">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:eduardo.pontes2801@gmail.com">
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </div>
                </div>
                {/* <!-- Imagem de perfil --> */}
                <div className="col-md-4 col-12 text-center mt-md-0 mt-2">
                  <img className="img-fluid float-center imagem-perfil" src="images/74a55920-83b8-463a-bd37-50141cebea59.webp"
                    alt=""/>
                </div>
              </div>
              <hr/>
            </div>
          </section>

          <div className="Footer" >    
            <footer className="text-center">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <p>
                      Feito por Eduardo Pontes
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
