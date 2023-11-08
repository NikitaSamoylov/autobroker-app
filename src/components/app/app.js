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
                {brand: 'ford focus', price: 675000, decrease: false, id: 1, onSale: true},
                {brand: 'chevrolet cruze', price: 630000, decrease: false, id: 2, onSale: false},
                {brand: 'cadillac escalade', price: 2630000, decrease: false, id: 3, onSale: true},
                {brand: 'toyota corolla', price: 730000, decrease: false, id: 4, onSale: false},
            ], 
            searchValue: '',
        };
        this.maxId = 5;
    }

    sales = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map((item) => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
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
        };
        this.setState(({data}) => ({
            data: [...data, newItem]
        }))
    }

    search = (data, searchValue) => {
        if (searchValue.length === 0) {
            return data;
        }

        return data.filter((item) => {
            return item.brand.startsWith(searchValue)
        });
    }

    onUpdateValue = (searchValue) => {
        this.setState({searchValue})
    }

    render() {
        const {data, searchValue} = this.state;
        const totalItems = data;
        const onSale = data.filter((item) => item.onSale === true);
        const visibleData = this.search(data, searchValue);
        return (
            <div className="app">
                <AppInfo totalItems={totalItems}
                        onSale={onSale}/>
                <div className="app-search">
                    <AppSearch searchValue={searchValue}
                                onUpdateValue={this.onUpdateValue} />
                    <AppFilter/>
                </div>
                <CarsList
                    data={visibleData}
                    deleteItem={this.deleteItem}
                    forSale={this.sales} />
                <CarAddForm addNewItem={this.addItem}/>
            </div>
        )
    }
}

export default App