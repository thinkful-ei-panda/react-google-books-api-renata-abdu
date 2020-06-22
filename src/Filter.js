import React from 'react';

class Filter extends React.Component {

    handleSelectType = (event) => {
        this.props.type(event.target.value)
    }

    handleSelectFilter = (event) => {
        this.props.filter(event.target.value)
    }
    
    render() {
        return (
            <div className="filter">


            </div>
        )
    }
}

export default Filter;