import { Component } from 'react';
import styled from 'styled-components';

export const StyledCarsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgrey;
    padding-bottom: 3px;
    padding-left: 13px;
    padding-right: 13px;
    transition: .5s;
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`
const StyledItemNameInit = styled.span`
    cursor: pointer;
`
const StyledItemNameSale = styled(StyledItemNameInit)`
    color: red;
`
const StyledItemInfo = styled.div`
    display: flex;
    align-items: first baseline;
    @media screen and (max-width: 396px) {
        flex-direction: column;
        align-items: flex-end;
    }
`
const StyledItemPrice = styled.input`
    display: block;
    width: 100px;
    border: none;
    outline: none;
    text-align: right;
    margin-right: 50px;
    @media screen and (max-width: 437px) {
        margin-right: 8px;
    }
    @media screen and (max-width: 396px) {
        margin-bottom: 10px;
    }
`
const StyledItemBtnInit = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.2;
    transition: .3s;
    &:not(:last-child) {
        @media screen and (max-width: 396px) {
            margin-right: 10px;
        }
    }
    img {
        display: block;
    }
`
const StyledItemBtnActive = styled(StyledItemBtnInit)`
    opacity: 1;
    transition: .3s;
`

class CarsListItem extends Component {

    render() {
        const {
            brand,
            price,
            decrease,
            onSale,
            deleteItem,
            forSale,
            changePrice,
        } = this.props;

        const StyledItemName = decrease
                                    ? StyledItemNameSale
                                    : StyledItemNameInit
        
        const StyledBtnOnSale = decrease
                                    ? StyledItemBtnActive
                                    : StyledItemBtnInit

        const StyledBtnForSale = onSale
                                    ? StyledItemBtnActive
                                    : StyledItemBtnInit
        
        return (
            <StyledCarsItem>
                <StyledItemName onClick={forSale}
                                data-attr="decrease">
                    {brand}
                </StyledItemName>
                <StyledItemInfo>
                    <StyledItemPrice type="text"
                        defaultValue={price + ' ₽'}
                        onChange={changePrice}/>
                    <div>
                        <StyledBtnOnSale onClick={forSale}
                                        data-attr="decrease">
                            <img src={require('../../img/sale.png')} alt="delete" />
                        </StyledBtnOnSale>
                        <StyledItemBtnInit onClick={deleteItem}>
                            <img src={require('../../img/delete-icon.png')} alt="delete" />
                        </StyledItemBtnInit>
                        <StyledBtnForSale onClick={forSale}
                                        data-attr="onSale">
                            <img src={require('../../img/star-icon.png')} alt="for-sale" />
                        </StyledBtnForSale>
                    </div>
                </StyledItemInfo>
            </StyledCarsItem>
        )
    }
}

export default CarsListItem;