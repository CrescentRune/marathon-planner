import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marathon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marathon.component.html',
  styleUrls: ['./marathon.component.css']
})
export class MarathonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
