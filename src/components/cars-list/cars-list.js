import './cars-list.css';
import CarsListItem from "../cars-list-item/cars-list-item";

const CarsList = ({data, deleteItem, forSale}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return <CarsListItem
                key={id}
                {...itemProps}
                deleteItem={() => deleteItem(id)}
                forSale={(e) => forSale(id, e.currentTarget.getAttribute('data-attr'))}/>
    })

    return (
        <ul className="cars-list">
            {elements.length !== 0
                ? elements
                : <li className="cars-list-item">авто еще не выбраны</li>}
        </ul>
    )
}

export default CarsList;