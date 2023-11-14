import { Component } from 'react';
import styled from 'styled-components';

const StyledBtnInit = styled.button`
    font-size: 16px;
    width: 135px;
    height: 37px;
    border: 1px solid #d4d1d1;
    border-radius: 5px;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    transition: .3s;
    &:not(:last-child) {
        margin-right: 15px;
    }
    &:hover {
        background-color: rgb(10, 169, 190);
        border-color: rgb(10, 169, 190);
        color: #fff;
    }
    &:last-child {
        @media screen and (max-width: 471px) {
            margin-top: 15px;
        }
        
    }
    @media screen and (max-width: 336px) {
        &:not(:last-child) {
            margin-right: 10px;
        }
        &:nth-child(2) {
            margin-right: 0;
        }
    }
`
const StyledBtnActive = styled(StyledBtnInit)`
    background-color: #fff;
    border-color: #fff;
    color: black;
    cursor: default;
    &:hover {
        background-color: #fff;
        border-color: #fff;
        color: black;
    }
`

class AppFilter extends Component {

    updateFilter = (e) => {
        const filter = e.currentTarget.getAttribute('data-attr');
        this.props.onUpdateFilter(filter)
    }

    render() {
        const btnsData = [
            {name: 'allItems', label: 'все авто'},
            {name: 'onSale', label: 'на продаже'},
            {name: 'decrease', label: 'снизить цену'},
        ];
        const btns = btnsData.map(({name, label}) => {
            const StyleBtn = this.props.filter === name ? StyledBtnActive : StyledBtnInit
            return (
                <StyleBtn
                        type='button'
                        key={name}
                        data-attr={name}
                        onClick={this.updateFilter}>
                   {label}   
                </StyleBtn>
            )
        })

        return (
            <div>
                {btns}
            </div>
        )
    }
}

export default AppFilter;