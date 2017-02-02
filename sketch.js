var x = 0;
function setup() {
  
  
  createCanvas (windowWidth,windowHeight);
  



}
function draw() {





clone(1,3,frameCount*0.1111);


}



var clone = function( si , pos , ang ,num){
  

translate(width*0.5,height*0.5);


  angle = createVector( pos*cos(ang) , pos*sin(ang));

 dis = createVector( angle.x , angle.y  );
 ellipse(0,0,si);
 
 push();
 
 for (i = 0 ; i < width ; i ++){
   
   
   
   translate(dis.y,dis.x,si);
   ellipse(0,0,si);
   
   
   
 }
   pop();
   
   //ellipse(dis.y,dis.x*-1,si);





};

