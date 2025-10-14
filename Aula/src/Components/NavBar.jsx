import style from './NavBar.module.css';

export function NavBar() {
  return (
    <nav className={style.navbars}>
      <ul>
        <li><a href="#">Início</a></li>
        <li><a href="#">Livros</a></li>
        <li><a href="#">Curiosidade</a></li>
      </ul>
    </nav>

  )
}
