import { Component, OnInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss']
})
export class SnakeComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  @HostListener('window:keyup', ['$event']) keyEvent(eve: KeyboardEvent) {
      this.keyPrerssed(eve);

  }
  private ctx: CanvasRenderingContext2D;
  imageName;
  box: number = 20;
  applePosition: any[] = [];
  lengthOfSnake: number = 1;
  scoreTodisplay: number = 0;
  direction: string ='right';
  currentPositionX: number;
  currentPositionY: number;
  foodPositionX: number;
  foodPositionY: number;
  interval;
  tail: any[] = [];

  constructor() {
  }

  ngOnInit(): void {
      this.imageName = new Image();
      this.imageName.src = "../../assets/apple.jpg"
      this.ctx = this.canvas.nativeElement.getContext('2d');
      this.ctx.fillStyle = 'red';
      this.animate();
      this.foodPositionX = (Math.floor(Math.random() * 30));
      this.foodPositionY = (Math.floor(Math.random() * 30));
  }

  animate() {
      this.ctx.fillStyle = 'red';
      this.moveRightInHorizonatlDirection(1, 8)
  }

  keyPrerssed(eve) {
      if (eve.keyCode === 37 && this.direction != 'right') {
          this.direction = 'left';
      }
      else if (eve.keyCode === 38 && this.direction != 'down') {
          this.direction = 'up';
      }
      else if (eve.keyCode === 39 && this.direction != 'left') {
          this.direction = 'right';
      }
      else if (eve.keyCode === 40 && this.direction != 'up') {
          this.direction = 'down';
      }
      if (this.direction === 'left') {
          this.currentPositionX -= 1;
          clearInterval(this.interval);
          this.moveLeftInHorizontalDirection(this.currentPositionX, this.currentPositionY);
      }
      if (this.direction === 'up') {
          this.currentPositionY -= 1;
          clearInterval(this.interval);

          this.moveUpInVerticalDirection(this.currentPositionX, this.currentPositionY);

      }

      if (this.direction === 'right') {
          this.currentPositionX += 1;
          clearInterval(this.interval);
          this.moveRightInHorizonatlDirection(this.currentPositionX, this.currentPositionY);
      }
      if (this.direction === 'down') {
          this.currentPositionY += 1;
          clearInterval(this.interval);
          this.moveDownInVerticalDirection(this.currentPositionX, this.currentPositionY);
      }
  }

  draw(x: number, y: number, z: number) {
      this.currentPositionX = x;
      this.currentPositionY = y;
      if (this.iSCollisionOccur()) {
          alert('Game over');
          clearInterval(this.interval);
          this.tail = [];
          this.animate();
          this.scoreTodisplay = 0;
          this.lengthOfSnake = 1;
          return;
      }
      else {
          if (x === this.foodPositionX && y === this.foodPositionY) {
              this.foodPositionX = (Math.floor(Math.random() * 30));
              this.foodPositionY = (Math.floor(Math.random() * 30));
              this.lengthOfSnake++;
              this.scoreTodisplay++;
          }

          this.ctx.fillStyle = 'green';
          this.ctx.fillRect(z * x, z * y, z, z);
          for (let i = 0; i < this.tail.length - 1; i++) {

              if (this.lengthOfSnake > 0) {
                  this.ctx.strokeStyle = 'black';
                  if (this.tail[i]) {
                      this.ctx.strokeRect(z * this.tail[i].x, z * this.tail[i].y, z, z);
                  }
              }
          }
      }
  }

  moveRightInHorizonatlDirection(x: number, y: number) {
      const max = 30
      const canvas = this.ctx.canvas;
      this.interval = setInterval(() => {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(this.imageName, this.foodPositionX * 20, this.foodPositionY * 20, 20, 20);
        for (let i = 0; i < this.tail.length; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.lengthOfSnake - 1] = { x: x, y: y };
        this.draw(x, y, 20);
          x++;
          if (x >= max) {
              clearInterval(this.interval);
              this.moveRightInHorizonatlDirection(0, y);
          }
      }, 100);
  }

  moveDownInVerticalDirection(x: number, y: number) {
      const max = 30
      const canvas = this.ctx.canvas;
      this.interval = setInterval(() => {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(this.imageName, this.foodPositionX * 20, this.foodPositionY * 20, 20, 20);
        for (let i = 0; i < this.tail.length; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.lengthOfSnake - 1] = { x: x, y: y };
        this.draw(x, y, 20);
          y++;

          if (y >= max) {
              clearInterval(this.interval);
              this.moveDownInVerticalDirection(x, 0);
          }
      }, 100);


  }

  moveUpInVerticalDirection(x: number, y: number) {
      const max = 20;
      const min = -1;
      const canvas = this.ctx.canvas;


      this.interval = setInterval(() => {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(this.imageName, this.foodPositionX * 20, this.foodPositionY * 20, 20, 20);
        for (let i = 0; i < this.tail.length; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.lengthOfSnake - 1] = { x: x, y: y };
        this.draw(x, y, 20);
          y--;
          if (y <= min) {
              clearInterval(this.interval);
              this.moveUpInVerticalDirection(x, 29);
          }
      }, 100);


  }
  moveLeftInHorizontalDirection(x: number, y: number) {
      const max = 20;
      const min = -1;
      const canvas = this.ctx.canvas;


      this.interval = setInterval(() => {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.ctx.drawImage(this.imageName, this.foodPositionX * 20, this.foodPositionY * 20, 20, 20);
        for (let i = 0; i < this.tail.length; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        this.tail[this.lengthOfSnake - 1] = { x: x, y: y };
        this.draw(x, y, 20);
          x--;
          if (x <= min) {
              clearInterval(this.interval);
              this.moveLeftInHorizontalDirection(29, y);
          }
      }, 100);
  }

  iSCollisionOccur() {
      for (let i = 1; i < this.tail.length; i++) {
          if (this.tail[i] && this.tail[0]) {
              if (this.tail[i].x === this.tail[0].x && this.tail[i].y === this.tail[0].y) {
                  return true;
              }
          }

      }
  }
}



