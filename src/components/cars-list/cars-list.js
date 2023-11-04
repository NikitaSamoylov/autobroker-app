import './cars-list.css';
import CarsListItem from "../cars-list-item/cars-list-item";

const CarsList = ({data}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return <CarsListItem key={id} {...itemProps} />
    })
    return (
        <ul className="cars-list">
            {elements}
        </ul>
    )
}

export default CarsList;