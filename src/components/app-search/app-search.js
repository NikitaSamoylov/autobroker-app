import { Component } from 'react';
import styled from 'styled-components';

const StyledAppInput = styled.input`
    display: block;
    width: 100%;
    padding: 10px 13px 10px 13px;
    border-radius: 5px;
    border: none;
    margin-bottom: 18px;
    outline: none;
    &::placeholder {
        font-size: 16px;
        color: rgb(196, 192, 192);
    }
`

class AppSearch extends Component {

    onUpdateValue = (e) => {
        this.props.onUpdateValue(e.target.value)
    }

    render() {
        return (
            <StyledAppInput type="text"
                    placeholder="поиск авто ..."
                    aria-label="поиск авто"
                    value={this.props.searchValue}
                    onChange={this.onUpdateValue}/>
        )
    }
}

export default AppSearch;