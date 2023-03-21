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
        this.element.innerHTML = this.render();
    }

    render() {
        throw new Error("Todo componente DEVE sobrescrever render()");
    }
}