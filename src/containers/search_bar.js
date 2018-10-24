import React, {Component} from 'React';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../node_modules/redux';

import cityWeather from '../actions';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {city:''}

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.cityWeather(this.state.city);
        this.setState({city:''});
    }

    onInputChange(event){
        this.setState({city: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="form-row form-group">    
                <div className="col">
                    <input onChange={this.onInputChange} className="form-control form-control-lg text-center" placeholder="Search for any city in the world..." value={this.state.city} />
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({cityWeather: cityWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
