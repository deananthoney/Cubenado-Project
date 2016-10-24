// app.component.ts
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
<style>
cubenado{
position: absolute;
font-family: Helvetica;
text-align:center;
bottom: 0;
left: 0;
right: 0;
width:100%;
height:auto;
color:#FFF;

}

input[type="nbParticles"]  {
color: cadetblue;

}
</style>
<cubenado>

  
  <div class="sub-container">
    Number of Cubes: <label for="nbParticles"><p id="labelParticles"></p></label>
    <input id="nbParticles" type="range" min="10" max="10000" value="10" step="1">
  </div>
  
  
<div class="sub-container">
   Randomness: <label for="nbParticles">  <p id="labelParticles"></p></label>
    <input id="nbParticles" type="range" min="0%" max="100%" value="10" step="1">
  </div>
  

   </cubenado>

  `
})
export class AppComponent {

}
