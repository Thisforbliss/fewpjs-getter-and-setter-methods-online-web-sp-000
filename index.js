// Add your Circle class here
class Circle {
  constructor (radius){
    this.radius= radius
  }
  
  get diameter(d){
    return this.radius = d/2
  }
  
  get circumference(){
    return (Math.PI * this.diameter)
  }
  
  get area(){
    return (Math.PI *( this.radius * this.radius) )
  
  }
}