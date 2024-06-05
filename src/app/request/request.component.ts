import {Component, OnInit} from '@angular/core';
import {RequestService} from "./request.service";

@Component({
  templateUrl: './request.component.html',
  styleUrl: './request.component.scss'
})
export class RequestComponent implements OnInit {

  constructor(private requestService: RequestService) {
  }

  fact = null

  ngOnInit() {
    this.requestService.getResult().subscribe((res) => {
      if (res?.fact){
        this.fact = res?.fact;
      }
    })
  }
}
