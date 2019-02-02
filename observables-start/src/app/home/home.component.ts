import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Observer, Subscription, interval} from 'rxjs';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(
        map((number: number) => {
          return number * 2
        })
      );
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => console.log(number)
    );

    const myObservable = Observable.create((observer: Observer<number>) => {
      setTimeout(() => {
        observer.next(1)
      }, 2000);
      setTimeout(() => {
        observer.next(2)
      }, 4000);
      setTimeout(() => {
        // observer.error("Broken!")
        observer.complete()
      }, 5000);
      setTimeout(() => {
        observer.next(2)
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      (data: number) => console.log(data),
      (error: string) => console.log(error),
      () => console.log("Completed"),
    )
  }

  ngOnDestroy(): void {
    this.numbersObsSubscription.unsubscribe();
    this.customObsSubscription.unsubscribe();
  }

}
