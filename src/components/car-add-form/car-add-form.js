import { Component } from 'react';
import styled from 'styled-components';

const StyledCarForm = styled.form`
    padding: 24px 18px 39px 18px;
    border-radius: 10px;
    background-color: rgba(8, 147, 166, 1);
    -webkit-box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
    -moz-box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
    box-shadow: 0px 0px 20px 0px rgba(34, 60, 80, 0.22);
`
const StyledFormTitle = styled.h2`
    font-size: 24px;
    color: #fff;
    padding-left: 13px;
    margin-top: 0;
`
const StyledFormWrapper = styled.div`
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 5px;
    border: none;
    @media screen and (max-width: 451px) {
        flex-direction: column;
    }
`
const StyledFormBtn = styled.button`
    font-size: 16px;
    padding: 9px 30px;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: .3s;
    &:hover {
        background-color: rgb(10, 169, 190);
        border-color: rgb(10, 169, 190);
        color: #fff;
    }
    @media screen and (max-width: 581px) {
        margin-top: 15px;
    }
    @media screen and (max-width: 451px) {
        margin-top: 0;
        align-self: flex-start;
    }
`
const StyledFormInput = styled.input`
    border-radius: 5px;
    border: none;
    outline: none;
    margin-right: 13px;
    flex-grow: 1;
    padding: 10px 13px 10px 13px;
    &::placeholder {
        font-size: 16px;
        color: rgb(196, 192, 192);
    }
    @media screen and (max-width: 451px) {
        margin-right: 0;
        margin-bottom: 15px;
    }
`

class CarAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            price: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.replace('.', '')
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewItem(this.state.brand, this.state.price);
        this.setState(({brand, price}) => ({
            brand: '',
            price: ''
        }))
    }

    render() {
        const {brand, price} = this.state;
        return (
            <StyledCarForm onSubmit={this.onSubmit}>
                <StyledFormTitle>добавьте автомобиль</StyledFormTitle>
                <StyledFormWrapper>
                    <StyledFormInput type="text"
                            placeholder="марка, модель"
                            name='brand'
                            value={brand}
                            required
                            onChange={this.onValueChange} />
                    <StyledFormInput type="number"
                            placeholder="цена"
                            name='price'
                            value={price}
                            required
                            onChange={this.onValueChange} />
                    <StyledFormBtn type="submit">
                        добавить
                    </StyledFormBtn>
                </StyledFormWrapper>
            </StyledCarForm>
        )
    }
}

export default CarAddForm;