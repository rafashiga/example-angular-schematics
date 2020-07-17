import { Rule } from '@angular-devkit/schematics';

import { buildComponent } from '@angular/cdk/schematics';

export function myComponentSchematics(options: any): Rule {
	return buildComponent({ ...options });
}
