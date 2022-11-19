import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GetBooksListResolver } from './core/resolvers/books/get-books-list.resolver.service';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./shared-modules/layouts/auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => import('./shared-modules/layouts/dashboard/dashboard.module').then(m => m.DashboardModule),
        resolve: {
            getBooksList: GetBooksListResolver,
        },
    },
    {
        path: '**',
        loadChildren: () => import('./shared-modules/layouts/dashboard/dashboard.module').then(m => m.DashboardModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
