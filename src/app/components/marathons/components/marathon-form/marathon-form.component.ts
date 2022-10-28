import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-marathon-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './marathon-form.component.html',
  styleUrls: ['./marathon-form.component.css']
})
export class MarathonFormComponent implements OnInit {

  marathonForm!: FormGroup;

  constructor() {
    this.initializeForm();
  }

  ngOnInit(): void {

  }

  initializeForm() {
    this.marathonForm = new FormGroup({
      title: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      movies: new FormArray([])
    });
  }

}
