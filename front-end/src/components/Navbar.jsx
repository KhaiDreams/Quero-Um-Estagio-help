import Link from 'next/link';

import styles from '../styles/navbar.module.css';

export default function Navbar() {
    return (
        <>
            <nav className={styles.background}>
                <div className={styles.menutexto_container}>
                    <h1 className={styles.menutexto}>MENU</h1>
                </div>

                    <div className={styles.menuall}>
                        <Link href="/">
                            <ul className={styles.menuitens_ul}>
                                <li className={styles.menuitens_li}>Home</li>
                            </ul>
                        </Link>


                        <Link href="/">
                            <ul className={styles.menuitens_ul}>
                                <li className={styles.menuitens_li}>About</li>
                            </ul>
                        </Link>


                        <Link href="/">
                            <ul className={styles.menuitens_ul}>
                                <li className={styles.menuitens_li}>Projects</li>
                            </ul>
                        </Link>

                        <Link href="/">
                            <ul className={styles.menuitens_ul}>
                                <li className={styles.menulogin_li}>Login</li>
                            </ul>
                        </Link>
                    </div>
            </nav>
        </>
    )
}