'use client';
import mainbanner from './imagens/mainBanner.png';
import { otherProducts } from '@/utils/functions';

import card_esq_1 from './imagens/cards_coleção/promocoes.png';
import card_esq_2 from './imagens/cards_coleção/perfume.png';
import card_dir from './imagens/cards_coleção/whte.png';

import ProductContext from '@/contexts/products';
import { Product } from '@/types/products';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { useContext } from 'react';

function debugFunction() {
  console.log('debug');
}
if (typeof window !== 'undefined') {
  (window as any).debugFunction = debugFunction;
}

export default function Home() {
  const { products, cart } = useContext(ProductContext);

  return (
    <main className={styles.main}>
      <div className={styles.principal}>
        <div className="box1">
          <h1 className={styles.titulo}>
            Keith Haring & Blvck
            <br></br>
            Uma Fusão de Arte e Moda
          </h1>
          <Link href="/colecao">
            <button className={styles.cbut}>Conheça a Coleção</button>
          </Link>
          <div className="mainban">
            <Image className={styles.mainban} src={mainbanner} alt="mb"></Image>
          </div>
        </div>
        <div className="box2">
          <div className={styles.subtitulo}>
            <p>Conheça Também</p>
          </div>
          <div className={styles.cardcolecao}>
            <div className={styles.esquerda}>
              <Image
                className={styles.imesq}
                src={card_esq_1}
                alt="ces1"
                width={800}
                height={430}
              ></Image>
              <Image
                className={styles.imesq}
                src={card_esq_2}
                alt="ces2"
                width={800}
                height={430}
              ></Image>
            </div>
            <div className={styles.direita}>
              <Image
                className={styles.imdi}
                src={card_dir}
                alt="ces2"
                width={1000}
                height={165}
              ></Image>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className={styles.subtitulo}>
            <h5>Produtos</h5>
            <div className={styles.produtos}>
              {/*Joga todos os produtos na tela*/}
              {otherProducts(products).map((prod: Product, key) => 
              {
                return (
                <div key={key} className={styles.card_produtos}>
                  
                  <div className={styles.card_img}>
                    <Image
                      src={prod.image[0]}
                      className={styles.card_img}
                      alt="prod"
                      width={165}
                      height={165}
                    ></Image>
                  </div>
                  <div className={styles.informacoes}>
                    <h2>{prod.name}</h2>
                    <div className={styles.precos}>
                      <div className={styles.current_price}>R$ {prod.current_price}</div>
                      <div className={styles.old_price}>R$ {prod.old_price}</div>
                    </div>
                    {prod.available_quantity > 9 ? null : (
                      <p className={styles.disponivel}>
                        {prod.available_quantity} itens em estoque
                      </p>
                    )}
                  </div>
                </div>
              )})}
            </div>
          </div>
            <div className={styles.subtitulo}>
              <p>
                <button className={styles.cbut}>
                  <Link href="/produtos" style={{ textDecoration: 'none', color: 'white' }}>Ver Mais</Link>
                </button>
              </p>
            </div>
        </div>
      </div>
    </main>
  );
}
