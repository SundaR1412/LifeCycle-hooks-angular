import { Component, OnInit, Input, SimpleChanges, OnChanges, SimpleChange, DoCheck, AfterContentInit,
         AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
                                       AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  private passedNumber: number;
  @Input() userName: object;

  constructor() {}

  @Input() set myNumber(number1: number) {
    this.passedNumber = number1;
  }

  get myNumber() {
    return this.passedNumber;
  }


  // Executed when the changes are passed by value
  // Executed during the data from parent component changes
  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges gets executed', change);
    const numberChange: SimpleChange = change.myNumber;
    console.log('Previous Change', numberChange.previousValue);
    console.log('Current Change', numberChange.currentValue);
    this.myNumber = numberChange.currentValue;
  }


  // Executed at first time of component loading after ngOnChanges
  ngOnInit() {
    console.log('ngOnInit.....Initiated only once during intial loading of component');
  }


  // Executed when the incoming changes are passed by value or passed by reference
  ngDoCheck() {
    console.log('ngDoCheck Executed....Name object is changed');
  }


  // Executed once during component loading for the first time
  // Executed after ngOnChanges, ngOnInit, ngDoCheck
  ngAfterContentInit() {
    console.log('ngAfterContentInit gets executed');
  }


  // Executed every time after ngOnChanges or ngDoCheck executed
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked gets executed');
  }


  // Executed only once after ngAfterContentChecked
  // Executed after all the grandChild Components gets completely executed
  ngAfterViewInit() {
    console.log('ngAfterViewInit gets executed');
  }


  // Executed every time efter ngAfterContentChecked executed
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked executed');
  }

  // Executed when the component is removed from the DOM
  ngOnDestroy() {
    console.log('Component got destroyed');
  }

}
