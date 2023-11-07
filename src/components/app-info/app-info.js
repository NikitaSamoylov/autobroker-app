import './app-info.css';

const AppInfo = ({totalItems, onSale}) => {
    return (
        <div className="app-info">
            <div className="app-info__content">
                <h1 className="app-title">учёт автомобилей в AutoBroker</h1>
                <h2 className="app-subtitle app-subtitle--all">всего автомобилей: {totalItems.length}</h2>
                <h2 className="app-subtitle">на продаже: {onSale.length}</h2>
            </div>
        </div>
    )
}

export default AppInfo;