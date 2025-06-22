import React, { useEffect, useState } from 'react';
import '../App.css';
import Button from '../Default/Button';
import MasofFotos from './MasOfFotos';

const API_URL = "https://localhost:7153/api/v1/products";

export default function Catalog() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem('basket');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });
function Ok(){
  alert('Спасибо за покупку! Заказ уже готовиться!')
}
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

 const addToBasket = (product) => {
  setBasket(prevBasket => {
    const existingItem = prevBasket.find(item => item.id_product === product.id_product);
    
    if (existingItem) {
      if (existingItem.quantity >= product.count) {
        alert(`Извините, на складе осталось только ${product.count} шт. этого товара`);
        return prevBasket;
      }
      return prevBasket.map(item =>
        item.id_product === product.id_product
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      if (product.count <= 0) {
        alert('Этот товар временно отсутствует на складе');
        return prevBasket;
      }
      return [...prevBasket, { ...product, quantity: 1 }];
    }
  });
};

  const removeFromBasket = (productId) => {
    setBasket(prevBasket => prevBasket.filter(item => item.id_product !== productId));
  };

  return (
    <>
    <section className='goods'>
      <div className='container'>
        <h2>Тут будет список товаров о стульях</h2>
        <p>Выберете себе стул по душе!</p>
      </div>
      <div className='content'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products.map(product => (
              <li key={product.id_product}>
                <img src={MasofFotos(product.id_product)} className='imgCatalog' alt={product.name_product} />
                <h2>{product.name_product}</h2>
                <p>{product.description}</p>
                <p>Кол-во на складе: {product.count}</p>
                <h4>{product.price} Руб</h4>
                <Button onClick={() => addToBasket(product)}>Положить в корзину</Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
      <aside>
        <div className='container'>
          <h1>КОРЗИНА</h1>
          </div> 
          <form className='content'>
            Выберете способ оплаты:
            <select>
              <option value ='наличные'>Наличные</option>
              <option value ='картой'>Картой</option>
              <option value ='онлайн'>Онлайн</option>
              </select>
              Выберете способ доставки:
              <select>
              <option value ='самовывоз'>Самовывоз</option>
              <option value ='почтой'>Почтой</option>
              <option value ='на дом'>На дом</option>
              </select>
              <Button onClick={Ok}>Оплатить</Button>
              <div className='basket'>
                {basket.length === 0 ? (
                  <p>Корзина пуста</p>) : (
          <ul className='basket'>
            {basket.map(item => (
              <li key={item.id_product}>
                <h4>{item.name_product}</h4>
                <p>Количество: {item.quantity}</p>
                <p>Цена: {item.price * item.quantity} Руб</p>
                <Button onClick={() => removeFromBasket(item.id_product)}>
                  Удалить из корзины
                </Button>
              </li>
            ))}
          </ul>
        )}
        </div>
          </form>
      </aside>
</>
  );
}