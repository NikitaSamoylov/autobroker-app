import './app.css';
import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import CarsList from '../cars-list/cars-list';
import CarAddForm from '../car-add-form/car-add-form';

function App() {

    const data = [
        {brand: 'ford focus', price: 675000, decrease: false, id: 1, onSale: false},
        {brand: 'chevrolet cruze', price: 630000, decrease: false, id: 2, onSale: false},
        {brand: 'cadillac escalade', price: 2630000, decrease: false, id: 3, onSale: false},
        {brand: 'toyota corolla', price: 730000, decrease: false, id: 4, onSale: false},
    ];

    return (
        <div className="app">
            <AppInfo/>
            <div className="app-search">
                <AppSearch/>
                <AppFilter/>
            </div>
            <CarsList data={data} />
            <CarAddForm/>
        </div>
    )
}

export default App