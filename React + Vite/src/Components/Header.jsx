// Export function (name of your file)
import style from './Header.module.css';

export function Header() {
    return (
        <header className={style.header}>
            <h1 className={style.title}>HEADER</h1>
        </header>

    )
}