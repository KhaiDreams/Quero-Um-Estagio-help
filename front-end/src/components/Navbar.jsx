import Link from 'next/link';

import imgreact from '../public/images/reacticon.png';

import styles from '../styles/navbar/navbar.module.css';

export default function Navbar() {
    return (
        <>
            <div className={styles.background}>
                <nav className={styles.navbar_content}>
                    <ul className={styles.ul}>
                        <Link href="/">
                            <img src={imgreact.src} alt="LOGO" className={styles.imagem} />
                        </Link>

                        <li className={styles.li}>
                            <Link href="about" className={styles.texto}>About</Link>
                        </li>

                        <li className={styles.li}>
                            <Link href="services" className={styles.texto}>Services</Link>
                        </li>

                        <li className={styles.li}>
                            <Link href="portfolio" className={styles.texto}>Projects</Link>
                        </li>

                        <li className={styles.li}>
                            <Link href="contact-us" className={styles.texto}>Contact Us</Link>
                        </li>


                        <div className={styles.content_loginregister}>
                            <div className={styles.button}>
                                <li className={styles.li_loginregister}>
                                    <Link href="login" className={styles.texto_loginregister}>Login</Link>
                                </li>  
                            </div>   

                            <div className={styles.button}>
                                <li className={styles.li_loginregister}>
                                    <Link href="user/register" className={styles.texto_loginregister}>Register</Link>
                                </li>  
                            </div>
                        </div> 



                    </ul>
                </nav>
            </div>
        </>
    )
}