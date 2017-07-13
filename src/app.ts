import { Component } from '@angular/core';

@Component({
    selector: 'body',
    providers: [],
    template: `
        <div>This is root template</div>
        <div class="router-container">
            <router-outlet style="display: none;"></router-outlet>
        </div>
    `,
    styleUrls: ['./styles/app.scss']
})
export class AppRoot {
}