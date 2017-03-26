import {RouterModule} from "@angular/router";
import { GoComponent } from './go.component';

export const GoRoutes = [
  	{
		path:'',
		component:GoComponent,
	    children: [
	    	{ path: '', redirectTo:'posttable/page/1',pathMatch:'full'},
	    	{ path: 'write', component: GoComponent },
			{ path:'**', redirectTo:'write' }
	    ]
	}
];