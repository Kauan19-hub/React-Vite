import style from './Header.module.css';

// Export function (name of your file)
export function Header() {
    return (
        <header className={style.header}>
            <h1 className={style.title}>HEADER</h1>
        </header>

    )
}