class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        };
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
    }
    display() {
        var p = this.body.position;
        push();
        translate(p.x, p.y);
        rotate(this.body.angle)
        ellipseMode(CENTER);
        fill("black");
        ellipse(0, 0, this.radius * 2, this.radius * 2);
        pop();
    }
};