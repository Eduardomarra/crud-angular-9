import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerServices: HeaderService
  ) { }

  ngOnInit(): void {
  }

  get title(): string {
    return this.headerServices.headerData.title
  }

  get icon(): string {
    return this.headerServices.headerData.icon
  }

  get routeUrl(): string {
    return this.headerServices.headerData.routeUrl
  }

}
