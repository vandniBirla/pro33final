class Snow{
constructor(x,y,r){
    var options={
        restitution:0.1,
        density:0.2,
        isStatic:false
    }
    this.r=r;
    this.body=Bodies.circle(x,y,this.r,options)
   this.image=loadImage("snow4.webp")
    World.add(world,this.body);
    
}
display(){
    pos=this.body.position;
    push ();
   translate(pos.x,pos.y);
   imageMode (CENTER);
   image(this.image,0,0,this.r,this.r);
   pop ();
}
}