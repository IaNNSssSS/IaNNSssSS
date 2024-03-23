'use client'

import favoritos from "@/app/imagens/favorite_border.png"
import perfil from "@/app/imagens/person_outline.png"
import carrinho from "@/app/imagens/shopping_cart.png"

import Link from "next/link";
import styles from './page.module.css'
import Image from "next/image"

import { useState, useCallback, useEffect } from 'react';

import DropdownMenu from "./dropdownmenu/page";

const useMediaQuery = (width: any) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

export default function Header() {
    const larguraMaxima = useMediaQuery(1200)

    return (
        <>
            { larguraMaxima ? (
                <header className={styles.header}>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}><h3 className={styles.logo}>BLVCK</h3></Link>
                    <div className={styles.pessoal}>
                      <Link href="/carrinho"><h3><Image src={carrinho} alt='car'></Image></h3></Link>
                      <Link href="/favoritos"><h3><Image src={favoritos} alt='fav'></Image></h3></Link>
                      <Link href="/perfil"><h3><Image src={perfil} alt='per'></Image></h3></Link>
                    </div>
                    <div id="ddmenu" className={styles.ddmenu}><DropdownMenu /></div>
                    
                </header>
            ) : (
                <header className={styles.header}>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}><h3 className={styles.logo}>BLCVK</h3></Link>            
                    <div className={styles.informacao}>
                        <Link href="/produtos" style={{ textDecoration: 'none', color: 'black' }}><h3>Produtos</h3></Link>
                        <Link href="/colecao" style={{ textDecoration: 'none', color: 'black' }}><h3>Coleções</h3></Link>
                        <Link href="/sobre" style={{ textDecoration: 'none', color: 'black' }}><h3>Sobre</h3></Link>
                    </div>
                    <div className={styles.pessoal}>
                      <Link href="/carrinho"><h3><Image src={carrinho} alt='car'></Image></h3></Link>
                      <Link href="/favoritos"><h3><Image src={favoritos} alt='fav'></Image></h3></Link>
                      <Link href="/perfil"><h3><Image src={perfil} alt='per'></Image></h3></Link>
                    </div>
                </header>
            )}
        </>
    )
}