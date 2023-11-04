import './car-add-form.css';

const CarAddForm = () => {
    return (
        <form className="car-add-form">
            <h2 className='car-add-form__title'>добавьте автомобиль</h2>
            <div className="car-add-form__main">
                <input type="text"
                        className="car-add-form__input
                                    car-add-form__input--model"
                        placeholder="марка" />
                <input type="text"
                        className="car-add-form__input
                                    car-add-form__input--price"
                        placeholder="цена" />
                <button className="car-add-form__btn"
                        type="submit">
                            добавить
                </button>
            </div>
        </form>
    )
}

export default CarAddForm;