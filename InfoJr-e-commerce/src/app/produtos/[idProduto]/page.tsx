'use client';

import { MdOutlineShoppingCart } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import { FaArrowRight } from 'react-icons/fa';

import style from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

import ProductContext from '@/contexts/products';
import { useContext, useState } from 'react';
import { ProductImage } from '@/enums/product_images';
import { Product } from '@/types/products';

const produto = [
  {
    id: 1,
    name: 'Blvck Mohair Branded Sweater',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Mohair1, ProductImage.Mohair2, ProductImage.Mohair3],
  },
  {
    id: 2,
    name: 'Blvck Evil Twin Teddy Bear Hoodie',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Evil1, ProductImage.Evil2],
  },
  {
    id: 3,
    name: "'Blvck x Keith Haring' Heart Cardigan",
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Keith1],
  },
  {
    id: 4,
    name: "'Blvck x Keith Haring' Heart Cardigan",
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Haring1],
  },
  {
    id: 5,
    name: 'Blvck Blazer Dress',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Blazer1],
  },
  {
    id: 6,
    name: 'Blvck Mohair Branded Sweater',
    current_price: 654.0,
    old_price: 746.0,
    available_quantity: 7,
    size: ['P', 'M', 'G', 'GG'],
    product_description:
      'Apresentando o suéter da marca Blvck Mohair, uma obra-prima sofisticada e aconchegante confeccionada com o mais requintado tecido mohair para um toque e toque superiores. Apresentando uma placa metálica com o icônico logotipo da Blvck Paris para uma estética opulenta, este suéter exala luxo. Para um toque suave e luxuoso, não procure além deste item indispensável atemporal.',
    tags: ['Sweater', 'Casacos', 'Roupa'],
    image: [ProductImage.Bandana1],
  },
];
// Ao colocar qualquer CEP, retorna o mesmo valor de frete ( ex: R$20,00)
export default function PagProduto( itemProduto: Product ) {
  const [visibilidadeFrete, setVisibilidadeFrete] = useState(false);

  const visFrete = () => {
    setVisibilidadeFrete(state => !state)
  }

  const { products, cart, setCart, recent } = useContext(ProductContext);
  if (cart.length == 0) setCart(produto);

  function deleteCart(id: number) {
    const newCart = cart.filter(prod => prod.id !== id);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function handleProduct(product: Product) {
    setProduct(product);
  }

  function vendido(){
    alert('Compra finalizada!');
    clearCart();
  }

  const frete = 20

  return (
    <div className={style.principal}>
      <div className={style.produtoBox}>        
        <div className={style.imgBox}>
          <Image
            alt={''}
            src={produto[0].image[0]}
            width={150}
            height={150}
          />
        </div>
        <div className={style.infoBox}>
          <div className="titulo"></div>
          <div  className={style.cardProdutos}>
            <div className={style.atribsProduto}>
              
              <div className={style.infoCard}>
                <h3 className={style.nomeProd}>{produto[0].name}</h3>
                <div className={style.precos}>
                  <span className={style.currentPrice}>
                    R$ {produto[0].current_price}
                  </span>
                  <span className={style.oldPrice}>
                    R$ {produto[0].old_price}
                  </span>
                </div>
                <p className={style.qtdRestante}>
                  {produto[0].available_quantity} Itens em estoque
                </p>
                <div className={style.qtdTamanho}>
                  <div className={style.quantidade}>
                    <p>Quantidade</p>
                    {/* dropdown */}
                  </div>
                  <div className={style.tamanho}>
                    <p>Tamanho</p>
                    {/* dropdown */}
                  </div>
                </div>
                <div className={style.btnBox}>
                  {/* Adicionar ao carrinho */}
                  <button
                    className={style.btnAdicionar}
                    onClick={() => (console.log('Deu certo'))}
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
            <div className={style.botoes}>
              <>
                <button className={style.botao}>
                  <MdFavoriteBorder />
                </button>
              </>
              <>
                <button
                  onClick={() => deleteCart(prod.id)}
                  className={style.botao}
                >
                  <FiTrash />
                </button>
              </>
            </div>
          </div>
        </div>
      </div>      
      <div className={style.prodSemelhantes}>
        <div className={style.titulo}>
          <h1>Produtos Semelhantes</h1>
        </div>
        <div className={style.semelhanteCard}>
          {products.map((prod, key) => (
            <div className={style.cardContainer}>
              <Link
                onClick={() => {
                  handleProduct(prod);
                }}
                style={{ textDecoration: 'none', color: 'black' }}
                key={key}
                href={`/produtos/${key}`}
              >
                <div className={style.card_produtos}>
                  <div className={style.card_img}>
                    <Image
                      src={prod.image[0]}
                      className={style.card_img}
                      alt="prod"
                      width={165}
                      height={165}
                    ></Image>
                  </div>
                  <div className={style.informacoes}>
                    <h2>{prod.name}</h2>
                    <div className={style.precos}>
                      <div className={style.current_price}>
                        R$ {prod.current_price}
                      </div>
                      <div className={style.old_price}>R$ {prod.old_price}</div>
                    </div>
                    <p className={style.disponivel}>
                      {prod.available_quantity} itens em estoque
                    </p>
                  </div>
                </div>
              </Link>
              <div className={style.btnBox}>
                {/* Adicionar ao carrinho */}
                <button
                  className={style.btnAdicionar}
                  onClick={() => (console.log('Deu certo'))}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={style.outrosProdutos}>
        <div className={style.titulo}>
          <h1>Outros Produtos</h1>
        </div>
        <div className={style.outrosProdsCards}>
          {products.map((prod, key) => (
            <Link
              onClick={() => {
                handleProduct(prod);
              }}
              style={{ textDecoration: 'none', color: 'black' }}
              key={key}
              href={`/produtos/`}
            >
              <div className={style.card_produtos}>
                <div className={style.card_img}>
                  <Image
                    src={prod.image[0]}
                    className={style.card_img}
                    alt="prod"
                    width={165}
                    height={165}
                  ></Image>
                </div>
                <div className={style.informacoes}>
                  <h2>{prod.name}</h2>
                  <div className={style.precos}>
                    <div className={style.current_price}>
                      R$ {prod.current_price}
                    </div>
                    <div className={style.old_price}>R$ {prod.old_price}</div>
                  </div>
                  <p className={style.disponivel}>
                    {prod.available_quantity} itens em estoque
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
