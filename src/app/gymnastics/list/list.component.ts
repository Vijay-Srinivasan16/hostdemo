import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  monworkouts:any[] = [{key:1, name:'Push-ups', src:'assets/pushups.jpg', sets:3, reps:10, staticval:'3*10'},
  {key:2, name:'Incline bench press', src:'assets/incbenchpress.jpg', sets:3, reps:12, staticval:'3*12'},
  {key:3, name:'Barbell bench press', src:'assets/barbellbenchpress.jpg', sets:3, reps:10, staticval:'3*10'},
  {key:4, name:'Decline bench press', src:'assets/decbenchpress.jpg', sets:3, reps:10, staticval:'3*10'},
  {key:5, name:'Machine fly', src:'assets/Machinefly.jpg', sets:3, reps:10, staticval:'3*10'},
  {key:5, name:'Overhead extensions', src:'assets/Overheadextensions.jpg', sets:3, reps:10, staticval:'3*10'},
  {key:5, name:'Triceps pushdown', src:'assets/tripushdowns.jpg', sets:3, reps:10, staticval:'3*10'},
  

];

tueworkouts:any[] = [{key:1, name:'Pullups', src:'assets/pullups.jpg', sets:3, reps:10, staticval:'3*10'},
{key:2, name:'Lat pulldowns', src:'assets/Lat pulldowns.jpg', sets:3, reps:12, staticval:'3*12'},
{key:3, name:'Cable Row', src:'assets/Cable Row.jpg', sets:3, reps:10, staticval:'3*10'},
{key:4, name:'Barbell row', src:'assets/Barbell row.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Barbell curl', src:'assets/Barbell curl.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Preacher curls', src:'assets/Preacher curls.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Dumbbell hammer curl', src:'assets/Dumbbell hammer curl.jpg', sets:3, reps:10, staticval:'3*10'},


];

wedworkouts:any[] = [{key:1, name:'Dumbbell shoulder press', src:'assets/Dumbbell shoulder press.jpg', sets:3, reps:10, staticval:'3*10'},
{key:2, name:'Arnold press', src:'assets/Arnold press.jpg', sets:3, reps:12, staticval:'3*12'},
{key:3, name:'Front raise', src:'assets/front raise.jpg', sets:3, reps:10, staticval:'3*10'},
{key:4, name:'Lateral raise', src:'assets/lateral raise.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Shrugs', src:'assets/Shrugs.jpg', sets:3, reps:10, staticval:'3*10'}


];


thuworkouts:any[] = [{key:1, name:'Hack Squat', src:'assets/Hack Squats.jpg', sets:3, reps:10, staticval:'3*10'},
{key:2, name:'Leg press', src:'assets/Leg press.jpg', sets:3, reps:12, staticval:'3*12'},
{key:3, name:'Leg extension', src:'assets/Leg extension.jpg', sets:3, reps:10, staticval:'3*10'},
{key:4, name:'Prone leg curl', src:'assets/Prone leg curl.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Seated calf raise', src:'assets/Seated calf raise.jpg', sets:3, reps:10, staticval:'3*10'},


];

friworkouts:any[] = [{key:1, name:'Push-ups', src:'assets/pushups.jpg', sets:3, reps:10, staticval:'3*10'},
{key:2, name:'Incline bench press', src:'assets/incbenchpress.jpg', sets:3, reps:12, staticval:'3*12'},
{key:3, name:'Barbell bench press', src:'assets/barbellbenchpress.jpg', sets:3, reps:10, staticval:'3*10'},
{key:4, name:'Decline bench press', src:'assets/decbenchpress.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Machine fly', src:'assets/Machinefly.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Overhead extensions', src:'assets/Overheadextensions.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Triceps pushdown', src:'assets/tripushdowns.jpg', sets:3, reps:10, staticval:'3*10'},


];

satworkouts:any[] = [{key:1, name:'Pullups', src:'assets/pullups.jpg', sets:3, reps:10, staticval:'3*10'},
{key:2, name:'Lat pulldowns', src:'assets/Lat pulldowns.jpg', sets:3, reps:12, staticval:'3*12'},
{key:3, name:'Cable Row', src:'assets/Cable Row.jpg', sets:3, reps:10, staticval:'3*10'},
{key:4, name:'Barbell row', src:'assets/Barbell row.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Barbell curl', src:'assets/Barbell curl.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Preacher curls', src:'assets/Preacher curls.jpg', sets:3, reps:10, staticval:'3*10'},
{key:5, name:'Dumbbell hammer curl', src:'assets/Dumbbell hammer curl.jpg', sets:3, reps:10, staticval:'3*10'},


];

}
