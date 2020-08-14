import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { fetchSmurfs } from '../actions';

const Smurfs = props => {
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <section>
            <h1>It Smurfs a Village!</h1>
            {props.smurfs.map(smurfs => {return <h2> {smurfs.name} {smurfs.age} {smurfs.height} </h2>})}
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
};

export default connect(mapStateToProps, { fetchSmurfs })(Smurfs); 