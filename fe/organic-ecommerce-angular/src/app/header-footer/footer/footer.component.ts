import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private modalservice: NgbModal) { }

  ngOnInit(): void {
  }

  public open(modal: any): void {
    this.modalservice.open(modal);
  }

}
