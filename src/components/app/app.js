import './app.css';
import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import CarsList from '../cars-list/cars-list';
import CarAddForm from '../car-add-form/car-add-form';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="app-search">
                <AppSearch/>
                <AppFilter/>
            </div>
            <CarsList/>
            <CarAddForm/>
        </div>
    )
}

export default App