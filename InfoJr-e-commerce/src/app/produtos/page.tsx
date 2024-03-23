'use client';
'use client';
import { useState, useContext, useEffect } from 'react';
import filter from '../imagens/filtro/filter_list.png';
import { Product } from '@/types/products';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import ProductContext from '@/contexts/products';

import { filterProducts, otherProducts, recentProducts } from '@/utils/functions';
import { searchProducts } from '@/utils/functions';
import { FaSearch } from 'react-icons/fa';

export default function Produtos() {
const { products, product, setProduct, collection, category, recent, setRecent } = useContext(ProductContext);

  const [prodsFilter, setProdsFilter] = useState(products);
  const [word, setWord] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [checked, setChecked] = useState<boolean[]>([]);

  useEffect(() => {
    handleSearch();
  }, [word, tags]);

  function handleSearch() {
    const filtered = word ? searchProducts(filterProducts(products, tags), word) : products;
    setProdsFilter(filtered);
  }

  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsActive((state) => !state);
  };

  function handleProduct(product: Product) {
    setProduct(product);
    if(!recent.includes(product)){
      var newRecent = recent
      recentProducts(newRecent, product)
      setRecent(newRecent)
      console.log(recent)
    }
  }

  function handleChange(e: any) {

    if (e.target.checked) {
      setTags([...tags, e.target.value]);
    } else {
      setTags(tags.filter((tag) => tag !== e.target.value));
    }
    handleSearch();
  }

  return (
    <main>
{product.name}
      <div className={styles.box1}>
        <div className={styles.titulo}>
          <h1>Produtos</h1>
          <div className={styles.prod_barra}>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="257"
              height="14"
              viewBox="0 0 257 14"
              fill="none"
            >
            <path d="M0 0H257V14H0V0Z" fill="#D1D1D1" />
          </svg>
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.box3}>
            <div className={styles.l_esq}>
              <div className={styles.barraPesquisa}>
              <input
                onChange={(e) => setWord(e.target.value)}
                  className={styles.campoPesquisa}
                  value={word}
                placeholder="Pesquisar"
              ></input>
                <button className={styles.botaoBusca} onClick={() => handleSearch()}>
                  <FaSearch />
                </button>
              </div>
              <div className={styles.x_itens}><h3>X itens encontrados</h3></div>
            </div>
            <div className={styles.l_dir}>
                {isActive ? (
                <>
                  <button className={styles.filtro_b} onClick={handleClick}>
                  <div>Filtros</div> 
                  <div>
                      <Image src={filter} alt="fil"></Image>
                    </div>
                </button>
              <div className={styles.filtro}>
                  <div className={styles.listaCategorias}>
                      <ul style={{ listStyle: 'none' }}>
                        <h4>Categorias</h4>
                        {category.map((cat, key) => (
                          <li key={key}>
                            <input onChange={handleChange} checked={tags.includes(cat)} value={cat} type="checkbox" />
                            {cat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.listaColecoes}>
                      <ul style={{ listStyle: 'none' }}>
                        <h4>Coleções</h4>
                        {collection.map((col, key) => (
                          <li key={key}>
                            <input onChange={handleChange} checked={tags.includes(col)} value={col} type="checkbox" />
                            {col}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <button className={styles.filtro_b} onClick={handleClick}>
                    <div>Filtros</div>
                    <div>
                      <Image src={filter} alt="fil"></Image>
                    </div>
                    </button>
                </>
              )}
              <div className={styles.tags}>
                {tags.map((tag, key) => (
                  <div key={key} className={styles.tag}>{tag}</div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.produtos}>
          {prodsFilter.map((prod, key) => (
            <Link
                onClick={() => {
                  handleProduct(prod);
                }}
                style={{ textDecoration: 'none', color: 'black' }}
                key={key}
                href={`/produtos/`}
              >
                <div className={styles.card_produtos}>
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
                <p className={styles.disponivel}>{prod.available_quantity} itens em estoque</p>
              </div>                  
            </div>
            </Link>
          ))}
        </div>
        </div>
        <div className={styles.editar}>
          <Link href="/edicao" style={{ textDecoration: 'none', color: 'white' }}>
            <div>Editar</div>
          </Link>
        </div>
      </div>
    </main>
  );            
}
