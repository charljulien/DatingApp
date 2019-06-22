import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { ValueComponent } from './value.component';
import { ValueService } from './shared/value.service';
import { Value } from './shared/value.model';

describe('a value component', () => {
	let component: ValueComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpModule],
			providers: [
				{ provide: ValueService, useClass: MockValueService },
				ValueComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([ValueComponent], (ValueComponent) => {
		component = ValueComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});

// Mock of the original value service
class MockValueService extends ValueService {
	getList(): Observable<any> {
		return Observable.from([ { id: 1, name: 'One'}, { id: 2, name: 'Two'} ]);
	}
}
