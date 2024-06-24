import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFanComponent } from './components/list-fan/list-fan.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
    { path: 'list', component: ListFanComponent },
    { path: 'create', component: CreateComponent },
    { path: 'update/:index', component: UpdateComponent },
    { path: 'detail/:index', component: DetailComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
