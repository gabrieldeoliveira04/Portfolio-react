export default function Home() {
  return (
    <section className="home mt-5" id="home">
      <div className="home-content">
        <h3>Olá,</h3>
        <h1>Eu sou o Gabriel</h1>
        <h3>
          Desenvolvedor <span>full </span>
          <span>stack </span>
        </h3>

        <p>
          Como Desenvolvedor Full stack, busco me aprimorar na área e
          ingressar em meu primeiro emprego como desenvolvedor, tenho um perfil
          criativo, proativo e dedicado, além de ser apaixonado pela área de
          tecnologia.
        </p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/gabriel-de-oliveira-gomes-a122591b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i className="bx bxl-linkedin-square"></i>
          </a>
          <a href="https://github.com/gabrieldeoliveira04">
            <i className="bx bxl-github"></i>
          </a>
          <a href="https://wa.me/5515920003478?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portf%C3%B3lio">
            <i className="bx bxl-whatsapp-square"></i>
          </a>
        </div>
        <div>
          <a
            href="https://drive.google.com/drive/folders/1y0XOb14cjsFB5dxaAJPk6QyPvs1uPaL4?usp=drive_link"
            className="btn"
          >
            Download CV
          </a>
        </div>
      </div>

      <div>
        <div className="home-img">
          <img src="Profile Picture.png" alt="Profile Picture" />
        </div>
      </div>
    </section>
  );
}
