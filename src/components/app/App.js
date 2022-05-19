
import { useState } from 'react';

import { Container } from '@mui/material';
import { WithErrorBoundary } from 'react-error-boundary';



import Header from '../header/Header.js';
import Search from '../search/Search.js';
import ListCard from '../listСard/ListCard.js';
import Backed from '../backet/Backed.js';
import Snack from '../snack/Snack.js';
import ErrorFallback from '../errorFallback/ErrorFallback.js';

import json from '../../data/data.json';


const App = () => {
    let goods = json;
    //Изменяем состояние заказа
    const [order, setOrder] = useState([]);
    console.log(`setOrder ${setOrder}, order ${order} `);
    //Изменяем состояние поиска
    const [search, setSearch] = useState('');
    //Изменяет состояние товаров
    const [products, setProducts] = useState(goods);
    //Изменяет состояние открытия корзины на странице
    const [isCardOpen, SetCardOpen] = useState(false);
    // Изменяет состояние оповещения пользователя что товар в корзине
    const [isShackOpen, setSnackOpen] = useState(false);

    const [ isLoading, setLoading] = useState(true);
    const [ error, setError] = useState(false);


    //как только данные загрузятся, произойдет событие .then или .catch
    //в этот момент делаем setLoading(false)
    fetch('../../data/data.json')
    .then(response => response)
    .then(json1 => {
        console.log(json1);
        setLoading(false);
    })


    const GetPost = () => {
        setLoading(false)

    };

    //Функция поиска по названию товара
    const handleChange = (e) => {
        //Если пустая строка показывай все товары 
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }
        // Иначе отфильтруй все названия товаров, соответствующие введенному пользовтелем значениям 
        setSearch(e.target.value);
        setProducts(
            products.filter((good) =>
                good.blend_name.toLowerCase().includes(e.target.value.toLowerCase())
            ))
    };
    //Функция добавления товара в корзину
    const addToOrder = (goodsItem) => {
        let quantity = 1;

        const indexInOrder = order.findIndex(
            (item) => item.id === goodsItem.id
        );

        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;

            setOrder(order.map((item) => {
                    if (item.id !== goodsItem.id) return item;

                    return {
                        id: item.id,
                        name: item.name,
                        quantity,
                    };
                }),
            );
        } else {
            setOrder([
                    ...order,
                    {
                        id: goodsItem.id,
                        name: goodsItem.name,
                        quantity,
                    },
                ],
            );
        }

        //Изменяем состояние в момент добавления в корзину 
        setSnackOpen(true);    
    };
    // Функция удаления товаров из корзины
    const removeFromOrder = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };
    
    return (
        <div>
            
            <Header
            //Когда кликнули по корзине передается true
                handleCard={()=> {SetCardOpen(true)}}
                orderLength={order.length}
                    >
            </Header>
            <Container 
                sx={{mt:2}}>
                <Search
                    //Пустая строка
                    value={search}
                    //В случае состояния события onChange будет обновляться каждое изменение символа
                    onChange={handleChange}>
                </Search>   
                <ListCard 
                    //Сотояние карточек с товарами обновляется в зависимости от поведения пользователя
                    goods={products} 
                    setOrder={addToOrder}
                    isLoading={isLoading}>
                </ListCard>
                
            </Container>
            <Backed 
                //Состояние открытие или закрытие корзины
                cardOpen={isCardOpen} 
                // Функция на закрытие карзины меняет состояние false
                cardClose={()=> SetCardOpen(false)}
                removeFromOrder={removeFromOrder}
                order={order}>
            </Backed>
            <Snack 
                //Текущее состояние
                isCardOpen={isShackOpen}
                // Закрытие меняем состояние 
                handleClose={() => setSnackOpen(false)}
                />
        </div>
    )
}
export default App;