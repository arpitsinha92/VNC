import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



import { CountComponent } from './count.component';

const routes: Routes = [
    { path: "", component:CountComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class CountRoutingModule { }