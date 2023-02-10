import { Component, OnDestroy } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject, Observable, share, takeUntil, shareReplay, delay } from 'rxjs';

import { MeasureValuesService } from './measure-values.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-multicast',
  templateUrl: './multicast.component.html',
})
export class MulticastComponent implements OnDestroy {

  listeners: string[] = [];
  logStream$ = new ReplaySubject<string>();
  private destroy$ = new Subject<void>();

  measureValues$: Subject<number>;

  constructor(private mvs: MeasureValuesService, private es: ExerciseService) {
    /**************!!**************/

    // 1. unchanged (cold)
    // this.measureValues$ = this.mvs.getValues();

    // 2. shares observable (multicast) --> Subject
    // this.measureValues$ = this.mvs.getValues().pipe(share())

    // 3. mit Buffer --> ReplaySubject
    // this.measureValues$ = this.mvs.getValues().pipe(shareReplay(1))

    // 4. mit BehaviourSubject (Startwert)

    this.measureValues$ = new BehaviorSubject(9999);
    this.mvs.getValues().pipe(delay(3000)).subscribe(this.measureValues$)


    /**************!!**************/

  }

  addListener() {
    this.listeners.push(this.es.generateRandomString());
  }

  addConsoleListener() {
    const randomString = this.es.generateRandomString();
    this.measureValues$.pipe(takeUntil(this.destroy$)).subscribe(e => this.logStream$.next(`${randomString} ${e}`));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

}
