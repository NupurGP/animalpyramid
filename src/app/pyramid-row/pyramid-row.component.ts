import { Component, Input, OnInit } from '@angular/core';

import { Animal } from '../animal.model';

@Component({
  selector: 'app-pyramid-row',
  templateUrl: './pyramid-row.component.html',
  styleUrls: ['./pyramid-row.component.css']
})
export class PyramidRowComponent implements OnInit {
  @Input() animals: Animal[];
  @Input() level: number;

  constructor() { }

  ngOnInit() { }
}
