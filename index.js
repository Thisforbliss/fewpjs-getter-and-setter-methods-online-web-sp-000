// Add your Circle class here
class Circle {
  constructor (radius){
    this.radius= radius
  }
  
  get diameter(){
    return this.radius * 2
  }
  
  set diameter(d){
    this.radius = d/2
  }
  get circumference(){
    return (Math.PI * this.diameter)
  }
  
  set circumference (c){
    
  }
  
  get area(){
    return (Math.PI *( this.radius * this.radius) )
  
  }
}