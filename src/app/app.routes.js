"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var user_component_1 = require('./user/user.component');
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'user',
        component: user_component_1.UserComponent
    },
    {
        path: '**',
        component: user_component_1.UserComponent
    }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map