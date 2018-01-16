import { Component, OnInit } from '@angular/core';
// Other imports..
import { DataService } from '../data.service';


import { ActivatedRoute } from '@angular/router';      // Add this
import { Router } from '@angular/router';             // Add this

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;
  MainOptions:any;
  SubOptions:any;
  
    constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) { 
      this.route.params.subscribe(res => console.log(res.id));
    }
  
    ngOnInit() {
      this._data.goal.subscribe(res => this.goals = res);
      this._data.OptionObj.subscribe(res => this.MainOptions = res);
    }
  
    sendMeHome() {
      this.router.navigate(['']);
    }

    Clicked(itemSelected){
      console.log(itemSelected+" was clicked");
      if(itemSelected=='Option 1')
        this._data.Option1Obj.subscribe(res => this.SubOptions = res);
      else if(itemSelected=='Option 2')
        this._data.Option2Obj.subscribe(res => this.SubOptions = res);
      
        console.log(this.SubOptions);
    }
}
