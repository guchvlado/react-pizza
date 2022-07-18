import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { addCartItem } from '../redux/cart/cartSlice';
import { IPizza } from '../types/IPizza';

const typeNames = ['тонкое', 'традиционное'];

const PizzaItem: React.FC<IPizza> = ({ id, title, imageUrl, types, sizes, price }) => {


    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);

    const dispatch = useAppDispatch()
    const cartItem = useAppSelector(state => state.cart.items.find(item => item.id === `${id}:${activeType}:${activeSize}`))

    const onAddToCart = () => {
        dispatch(addCartItem({
            id: `${id}:${activeType}:${activeSize}`,
            title,
            imageUrl,
            price,
            size: sizes[activeSize],
            type: typeNames[activeType],
            quantity: 1
        }))
    }

    return (
        <div className="pizza-block">
            <Link to={`/pizza/${id}`}>
                <img
                    className="pizza-block__image"
                    src={imageUrl}
                    alt="Pizza"
                />
            </Link>
            <h4 className="pizza-block__title">{title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map(id =>
                        <li
                            key={id}
                            className={id === activeType ? 'active' : ''}
                            onClick={() => setActiveType(id)}
                        >
                            {typeNames[id]}
                        </li>
                    )}
                </ul>
                <ul>
                    {sizes.map(item =>
                        <li
                            key={item}
                            className={item === activeSize ? 'active' : ''}
                            onClick={() => setActiveSize(item)}>
                        {item} см.</li>
                    )}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {price} ₽</div>
                <div onClick={onAddToCart} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {cartItem && <i>{cartItem.quantity}</i>}
                </div>
            </div>
        </div>
    );
};

export default PizzaItem;