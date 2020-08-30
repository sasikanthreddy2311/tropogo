import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tropogo-course-details',
  templateUrl: './tropogo-course-details.component.html',
  styleUrls: ['./tropogo-course-details.component.css']
})
export class TropogoCourseDetailsComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router) { }
  addCourseDetails: FormGroup;
  coursesLocationList: any[] = []
  coursesLanguageList: any[] = []
  expandContent: any;
  submitted: boolean;

  ngOnInit(): void {
    this.addCourseDetails = this.fb.group({
      courseTitle: [''],
      airCraftType: [''],
      batchDetails: this.fb.array([]),
      courseComments: ['']
    })
    this.coursesLocationList = ['hyderabad',
    'Bangalore',
    'Chennai',
    'Mumbai',
    'Pune']
    this.coursesLanguageList = ['English',
    'Hindi',
    'Telugu',
    'Kannada',
    'Tamil']
    this.addBatchDetails()
  }

  batchDetails() : FormArray {
    return this.addCourseDetails.get("batchDetails") as FormArray
  }

  newInitRows() {
    return this.fb.group({
      courseLocation: [''],
      courseLanguage: [''],
      courseCost: [''],
      isWeekendCourse: ['']
    })
  }

  addBatchDetails() {
    this.batchDetails().push(this.newInitRows());
  }
   
  removeQuantity(i:number) {
    this.batchDetails().removeAt(i);
  }
   
  onSubmit() {
    console.log(this.addCourseDetails.value);
    this.submitted  = true;
    this.addCourseDetails.reset()
  }

  goToMainPage() {
    this.router.navigate(['trainingDetails']);
  }

  closeAlert() {
    this.submitted  = false;
  }


}
