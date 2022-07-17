import React, { useEffect } from 'react';
import Categories from '../components/Categories';
import PizzaItem from '../components/PizzaItem';
import Sort from '../components/Sort';
import { useAppSelector, useAppDispatch } from '../hooks/redux.hook';
import { fetchPizza } from '../redux/pizza/fetchPizza';

const Home = () => {

    const dispatch = useAppDispatch();

    const {items, status} = useAppSelector(state => state.pizza);
    const {activeCategory, activeSearch, activeSortBy} = useAppSelector(state => state.filter)

    useEffect(() => {
      dispatch(fetchPizza({
        search: activeSearch,
        category: activeCategory,
        sortBy: activeSortBy.sortProperty.replace('-', ''),
        order: activeSortBy.sortProperty.includes('-') ? 'asc' : 'desc'
      }))
    }, [activeCategory, activeSearch, activeSortBy])

    return (
          <div className="container">
            <div className="content__top">
            <Categories/>
            <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {status === 'error' && <h2>Error</h2>}
                {status === 'loading' && <h2>Loading Pizzas</h2>}
                {status === 'success' && items.map(item => <PizzaItem key={item.id} {...item} />)}
                {/* pizza items */}
            </div>
          </div>
    );
};

export default Home;