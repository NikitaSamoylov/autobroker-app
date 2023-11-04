import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="app-filter-btns">
            <button className='app-filter-btns__item
                    app-filter-btns__item--active'
                    type='button'>
                        все авто    
            </button>
            <button className='app-filter-btns__item'
                    type='button'>
                        на продаже   
            </button>
            <button className='app-filter-btns__item'
                    type='button'>
                        дороже 2 млн    
            </button>
        </div>
    )
}

export default AppFilter;