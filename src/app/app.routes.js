"use strict";
var go_component_1 = require('./go/go.component');
var dashboard_component_1 = require('./go/dashboard/dashboard.component');
var contact_component_1 = require('./go/contact/contact.component');
var report_component_1 = require('./go/report/report.component');
exports.AppRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'go'
    },
    {
        path: 'go',
        component: go_component_1.GoComponent,
        children: [{
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent,
                outlet: 'dashboardOutlet'
            }, {
                path: 'contact',
                component: contact_component_1.ContactComponent,
                outlet: 'mgRouter0'
            },
            {
                path: 'contact',
                component: contact_component_1.ContactComponent,
                outlet: 'mgRouter1'
            },
            {
                path: 'report',
                component: report_component_1.ReportComponent,
                outlet: 'mgRouter1'
            },
            {
                path: 'report',
                component: report_component_1.ReportComponent,
                outlet: 'mgRouter0'
            }]
    }
];
//# sourceMappingURL=app.routes.js.map