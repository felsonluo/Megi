"use strict";
var go_component_1 = require('./go.component');
exports.GoRoutes = [
    {
        path: '',
        component: go_component_1.GoComponent,
        children: [
            { path: '', redirectTo: 'posttable/page/1', pathMatch: 'full' },
            { path: 'write', component: go_component_1.GoComponent },
            { path: '**', redirectTo: 'write' }
        ]
    }
];
//# sourceMappingURL=go.routers.js.map