import React from 'react';
import ReactDOM from 'react-dom';

export class ViewComponent {

    constructor(selector) {
        this.element = document.querySelector(selector);
        this.state = {};
        this.paint();
    }

    update(state) {
        this.state = {
            ...this.state,
            ...state
        };
        this.paint();
    }

    paint() {
        const reactElement = React.createElement(
            'div',
            { id: 'view-component', className: 'any-div' },
            this.render()
        );
        ReactDOM.render(reactElement, this.element);
    }

    render() {
        throw new Error("Todo componente DEVE sobrescrever render()");
    }
}