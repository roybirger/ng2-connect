import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <site></site>
    `,
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent { }
