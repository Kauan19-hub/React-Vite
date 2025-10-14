import style from './Header.module.css';
import logo from '../assets/Logo.png';

// Export function (name of your file)
export function Header() {
    return (
        <header className={style.header}>
            <img src={logo}/>
            <h1 className={style.title}>HEADER</h1>
        </header>

    )
}