import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {RequestComponent} from "./request/request.component";

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'request',
    component: RequestComponent
  },
  {path: '', redirectTo: 'cart', pathMatch: 'full'},
  {path: '**', redirectTo: 'cart'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
