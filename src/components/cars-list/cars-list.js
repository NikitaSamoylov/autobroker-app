import styled from "styled-components";
import { StyledCarsItem } from "../cars-list-item/cars-list-item";
import CarsListItem from "../cars-list-item/cars-list-item";

const StyledCarsList = styled.ul`
    padding: 27px 18px 43px 18px;
    border: 1px solid rgba(222, 221, 221, 1);
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
    -moz-box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
    box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
    margin-bottom: 21px;
`

const CarsList = ({data, deleteItem, forSale, changePrice}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return <CarsListItem
                key={id}
                {...itemProps}
                deleteItem={() => deleteItem(id)}
                forSale={(e) => forSale(id, e.currentTarget.getAttribute('data-attr'))}
                changePrice={(e) => changePrice(id, e.target.value)}/>
    })

    return (
        <StyledCarsList>
            {elements.length !== 0
                ? elements
                : <StyledCarsItem>авто еще не выбраны</StyledCarsItem>}
        </StyledCarsList>
    )
}

export default CarsList;