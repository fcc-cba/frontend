import styles from "./header.module.scss";

function up(letter) {
  return <span className={styles.initialLetter}>{letter}</span>
}

export default function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <li className={styles.title}>
            <div>
              {up('f')}ree{up('c')}ode{up('c')}amp {up('c')}órdoba
            </div>
          </li>
          <li>
            <a href="#" className={styles.menu}>
              Menu
            </a>
            <ul>
              <li>
                <a href="#about">¿Quiénes Somos?</a>
              </li>
              <li>
                <a href="#channels">Canales</a>
              </li>
              <li>
                <a href="#coc">Código de Conducta</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
