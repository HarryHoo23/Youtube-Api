import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };  

    render() {
        return (
            <div className="search-bar ui segment" style={{marginTop:'2em'}}>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        onChange={this.onInputChange} 
                        value={this.state.term} 
                        />
                    </div>
                </form>
                <div>{ this.state.term }</div>
            </div>
        )
    }
}

export default SearchBar;