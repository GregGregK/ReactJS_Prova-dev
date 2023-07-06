import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./FormContact.css";

const FormContact = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      // Aqui você pode realizar a requisição HTTP para enviar o formulário de contato ao servidor
      await axios.post("/contact", {
        name,
        email,
        message,
      });

      alert("Formulário de contato enviado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao enviar formulário de contato:", error);
      // Trate o erro de acordo com sua necessidade (exibição de mensagem, etc.)
    }
  };

  return (
    <div className="form-contact">
      <h2>Entre em contato conosco</h2>
      <form onSubmit={(e) => submitForm(e)}>
        <div className="form-control">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Digite sua mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <input type="submit" value="Enviar" className="btn" />
      </form>
    </div>
  );
};

export default FormContact;
