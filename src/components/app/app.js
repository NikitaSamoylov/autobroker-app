import './app.css';
import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import CarsList from '../cars-list/cars-list';
import CarAddForm from '../car-add-form/car-add-form';

function App() {

    const data = [
        {brand: 'ford focus', price: 675000, decrease: true, id: 1},
        {brand: 'chevrolet cruze', price: 630000, decrease: false, id: 2},
        {brand: 'cadillac escalade', price: 2630000, decrease: true, id: 3},
        {brand: 'toyota corolla', price: 730000, decrease: false, id: 4},
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