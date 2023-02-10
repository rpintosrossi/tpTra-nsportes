import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div>
                <img src="img/home/img01.jpg" alt="avion" />
            </div>
            <div className="columnas">
                <section className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Transportes.Transportes.....</p>
                </section>
                <section className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente Excelente</span>
                        <span className="autor">Juan Perez - zapatos.com</span>
                    </div>
                </section>
            </div>
        </main >
    )
}

export default HomePage;