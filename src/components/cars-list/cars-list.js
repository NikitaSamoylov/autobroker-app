import './cars-list.css';
import CarsListItem from "../cars-list-item/cars-list-item";

const CarsList = () => {
    return (
        <div className="cars-list">
                <CarsListItem/>
                <CarsListItem/>
                <CarsListItem/>
                <CarsListItem/>
        </div>
    )
}

export default CarsList;