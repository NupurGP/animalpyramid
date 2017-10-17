import { Component, OnInit } from '@angular/core';

import { Pyramid } from './pyramid.model';
import { PyramidRowService } from '../pyramid-row/pyramid-row.service';

@Component({
  selector: 'app-pyramid',
  templateUrl: './pyramid.component.html',
  styleUrls: ['./pyramid.component.css']
})
export class PyramidComponent implements OnInit {
  myPyramid: Pyramid;

  constructor(
    private pyramidRowService: PyramidRowService
  ) { }

  ngOnInit() {
    this.myPyramid = new Pyramid(this.pyramidRowService.getPyramidRows());
  }
}
