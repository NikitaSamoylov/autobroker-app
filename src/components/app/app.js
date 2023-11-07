import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import CarsList from '../cars-list/cars-list';
import CarAddForm from '../car-add-form/car-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {brand: 'ford focus', price: 675000, decrease: false, id: 1, onSale: false},
                {brand: 'chevrolet cruze', price: 630000, decrease: false, id: 2, onSale: false},
                {brand: 'cadillac escalade', price: 2630000, decrease: false, id: 3, onSale: false},
                {brand: 'toyota corolla', price: 730000, decrease: false, id: 4, onSale: false},
            ]
        };
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((item) => item.id !== id)
            }
        })
    }

    addItem = (brand, price) => {
        const newItem = {
            brand,
            price,
            decrease: false,
            id: this.maxId++,
            onSale: false,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
                <div className="app-search">
                    <AppSearch/>
                    <AppFilter/>
                </div>
                <CarsList data={this.state.data}
                            deleteItem={this.deleteItem}/>
                <CarAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App