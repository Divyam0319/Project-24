class Hammer {
    constructor(x, y) {
      var options = {
          'restitution':0.5,
          'friction':1,
          'density':2
      }
      this.body = Bodies.rectangle(x, y, 130, 30, options);
      this.width = 130;
      this.height = 30;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      
      var angle = this.body.angle;
      angle= mouseY;
      angle=mouseX;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("red")
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };