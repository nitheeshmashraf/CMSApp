import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  private OptionObjs = new BehaviorSubject<any>(['Option 1', 'Option 2']);
  private Option1Objs = new BehaviorSubject<any>(['Option 1A', 'Option 1B', 'Option 1C', 'Option 1D']);
  private Option2Objs = new BehaviorSubject<any>(['Option 2A', 'Option 2B', 'Option 2C', 'Option 2D']);
  goal = this.goals.asObservable();
  OptionObj = this.OptionObjs.asObservable();
  Option1Obj = this.Option1Objs.asObservable();
  Option2Obj = this.Option2Objs.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal)
  }
  
}
