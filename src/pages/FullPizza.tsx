import React from 'react';
import { Link } from 'react-router-dom';

const FullPizza = () => {
    return (
        <div className="container">
            <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg' alt='pizza' />
            <h2>Title</h2>
            <h4>500 ₽</h4>
            <Link to="/">
            <button className="button button--outline button--add">
                <span>Назад</span>
            </button>
            </Link>
        </div>
    );
};

export default FullPizza;