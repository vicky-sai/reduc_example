import React from 'react';
import ShowGreeting from '../ShowGreeting/ShowGreeting.react';
import {birth, valentines} from '../store';

import {connect} from 'react-redux';


class Greeter extends React.Component {

    // birthday=()=> {
    //     store.dispatch(birth);
    // }
    // valentinesDay=()=> {
    //     store.dispatch(valentines);
    //     //this.setState({message:'Happy Valentines day dear..'});
    //     // console.log("valentinesDay called");
    // }

    render() {
        return (
            <div >
                <ShowGreeting action={this.props.bday} label="Birthday"></ShowGreeting>
                <ShowGreeting action={this.props.vday} label="Valentines day"></ShowGreeting>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        bday : () => {
            dispatch(birth);
        },
        vday : () => {
            dispatch(valentines);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Greeter)