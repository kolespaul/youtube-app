import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  searchTerm: string = '';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm)
        this.searchTerm = params.searchTerm;
    })
  }

  search(): void {
    if(this.searchTerm)
      this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}
