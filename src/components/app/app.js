import './app.css';
import AppInfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';

function App() {
    return (
        <div className="app">
            <AppInfo/>
            <div className="app-search">
                <AppSearch/>
            </div>
        </div>
    )
}

export default App