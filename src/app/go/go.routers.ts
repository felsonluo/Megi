import { RouterModule } from "@angular/router";

import { GoComponent } from './go.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from './report/report.component';

export const GoRoutes = [
	{
		path: 'dashboard',
		component: DashboardComponent,
		children: [{
			path: 'contact',
			component: ContactComponent,
			outlet: 'contact'
		},
		{
			path: 'report',
			component: ReportComponent,
			outlet:'report'
		}]
	}
];