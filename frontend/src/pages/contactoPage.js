import '../styles/components/pages/contactoPage.css';
import React, {useState } from 'react';
import axios from 'axios';


const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje:''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const responde = await axios.post('http://localhost:3000/api/contacto',
        formData);
        setSending(false);
        setMsg(responde.data.message);
        if (Response.data.error === false){
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form className="Formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={FormData.nombre}
                        onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={FormData.email}
                        onChange={handleChange} />
                    </p>
                    <p>
                        <label>Telefono</label>
                        <input type="text" name="telefono" value={FormData.telefono}
                        onChange={handleChange} />
                    </p>
                    <p>
                        <label>Comentario</label>
                        <input type="text" name="telefono" value={FormData.mensaje}
                        onChange={handleChange} />
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className="centrar"><input type ="submit" value="enviar" /></p>
                </form>
            </div>
            <div class ="datos">
                <h2>Otras vias de comunicacion</h2>
                <p>Tambien puede contactarse con nosotros usando
                    los siguientes medios</p>
                <ul>
                    <li>Telefono: 46787846</li>ç
                    <li>Facebook: TransportesX</li>ç
                    
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;