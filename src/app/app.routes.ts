import { Routes } from '@angular/router';

import { ListComponent } from '@/products/pages/list/list.component';
import { ProductDetailComponent } from '@/products/pages/product-detail/product-detail.component';
import { AboutComponent } from '@/info/pages/about/about.component';
import { NotFoundComponent } from '@/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@/shared/componets/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        component: LayoutComponent,
        children:
        [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'about',
                component: AboutComponent
            },
            {
                path: 'product/:id',
                component: ProductDetailComponent
            },
        ]
    },    
    {
        path: '**',
        component: NotFoundComponent
    }
];
