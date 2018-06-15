import { Routes, RouterModule } from "@angular/router";
import { DatatableComponent } from './datatable/datatable.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/table', pathMatch: 'full' },
    { path: 'table', component: DatatableComponent },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
