import { RouterModule } from "@angular/router";

import { GoComponent } from './go/go.component';
import { DashboardComponent } from './go/dashboard/dashboard.component';
import { ContactComponent } from './go/contact/contact.component';
import { ReportComponent } from './go/report/report.component';

export const AppRoutes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'go'
	},
	{
		path: 'go',
		component: GoComponent,
		children: [{
			path: 'dashboard',
			component: DashboardComponent,
			outlet: 'dashboardOutlet'
		}, {
			path: 'contact',
			component: ContactComponent,
			outlet: 'mgRouter0'
		},
		 {
			path: 'contact',
			component: ContactComponent,
			outlet: 'mgRouter1'
		},
		{
			path: 'report',
			component: ReportComponent,
			outlet: 'mgRouter1'
		},
		{
			path: 'report',
			component: ReportComponent,
			outlet: 'mgRouter0'
		}]
	}
];