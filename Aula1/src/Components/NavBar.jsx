import style from './NavBar.module.css';

export function NavBar() {
  return (
    <nav className={style.navbars}>
      <ul>
        <li>Início</li>
        <li>Livros</li>
        <li>Curiosidade</li>
      </ul>
    </nav>

  )
}
