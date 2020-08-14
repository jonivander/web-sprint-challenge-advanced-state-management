import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 
import { fetchSmurfs } from '../actions';

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
};
const Smurfs = props => {
    console.log(props); 
    useEffect(() => {
        props.fetchSmurfs();
    }, []);

    return (
        <section>
            <h2>It Smurfs A Village!</h2>
            {props.smurfs && props.smurfs.length > 0 ? props.smurfs.map(smurfs => {return <h4> {smurfs.name} {smurfs.age} {smurfs.height} </h4>}) : null}
        </section>
    );
};



export default connect(mapStateToProps, { fetchSmurfs })(Smurfs); 