import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SnakeComponent } from './snake/snake.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
   redirectTo:'home'
  },
  {
    path:'home',
    pathMatch:'full',
    component: HomeComponent
  },

  {
    path:'snake',
    pathMatch:'full',
    component:SnakeComponent
  },
  {
    path:'rps',
    pathMatch:'full',
    component:RockPaperScissorsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
