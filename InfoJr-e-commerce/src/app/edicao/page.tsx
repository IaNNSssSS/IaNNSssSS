'use client';
import filter from '../imagens/filtro/filter_list.png';
import mais_b from '../imagens/filtro/add.png';
import mais_p from '../imagens/filtro/add (1).png';

import styles from './page.module.css';
import Image from 'next/image';
import EditProductPopup from '@/components/productModal';
import { useState, useContext, useEffect } from 'react';
import { Product } from '@/types/products';
import ProductContext from '@/contexts/products';
import { searchProducts, filterProducts } from '@/utils/functions';

export default function Edicao() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  // use context do react para passar os produtos para o carrinho
  const { products, setProducts } = useContext(ProductContext);
  const [visibleProducts, setVisibleProducts] = useState(products);

  const [prodsFilter, setProdsFilter] = useState(products)
  const [word, setWord] = useState("")
  const [tags, setTags] = useState<string[]>([])

  useEffect(() => {
    handleSearch();
  }, [word,tags,products]); // Observa mudanças no estado 'word'

  function handleSearch() {
      const filtered = word ? searchProducts(filterProducts(products,tags), word) : products;
      setProdsFilter(filtered);
  }

  const [activeProduct, setActiveProduct] = useState(products[0]);
  function edit(prod: Product) {
    setActiveProduct(prod);
    setIsModalVisible(true);
  }
  
  function remove(id: number) {
    const newProducts = products.filter((prod) => prod.id !== id);
    setProducts(newProducts);
    setVisibleProducts(newProducts);
  }
  function save(editedProduct: Product) {
    const newProducts = products.map((prod) =>
      prod.id === editedProduct.id ? editedProduct : prod
    );
    setVisibleProducts(newProducts);
    setProducts(newProducts);
  }

  function create() {
    setActiveProduct({
      id: 0,
      name: '',
      current_price: .0,
      old_price: .0,
      available_quantity: 0,
      size: [],
      product_description:
        '',
      tags: [],
      image: [],
    } as Product);
    setIsModalVisible(true);
  }
  



  return (
    <main>
      <div className={styles.box1}>
        <div className={styles.titulo}>
          <h1>Edição</h1>
        </div>
        <div className={styles.box2}>
          <div className={styles.box3}>
            <div className={styles.lad_esq}>
              <div className={styles.cima}>
                <div onClick={create} className={styles.CP}>
                  <div>Criar Produto</div>
                  <div className={styles.maiss}>
                    <Image src={mais_b} alt="mais"></Image>
                  </div>
                </div>
                <div className={styles.EP}>
                  <div>Editar produto</div>
                  <div className={styles.maiss}>
                    <Image src={mais_p} alt="mais"></Image>
                  </div>
                </div>

                <input onChange={(e) => setWord((e.target.value))}
                className={styles.pesquisar}
                value={word}
                placeholder="Pesquisar"
                ></input>

                {/* <div className={styles.pesquisar}>
                  <Placeholder>
                    <div className={styles.pesq}>
                      <div>Pesquisar</div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M15.7549 14.2549H14.9649L14.6849 13.9849C15.6649 12.8449 16.2549 11.3649 16.2549 9.75488C16.2549 6.16488 13.3449 3.25488 9.75488 3.25488C6.16488 3.25488 3.25488 6.16488 3.25488 9.75488C3.25488 13.3449 6.16488 16.2549 9.75488 16.2549C11.3649 16.2549 12.8449 15.6649 13.9849 14.6849L14.2549 14.9649V15.7549L19.2549 20.7449L20.7449 19.2549L15.7549 14.2549ZM9.75488 14.2549C7.26488 14.2549 5.25488 12.2449 5.25488 9.75488C5.25488 7.26488 7.26488 5.25488 9.75488 5.25488C12.2449 5.25488 14.2549 7.26488 14.2549 9.75488C14.2549 12.2449 12.2449 14.2549 9.75488 14.2549Z"
                            fill="#1B1B1B"
                          />
                        </svg>
                      </div>
                    </div>
                  </Placeholder>
                </div> */}
              </div>
              <div className={styles.baixos}>X itens encontrados!</div>
            </div>
            <div className={styles.lad_dir}>
              <div className={styles.cimas}>
                <button className={styles.filtro_b}>
                  <div>Filtros</div>
                  <div>
                    <Image src={filter} alt="fil"></Image>
                  </div>
                </button>
              </div>
              <div className={styles.baixo}>
                {tags.map((tag, key) => (
                  <div key={key} className={styles.tag}>{tag}</div>
                ))}
              </div>
            </div>
          </div>
          {isModalVisible ? (
            <EditProductPopup 
              product={activeProduct}
              onClose={() => {
                setIsModalVisible(false);
              }}
              onSave={save}
            />
          ) : null}
          <div className={styles.produtos}>
            {prodsFilter.map((prod) => (
              <div key={prod.id} className={styles.outros_produtos}>
                <Image
                  src={prod.image[0]}
                  className={styles.card_img}
                  width={360}
                  height={360}
                  alt="prod"
                ></Image>
                <div className={styles.informacoes}>
                  <h2>{prod.name}</h2>
                  <div className={styles.precos}>
                    <div className={styles.current_price}>R$ {prod.current_price}</div>
                    <div className={styles.old_price}>R$ {prod.old_price}</div>
                  </div>
                  <p className={styles.disponivel}>{prod.available_quantity} Itens em estoque</p>
                </div>
                <div className={styles.edit_remov}>
                  <div>
                    <button className={styles.edit} onClick={() => {edit(prod);}}>
                      Editar
                    </button>
                  </div>
                  <div>
                    <button className={styles.remove} onClick={() => remove(prod.id)}>
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
