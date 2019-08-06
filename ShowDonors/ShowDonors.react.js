import React from 'react';
import {connect} from 'react-redux'
import {myActionCreator} from '../donorReducer';
import thunk from 'redux-thunk';
import { getThunkList } from '../donorReducer';

const ShowDonors = (props) => {
            if(!props.isLoaded) {
                return (<div>
                    <h2>Loading</h2>
                    <button onClick={props.get}>Get data</button>
                </div>
                )
            } else {
                return (
                    props.list.map(eachValue => {
                    return (
                        <div key={eachValue.id}>
                            <p>{eachValue.donorName}--{eachValue.bloodGroup}--{eachValue.lastDonated}--
                            <button type="button" className="btn btn-primary">Edit</button><button type="button" className="btn btn-danger">Delete</button></p>
                        </div>
                        )
                }))
            }

}

const mapStateToProps = (state) => {
    console.log(state.isLoaded);
    return {
        list: state.payload,
        isLoaded: state.isLoaded
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        get:() => {
            dispatch(getThunkList())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDonors);