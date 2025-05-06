import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';

export const routes: Routes = [
    {path: "products", component: ProductsComponent},
    {path: "products/:id", component: ProductDetailsComponent}
];
