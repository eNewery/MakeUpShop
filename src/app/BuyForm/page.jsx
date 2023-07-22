"use client"
import React, { useContext } from 'react'
import emailjs from 'emailjs-com';
import { MiContexto } from '../Components/CartContext'

const BuyForm = () => {
    const data = useContext(MiContexto)
    console.log(data.cart)
    emailjs.init("uz5HLEJVRTHGeeoth")
    const enviarCorreo = () => {
        const templateParams = {
          to_email: 'aguxsii@gmail.com', // Email del destinatario
          from_name: 'Ulises', // Tu nombre como remitente
          message: `La orden es la siguiente (${data.cart.map(item => item.name)})`, // Contenido del correo electrónico
        };
      
        emailjs.send("service_za07y5e","template_0n8m58k", templateParams)
          .then((response) => {
            console.log('Correo electrónico enviado con éxito:', response);
          })
          .catch((error) => {
            console.error('Error al enviar el correo electrónico:', error);
          });
          console.log(templateParams)
      };
  return (
    <div><button onClick={enviarCorreo}>enviar</button></div>

  )
}

export default BuyForm