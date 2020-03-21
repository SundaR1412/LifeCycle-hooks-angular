import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private number = 1;
  public isVisible = true;
  // userName = 'Raj';
  userName = {
    name : 'Raj'
  };

  changeName() {
    if (this.userName.name === 'Raj') {
      this.userName.name = 'Kumar';
    } else {
      this.userName.name = 'Raj';
    }
  }

  switchVisibility() {
    this.isVisible = !this.isVisible;
  }

  set counter(value: number) {
    this.number = value;
  }

  get counter() {
    return this.number;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
