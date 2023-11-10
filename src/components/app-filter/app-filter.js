import { Component } from 'react';
import './app-filter.css';

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
            return (
                <button className={this.props.filter === name  
                                    ? 'app-filter-btns__item app-filter-btns__item--active'
                                    :'app-filter-btns__item'}
                        type='button'
                        key={name}
                        data-attr={name}
                        onClick={this.updateFilter}>
                   {label}   
                 </button>
            )
        })

        return (
            <div className="app-filter-btns">
                {btns}
                {/* <button className='app-filter-btns__item
                        app-filter-btns__item--active'
                        type='button'
                        data-attr="allItems"
                        onClick={this.updateFilter}>
                            все авто    
                </button>
                <button className='app-filter-btns__item'
                        type='button'
                        data-attr="onSale"
                        onClick={this.updateFilter}>
                            на продаже    
                </button>
                <button className='app-filter-btns__item'
                        type='button'
                        data-attr="decrease"
                        onClick={this.updateFilter}>
                            снизить цену   
                </button> */}
            </div>
        )
    }
}

export default AppFilter;