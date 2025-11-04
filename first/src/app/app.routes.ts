import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', title: 'Вход в систему', loadComponent: () => import('./components/login/login').then(m => m.Login) },
    { path: 'registration', title: 'Регистрация', loadComponent: () => import('./components/registration/registration').then(m => m.Registration) },
    { path: 'home-page', title: 'Главная', loadComponent: () => import('./components/home/home-page/home-page').then(m => m.HomePage) },
    { 
        path: 'admin-panel', title: 'Панель администратора', loadComponent: () => import('./components/home/admin-panel/admin-panel').then(m => m.AdminPanel),
        children: [
            { path: 'orders', title: 'Заказы', loadComponent: () => import('./components/home/admin-panel/orders/orders').then(m => m.Orders) },
            { path: 'logout', title: 'Выход', loadComponent: () => import('./components/home/admin-panel/logout/logout').then(m => m.Logout) },
            { path: 'payments', title: 'Платежи', loadComponent: () => import('./components/home/admin-panel/payments/payments').then(m => m.Payments) },
            { path: 'new-orders', title: 'Новые заказы', loadComponent: () => import('./components/home/admin-panel/new-orders/new-orders').then(m => m.NewOrders) },
            { path: 'directories', title: 'Справочники', loadComponent: () => import('./components/home/admin-panel/directories/directories').then(m => m.Directories) },
        ]
    },
];
