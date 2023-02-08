const { router } = require("../app");

router.post('/contacto', async (req,res) => {
    const mail = {
        to: 'rpintosrossi@frba.utn.edu.ar',
        subject: 'Contacto via WEB',
        html: `${req.body.nombre} se contacto via WEB y quiere
        mas informacion a este correo: %{req.body.email} y ${req.body.mensaje}`
    }

    const transport = nodemailer.cretaeTrasnport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.smtp_USER,
            pass: process.env.smtp_PASS
        }
    })

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    })

});