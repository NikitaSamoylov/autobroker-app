import { Component } from 'react';
import './cars-list-item.css';

class CarsListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decrease: false,
            onSale: false,
        }
    }

    onDecrease = () => {
        this.setState(({decrease}) => ({
            decrease: !decrease,
        }))
    }

    onSale = () => {
        this.setState(({onSale}) => ({
            onSale: !onSale,
        }))
    }

    render() {
        const {brand, price, deleteItem} = this.props;
        const {decrease, onSale} = this.state;
        return (
            <li className="cars-list-item">
                <span className={decrease
                                ? "cars-list-item__name cars-list-item--to-sale"
                                : "cars-list-item__name"}
                                onClick={this.onSale}>
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
                                            onClick={this.onDecrease}>
                            <img src={require('../../img/sale.png')} alt="delete" />
                        </button>
                        <button className="cars-btns__item cars-btns__delete" onClick={deleteItem}>
                            <img src={require('../../img/delete-icon.png')} alt="delete" />
                        </button>
                        <button className={onSale
                                            ? "cars-btns__item cars-btns__item--active"
                                            : "cars-btns__item"}
                                            onClick={this.onSale}>
                            <img src={require('../../img/star-icon.png')} alt="for-sale" />
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default CarsListItem;