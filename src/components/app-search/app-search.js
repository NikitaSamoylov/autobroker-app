import { Component } from 'react';
import './app-search.css';

class AppSearch extends Component {
    constructor(props) {
        super(props);
    }

    onUpdateValue = (e) => {
        this.props.onUpdateValue(e.target.value)
    }

    render() {
        return (
            <input type="text"
                    class="app-search__input"
                    placeholder="поиск авто ..."
                    aria-label="поиск авто"
                    value={this.props.searchValue}
                    onChange={this.onUpdateValue}/>
        )
    }
}

export default AppSearch;