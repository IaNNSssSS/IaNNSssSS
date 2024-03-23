// EditProductPopup.tsx
import { useState, useEffect } from 'react';
import { Product } from '@/types/products';
import styles from './modal.module.css';
import Image from 'next/image';

interface EditProductPopupProps {
  product: Product;
  onClose: () => void;
  onSave: (editedProduct: Product) => void;
}

const EditProductPopup: React.FC<EditProductPopupProps> = ({ product, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = useState<Product>(product);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };
  console.log(product);

  return (
    <div style={{zIndex: "1"}} className={styles.box1}>
      <div className={styles.titulo}>
        <h1>{product ? "Editar" : "Criar"}</h1>
      </div>
        <div className={styles.box2}>
          <div className={styles.lad_esq}>
            <div className={styles.meio}>
              <div>
                <Image src={editedProduct.image[0]} alt='edima' width={360} height={380}></Image>
              </div>
              <div className={styles.btns}>
                <div className={styles.bt}><button style={{ border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer'}} onClick={handleSave}>Salvar</button></div>
                <div className={styles.bt}><button style={{ border: 'none', backgroundColor: 'black', color: 'white', cursor: 'pointer'}} onClick={onClose}>Cancelar</button></div>
              </div>
            </div>
            <div className={styles.maisesquerdo}>
              <h3>foto1</h3>
              <h3>foto2</h3>
              <h3>foto3</h3>
              <h3>foto4</h3>
            </div>
          </div>
          <div className={styles.lad_dir}>
            <div className={styles.name}>
              <div style={{ color: 'gray', marginBottom: '5px'}}>Name</div>
              <div>
                <input className={styles.namess} type="text" name="name" value={editedProduct.name} onChange={handleInputChange} />
              </div>
            </div>

            <div className={styles.precos}>
              <div className={styles.precin}>
                <div style={{ color: 'gray', marginBottom: '5px'}}><label>Current Price</label></div>
                <div className={styles.pre}>
                  <input className={styles.num}
                    type="number"
                    name="current_price"
                    value={editedProduct.current_price}
                    onChange={handleInputChange}
                    />
                    <div className={styles.rs}>
                      <div>R$</div>
                      </div>
                </div>
              </div>
              <div>
                <div className={styles.precin}>
                  <div style={{ color: 'gray', marginBottom: '5px'}}><label>Old Price</label></div>
                  <div className={styles.pre}>
                    <input className={styles.num}
                      type="number"
                      name="old_price"
                      value={editedProduct.old_price}
                      onChange={handleInputChange}
                      />
                    <div className={styles.rs}>
                      <div>R$</div>
                      </div>
                  </div>
                </div>
              </div>
              </div>
              <div className={styles.size}>
                <div style={{ color: 'gray', marginBottom: '5px'}}>Size</div>
                <div>
                  <input style={{ border: '1px solid var(--c10, #1B1B1B)', padding: '5px',}}
                    type="text"
                    name="size"
                    value={editedProduct.size.join(', ')}
                    onChange={handleInputChange}
                    />
                </div>
                </div>
                <div className={styles.description}>
                  <div style={{ color: 'gray', marginBottom: '5px'}}>Product Description</div>
                  <div>
                    <textarea style={{ padding: '10px', width: '390px', height: '150px', border: '1px solid var(--c10, #1B1B1B)'}}
                      name="product_description"
                      value={editedProduct.product_description}
                      onChange={handleInputChange}
                      />
                  </div>
                </div>
                <div className={styles.box_tag_quant}>
                  <div className={styles.tags}>
                    <div>
                      <div style={{ color: 'gray', marginBottom: '5px'}}>Tags</div>
                      <div>
                        <input style={{ border: '1px solid var(--c10, #1B1B1B)', padding: '5px'}}
                          type="text"
                          name="tags"
                          value={editedProduct.tags.join(', ')}
                          onChange={handleInputChange}
                          />
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantity}>
                    <div style={{ color: 'gray', marginBottom: '5px'}}>Available Quantity</div>
                    <div>
                      <input style={{ border: '1px solid var(--c10, #1B1B1B)', padding: '5px'}}
                        type="number"
                        name="available_quantity"
                        value={editedProduct.available_quantity}
                        onChange={handleInputChange}
                        />
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
  );
};
        

export default EditProductPopup;
