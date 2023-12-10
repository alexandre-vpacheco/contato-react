import { useState } from 'react'
import './App.css'
import emailjs from '@emailjs/browser'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e) {
    e.preventDefault();

    if (name === ''|| email === '' || message === '') {
      alert("Todos os campos devem estar preenchidos!")
      return;
    } 

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_kb6beko", "template_fawnaa5", templateParams, "0V7R0ERhygjeMa6ms")
    .then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')
    }, (error) => {
      console.log("ERRO: ", error)
    })
  }

  return (

    <div className="container">

      <div className="box">

        <h1 className="title">Contato</h1>

        <form className="form" onSubmit={sendEmail}>
          <input
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <input
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <textarea
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />

          <input className="button" type="submit" value="Enviar" />
        </form>

      </div>

    </div>

  );
}

export default App
