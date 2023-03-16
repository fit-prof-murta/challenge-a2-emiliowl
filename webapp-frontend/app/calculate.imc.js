import { debounce } from './debounce.js';

import { CalculateImcService } from './services/calculate.imc.service.js';
import { ImcDataViewComponent } from './views/imc.data.view.component.js';

export function calculate(view) {
    return function () {
        let heightEl = document.querySelector('#altura');
        let weightEl = document.querySelector('#peso');
        let height = 0;
        let weight = 0;

        if (heightEl) height = heightEl.value;
        if (weightEl) weight = weightEl.value;

        const svc = new CalculateImcService();
        
        svc.calculateImc(height, weight, person => view.update({ person }));
    }
}

export function initialize() {
    const button = document.querySelector("button.action");
    button.addEventListener("click", debounce(calculate(new ImcDataViewComponent())));
}