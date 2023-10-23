import { useState } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”
 
    emailjs.sendForm('service_37w2npe', 'template_38q34pc', e.target, 'H8HrROEjeg5nJCqK4')
      .then((result) => {
          // show the user a success message
          console.log(result.text);
      }, (error) => {
          // show the user an error
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
      <form class="contact-me-form" onSubmit={sendEmail}>
        <h2 class="contact-me-form-title">Contact Me</h2>
        <input type="name" placeholder="Name" name="name" />
        <input type="email" placeholder="Email" name="email" />
        <input type="subject" placeholder="Subject" name="subject" />
        <textarea placeholder="Message" name="message"></textarea>
        <button class="button-confirm" type="submit">Let`s go → </button>
      </form>
  );
}
