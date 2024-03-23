'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

import { IoClose } from 'react-icons/io5';
import { IoMenu } from "react-icons/io5";

function DropdownMenu(): JSX.Element {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsActive(state => !state);
  };

  return (
    <main className={styles.main}>
      <div className={isActive ? styles.navigation_active : styles.navigation}
      style={isActive ? {position: 'absolute', top: '0px', right: '0px'} : {}}>
        {isActive ? (
          <>
            <div className={styles.btnBox}>
                <button className={styles.menuToggle} onClick={handleClick}>
                <IoClose
                    style={{
                    width: '35px',
                    height: '35px',
                    }}
                />
                </button>                
            </div>
            <div className={styles.menuBox}>
              <div className={styles.produtos}>
                <ul className={styles.menu}>
                  <Link href="/produtos" style={{ textDecoration: 'none', color: 'black' }}>
                    <h4>Produtos</h4>
                  </Link>                  
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Camisas</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Calças</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Casacos</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Acessórios</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Masculino</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Feminino</Link>
                  </li>
                </ul>
              </div>
              <div className={styles.colecoes}>
                <ul className={styles.menu}>
                  <Link href="/colecao" style={{ textDecoration: 'none', color: 'black' }}><h4>Coleções</h4></Link>                  
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Keith Haring & Blvck</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Fortnite & Blvck</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>Shorts</Link>
                  </li>
                  <li>
                    <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>White</Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <Button className={styles.menuToggle} onClick={handleClick}>
              <IoMenu
                style={{
                  width: '25px',
                  height: '25px',
                }}
              />
            </Button>
          </>
        )}
      </div>
    </main>
  );
}
export default DropdownMenu;
