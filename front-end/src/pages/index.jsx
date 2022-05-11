import TemplateDefault from "../templates/Default"

import gif from '../public/images/mouse.gif';

import styles from "../styles/home.module.css"


export default function Home() {
    return (
        <TemplateDefault>
            <div className={styles.background}>
                <div className={styles.container_top}>


                    <div className={styles.container_q_u_e}>
                        <h1 className={styles.h1_q_u_e}>QUERO UM</h1>
                        <h1 className={styles.h1_q_u_e}>ESTAGIO <span className={styles.help_color}>.HELP</span> </h1>
                    </div>
                    

                    <div className={styles.container_gif}>
                        <img src={gif.src} alt="" className={styles.gif_mouse}/>
                    </div>  
                    <div className={styles.container_por_favor}>
                        <h1 className={styles.h1_por_favor}>POR FAVOR...</h1>
                    </div>                  

                </div>
            </div>

        </TemplateDefault>
    )
}