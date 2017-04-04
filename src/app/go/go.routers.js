"use strict";
var dashboard_component_1 = require('./dashboard/dashboard.component');
var contact_component_1 = require('./contact/contact.component');
var report_component_1 = require('./report/report.component');
exports.GoRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent,
        children: [{
                path: 'contact',
                component: contact_component_1.ContactComponent,
                outlet: 'contact'
            },
            {
                path: 'report',
                component: report_component_1.ReportComponent,
                outlet: 'report'
            }]
    }
];
//# sourceMappingURL=go.routers.js.map