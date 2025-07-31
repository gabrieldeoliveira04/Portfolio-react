export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>
        Me <span>contate!</span>
      </h2>

      <form className=""
        action="https://formsubmit.co/gabrielgomes.04@hotmail.com"
        method="POST"
      >
        <div className="input-box">
          <input
            type="text"
            placeholder="Nome completo"
            name="Nome completo"
            required
          />
          <input type="email" placeholder="E-mail" name="E-mail" required />
          <input
            type="número"
            placeholder="Número de telefone"
            name="Número de telefone"
          />
          <input type="text" placeholder="Assunto" name="Assunto" required />
          <textarea
            cols={30}
            rows={8}
            placeholder="Mensagem"
            name="assunto"
            required
          ></textarea>
          <button type="submit">Enviar mensagem</button>
        </div>
      </form>
    </section>
  );
}
