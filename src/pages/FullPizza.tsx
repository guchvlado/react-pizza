import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux.hook';

const FullPizza = () => {

    const [pizza, setPizza] = useState<{
        title: string;
        imageUrl: string;
        price: number;
    }>()

    const {pizzaId} = useParams()
    const navigate = useNavigate();
    

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get('https://626d16545267c14d5677d9c2.mockapi.io/items/' + pizzaId)
                setPizza(data)
            } catch(e) {
                alert('Ошибка при получении товара!')
                navigate('/')
            }
        }

        fetchPizza()
    }, [])


    if (!pizza) return (<h2>Loading</h2>)

    return (
        <div className="container">
            <img src={pizza.imageUrl} alt='pizza' />
            <h2>{pizza.title}</h2>
            <h4>{pizza.price} ₽</h4>
            <Link to="/">
            <button className="button button--outline button--add">
                <span>Назад</span>
            </button>
            </Link>
        </div>
    );
};

export default FullPizza;