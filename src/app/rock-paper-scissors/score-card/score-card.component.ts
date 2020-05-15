import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  @Input() playerScore: number;
  @Input() computerScore: number;
  @Input() compChoice: string;
  @Input() userChoice : string;
  @Input() status: string;
  constructor() { }

  ngOnInit() {
  }

}
