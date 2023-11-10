import { Component } from 'react';
import './car-add-form.css';

class CarAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: '',
            price: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value.replace('.', '')
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewItem(this.state.brand, this.state.price);
        this.setState(({brand, price}) => ({
            brand: '',
            price: ''
        }))
    }

    render() {
        const {brand, price} = this.state;
        return (
            <form className="car-add-form" onSubmit={this.onSubmit}>
                <h2 className='car-add-form__title'>добавьте автомобиль</h2>
                <div className="car-add-form__main">
                    <input type="text"
                            className="car-add-form__input
                                        car-add-form__input--model"
                            placeholder="марка, модель"
                            name='brand'
                            value={brand}
                            required
                            onChange={this.onValueChange} />
                    <input type="number"
                            className="car-add-form__input
                                        car-add-form__input--price"
                            placeholder="цена"
                            name='price'
                            value={price}
                            required
                            onChange={this.onValueChange} />
                    <button className="car-add-form__btn"
                            type="submit">
                                добавить
                    </button>
                </div>
            </form>
        )
    }
}

export default CarAddForm;