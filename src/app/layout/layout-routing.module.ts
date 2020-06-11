import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
            },
            /* { path: 'charts', loadChildren: () => import('./charts/charts.module').then((m) => m.ChartsModule) }, */
            { path: 'tables', loadChildren: () => import('./tables/tables.module').then((m) => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('./form/form.module').then((m) => m.FormModule) },
            {
                path: 'bs-element',
                loadChildren: () => import('./bs-element/bs-element.module').then((m) => m.BsElementModule)
            },
            { path: 'grid', loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule) },
            {
                path: 'components',
                loadChildren: () => import('./bs-component/bs-component.module').then((m) => m.BsComponentModule)
            },
            {
                path: 'orders',
                loadChildren: () => import('./order/order.module').then((m) => m.OrderModule)
            },{
                path: 'orders/:orderId',
                loadChildren: () => import('./order-detail/order-detail.module').then((m) => m.OrderDetailModule)
            },
            {
                path: 'categories',
                loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule)
            },
            {
                path: 'categories/:categoryId',
                loadChildren: () => import('./category-detail/category-detail.module').then((m) => m.CategoryDetailModule)
            },
            {
                path: 'products',
                loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)
            },
            {
                path: 'products/:productId',
                loadChildren: () => import('./product-detail/product-detail.module').then((m) => m.ProductDetailModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
            },
            {
                path: 'blank-page',
                loadChildren: () => import('./blank-page/blank-page.module').then((m) => m.BlankPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
