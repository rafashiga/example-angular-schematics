import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const fakeObservable = of([1, 2, 3]);

@Component({
selector: 'app-example',
templateUrl: './example.component.html',
styleUrls: ['./example.component.scss'],
})

export class ExampleComponent implements OnInit, OnDestroy {

  private readonly destroy$ = new Subject();
  stream$ = fakeObservable;
  constructor() {}

  ngOnInit() {
    this.stream$.pipe(takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}