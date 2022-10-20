import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Home.scss';

function Home() {
	const { nightMode } = useContext(ThemeContext)

	return(
		<main className={nightMode ? 'dark' : 'light'}>
			<img className="main__img" src="/assets/img/fotoperfil.png" alt=''></img>
			<article className="main__info">
				<header>
					<h1>Hi, I'm Benjamin</h1>
					<img className='hand' src='/assets/img/wave.png' alt=''></img>
				</header>
				<h2>I'm a Front-End Developer</h2>
				<ul>
					<li><img src='assets/img/argentina.png' alt=''></img>Buenos Aires, Argentina</li>
					<li><img src='assets/img/laptop.png' alt=''></img>constantly growing proffesional</li>
					<li><img src='assets/img/cat.png' alt=''></img>cat owner</li>
					<li><img src='assets/img/mailbox.png' alt=''></img>contact me (links below)</li>
				</ul>
				<footer>
					<a href='https://github.com/BenjaminZapata' target={'_blank'}><img src='/assets/img/github.png' alt='' /></a>
					<a href='https://www.linkedin.com/in/benjaminzapata/' target={'_blank'}><img src='/assets/img/linkedin.png' alt='' /></a>
				</footer>
			</article>
		</main>
	)
}

export default Home;