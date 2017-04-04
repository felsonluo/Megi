import { RouterModule } from "@angular/router";

import { GoComponent } from './go/go.component';
import { DashboardComponent } from './go/dashboard/dashboard.component';
import { ContactComponent } from './go/contact/contact.component';
import { ReportComponent } from './go/report/report.component';


class RouterHandler {

	public static MapRouther(paths: any[]): any[] {
		let array: any[] = [];

		for (let i = 0; i < paths.length; i++) {

			if (!paths[i].outlet) {
				for (let j = 0; j < 10; j++) {
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
	}
}


export const AppRoutes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'go'
	},
	{
		path: 'go',
		component: GoComponent,
		children: RouterHandler.MapRouther([{
			path: 'dashboard',
			component: DashboardComponent,
			outlet: 'dashboardOutlet'
		}, {
			path: 'contact',
			component: ContactComponent
		},
		{
			path: 'report',
			component: ReportComponent
		}])
	},
	{
		path: '**',
		redirectTo: '/go/(dashboardOutlet:dashboard)'
	}
];