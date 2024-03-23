'use client'
import facebook from '../imagens/footer/facebook.png'
import instagram from '../imagens/footer/instagram.png'
import linkedin from '../imagens/footer/linkedin.png'
import x from '../imagens/footer/TwitterX.png'
import flecha from '../imagens/footer/arrow_forward.png'

import Image from 'next/image'
import styles from './page.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inf_esq}>
            <h6>Participe da nossa Newsletter<br></br>
                e fique por dentro dos lançamentos</h6>
            <div className={styles.ba_email}>
                <div><input className={styles.dig_email} placeholder="Digite seu email"></input></div>
                <div><Image className={styles.arrow} src={flecha} alt='fle'></Image></div>
            </div>
            <h5>BLCVK</h5>
            </div>
            <div className={styles.inf_dir}>
            <h6>FAQ</h6>
            <h6>Termos e Condições</h6>
            <h6>Contato@blvck.com</h6>
            <div className={styles.icons}>
                <Image src={facebook} alt='face'></Image>
                <Image src={instagram} alt='insta'></Image>
                <Image src={linkedin} alt='link'></Image>
                <Image src={x} alt='twtt'></Image>
            </div>
            </div>
        </footer>
    )
}