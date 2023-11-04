import './cars-list-item.css';

const CarsListItem = () => {
    return (
        <li className="cars-list-item">
            <span className="cars-list-item__name">Ford Focus</span>
            <div className="cars-list-item-additional">
                <input type="text"
                        className="cars-list-item__price"
                        defaultValue={630000}/>
                <div className="cars-list-item__btns cars-btns">
                    <button className="cars-btns__item cars-btns__to-sale">
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