"use strict";
var go_component_1 = require('./go/go.component');
var dashboard_component_1 = require('./go/dashboard/dashboard.component');
var contact_component_1 = require('./go/contact/contact.component');
var report_component_1 = require('./go/report/report.component');
var RouterHandler = (function () {
    function RouterHandler() {
    }
    RouterHandler.MapRouther = function (paths) {
        var array = [];
        for (var i = 0; i < paths.length; i++) {
            if (!paths[i].outlet) {
                for (var j = 0; j < 10; j++) {
                    array.push({
                        path: paths[i].path,
                        component: paths[i].component,
                        outlet: 'mgRouter' + j
                    });
                }
            }
            else {
                array.push(paths[i]);
            }
        }
        return array;
    };
    return RouterHandler;
}());
exports.AppRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'go'
    },
    {
        path: 'go',
        component: go_component_1.GoComponent,
        children: RouterHandler.MapRouther([{
                path: 'dashboard',
                component: dashboard_component_1.DashboardComponent,
                outlet: 'dashboardOutlet'
            }, {
                path: 'contact',
                component: contact_component_1.ContactComponent
            },
            {
                path: 'report',
                component: report_component_1.ReportComponent
            }])
    },
    {
        path: '**',
        redirectTo: '/go/(dashboardOutlet:dashboard)'
    }
];
//# sourceMappingURL=app.routes.js.map