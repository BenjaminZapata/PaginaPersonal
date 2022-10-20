import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './NavBar.scss';
import { Link } from 'react-router-dom';

function NavBar() {
  const { nightMode, handleTheme } = useContext(ThemeContext)

  return(
    <nav className={nightMode ? 'dark' : 'light'}>
      <Link to={'/'}><button>home</button></Link>
      <Link to={'/aboutme'}><button>about me</button></Link>
      <button><span>bz</span></button>
      <Link to={'/portfolio'}><button>portfolio</button></Link>
      <button onClick={handleTheme}>{ nightMode ? 'sun' : 'moon'}</button>
    </nav>
  )
}

export default NavBar;