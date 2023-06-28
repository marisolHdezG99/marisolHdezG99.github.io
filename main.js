let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#146c8d;"> Desarrollo sitios web y escribo artículos sobre programación.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
  
