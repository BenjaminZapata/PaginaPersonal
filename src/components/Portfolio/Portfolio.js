import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import './Portfolio.scss'

const PortfolioCard = ({img, title, desc, link}) =>{
  return(
    <article className="portfolioCard">
      <img src={img} alt=''></img>
      <a href={link}><div className='cardInfo'>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div></a>
    </article>
  )
}

function Portfolio() {
  const { nightMode } = useContext(ThemeContext)

  return(
    <section className={nightMode ? 'portfolio dark' : 'portfolio light'}>
      <h1>Projects</h1>
      <div className='container'>
      <PortfolioCard img='/assets/img/todoterreno.png' title='TodoTerreno e-commerce' desc='Proyecto final para el curso de React de Coderhouse' link='https://github.com/BenjaminZapata/ProyectoFinalZapata-React.git'/>
      <PortfolioCard img='/assets/img/weatherapp.png' title='Weather App' desc='SPA de clima, utilizando OpenWeather API' link='https://github.com/BenjaminZapata/WeatherApp.git'/>
      </div>
    </section>
  )
}

export default Portfolio;