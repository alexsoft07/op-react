import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';


class LifeCycleExampple extends Component {
    constructor(props) {
        super(props)
        console.log('CONSTRUCTOR: Cuando se instancia el componete del cosntructor');
    }

    componentWillMount() {
        console.log('WILLMOUT: Antes del monrtaje del componente');
    }

    componentDidMount(){
        console.log('DIMOUNT: Justo al del mopntaje del componente, antes de renderizarlo');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentDidMount: Si va a recibir nuevos props');
    }

    shouldComponentUpdate(nextprops, nextState) {
        /**
         * Comprobar di el componete debe o no actualzarse
         */
        // return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Justo antes de renderizase');
    }

    componentDidUpdate(nextProps, nextState) {
        console.log('DidUpdate: Justo despues de renderizase');
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desapareser');
    }
}


LifeCycleExampple.propTypes = {

};


export default LifeCycleExampple;
