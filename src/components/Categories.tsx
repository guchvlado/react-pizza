import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux.hook';
import { setActiveCategory } from '../redux/filter/filterSlice';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories = React.memo(() => {

    const category = useAppSelector(state => state.filter.activeCategory)

    const dispatch = useAppDispatch();

    const onChangeCategory = (i: number) => {
        dispatch(setActiveCategory(i))
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((item, index) => 
                <li 
                key={index}
                className={index === category ? 'active' : ''}
                onClick={() => onChangeCategory(index)}
                >{item}</li>)}
            </ul>
      </div>
    );
});

export default Categories;