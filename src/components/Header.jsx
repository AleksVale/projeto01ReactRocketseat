import logo from '../img/logo.png';
import styles from './Header.module.css';

export function Header(){
  return(
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="logo" />
    </header>
  )
}