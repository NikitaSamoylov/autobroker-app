import { Component } from 'react';
import './cars-list-item.css';

class CarsListItem extends Component {
    render() {
        const {
            brand,
            price,
            decrease,
            onSale,
            deleteItem,
            forSale,
        } = this.props;

        return (
            <li className="cars-list-item">
                <span className={decrease
                                ? "cars-list-item__name cars-list-item--to-sale"
                                : "cars-list-item__name"}
                                onClick={forSale}
                                data-attr="decrease">
                    {brand}
                </span>
                <div className="cars-list-item-additional">
                    <input type="text"
                        className="cars-list-item__price"
                        defaultValue={price + ' ₽'}/>
                    <div className="cars-list-item__btns cars-btns">
                        <button className={decrease 
                                            ? "cars-btns__item cars-btns__item--active"
                                            : "cars-btns__item"}
                                            onClick={forSale}
                                            data-attr="decrease">
                            <img src={require('../../img/sale.png')} alt="delete" />
                        </button>
                        <button className="cars-btns__item cars-btns__delete" onClick={deleteItem}>
                            <img src={require('../../img/delete-icon.png')} alt="delete" />
                        </button>
                        <button className={onSale
                                            ? "cars-btns__item cars-btns__item--active"
                                            : "cars-btns__item"}
                                            onClick={forSale}
                                            data-attr="onSale">
                            <img src={require('../../img/star-icon.png')} alt="for-sale" />
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default CarsListItem;