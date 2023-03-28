import styles from './Header.module.css'
import desafioLogo from '../assets/logo.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={desafioLogo} alt="logo do desafio 01" />
        </header>
        
    );
}