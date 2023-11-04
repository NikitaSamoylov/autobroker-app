import './cars-list-item.css';

const CarsListItem = ({brand, price, decrease}) => {
    return (
        <li className="cars-list-item">
            <span className={decrease
                            ? "cars-list-item__name cars-list-item--to-sale"
                            : "cars-list-item__name"}>
                {brand}
            </span>
            <div className="cars-list-item-additional">
                <input type="text"
                        className="cars-list-item__price"
                        defaultValue={price + ' ₽'}/>
                <div className="cars-list-item__btns cars-btns">
                    <button className="cars-btns__item cars-btns__to-sale">
                        <img src={require('../../img/sale.png')} alt="delete" />
                    </button>
                    <button className="cars-btns__item cars-btns__for-sale">
                        <img src={require('../../img/delete-icon.png')} alt="delete" />
                    </button>
                    <button className="cars-btns__item cars-btns__delete">
                        <img src={require('../../img/star-icon.png')} alt="for-sale" />
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CarsListItem;