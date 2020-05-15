import { Component, OnInit } from '@angular/core';
import { choice } from './choice';

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.scss']
})
export class RockPaperScissorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  compChoice: string;
  compChoiceId: number;
  userChoiceId: number;
  computerScore: number = 0;
  playerScore: number= 0;
  userChoice: string;
  status: string;
  

  userSelected(value: string){
    switch(value)
    {
      case 'rock':{
        this.userChoiceId=1;
        break;
      }
      case 'paper':{
        this.userChoiceId=2;
        break;
      }
      case 'scissors':{
        this.userChoiceId=3;
      }
    }
    
    
    const randomNum = Math.floor(Math.random() * 3);
    this.compChoiceId=randomNum+1;
    this.compChoice=choice[this.compChoiceId];
    this.userChoice = value;
   this.checkResult(this.userChoiceId, this.compChoiceId)
  }
  checkResult(userChoice: number, compChoice: number){
    if(userChoice === compChoice){
      this.status = `It's a draw`
    this.renableTheChoice();
    }
    else{
      if((userChoice === 1 && compChoice === 3)|| (userChoice === 2 && compChoice === 1) || (userChoice ===3 && compChoice===2)){
        
        this.playerScore++;
        this.status = `Player Win`;
        this.renableTheChoice();
      }
      else{
        this.computerScore++;
        this.status = `Computer Win`;
        this.renableTheChoice();
      }
    }

  }
  renableTheChoice(){
    setTimeout(()=>{
      this.compChoice='';
      this.userChoice ='';
      this.status ='';
    },3000)
  }
  onNewGameClicked(){
    this.playerScore = 0;
    this.compChoice ='';
    this.status ='';
    this.userChoice ='';
    this.computerScore =0;

  }
}


