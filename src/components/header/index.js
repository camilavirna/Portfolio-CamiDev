import styles from './style.module.scss'

function Header () {
    return (
      <header className = {styles.headerContainer}>
          <span className = {styles.logo}>Camila Virna</span>
          <nav className = {styles.menu}>
            <ul>
                <li>
                    <a href="#sobremim">Sobre Mim</a>
                </li>
                <li>
                    <a href="#projetos">Projetos</a>
                </li>
                <li>
                    <a href="#habilidades">Habilidades</a>
                </li>
                <li>
                    <a className = {styles.contato} href="#contato">Contato</a>
                </li>
            </ul>
          </nav>
      </header>
    );
  }
  
  export default Header;