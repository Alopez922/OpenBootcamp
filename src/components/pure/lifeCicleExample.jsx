/**
 * Ejemplo de componente de tipo clase que dispone de los
 * metodos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCicleExample extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: Cuando se instancia el componente')

    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DIDMOUNT: justo al del montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
console.log('Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /***
         * Controlar si el componente debe o no actualizarse
         */
        // return true/false
    }

    componentWillUpdate(nextProps, nextState) {
console.log('WillUpdate: justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdated: Justo despues de actualizarse')
    }

    componentWillUnmount() {
        console.log('WillUnmount: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCicleExample.propTypes = {

};

export default lifeCicleExample;