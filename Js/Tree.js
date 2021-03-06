class Tree 
{
    constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.dustbinWidth = 450;
		this.dustbinHeight = 600;
		this.wallThickness = 10;
		
		this.image = loadImage("Photos/tree.png")
		this.bottomWall = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWall = Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		this.rightWall = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		
		World.add(world, this.bottomWall)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall)

	}
	display()
	{
			var posBottom = this.bottomWall.position;
			
			// push()
			// translate(posLeft.x, posLeft.y);
			// rectMode(CENTER)
			// angleMode(RADIANS)
			// fill(112, 22, 191)
			// rotate(this.angle)
			// pop()

			// push()
			// translate(posRight.x, posRight.y);
			// rectMode(CENTER)
			// angleMode(RADIANS)
			// fill(112, 22, 191)
			// rotate(-1*this.angle)
			// pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			angleMode(RADIANS)
			fill(112, 22, 191)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
			
	}
    
}