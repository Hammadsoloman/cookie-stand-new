'use strict';
var h =  ['06am','07am','08am','09am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm'];
var glop = [];

var container =document.getElementById('cookie');
var tableEl =document.createElement('table');
container.appendChild(tableEl);

function getRandomC(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Resturants(name, minC, maxC,avgC){
    this.name=name;
    this.minC=minC;
    this.maxC=maxC;
    this.avgC=avgC;
    this.totalCPH=[];
    this.customrs=0;
    this.total=0;
    glop.push(this);
    this.pCookies();
}


Resturants.prototype.pCookies = function(){
    for(var i = 0;i<h.length;i++){
      this.customrs = getRandomC(this.minC,this.maxC);
      var cookiesP = Math.floor(this.avgC * this.customrs);
      this.totalCPH.push(cookiesP);
      this.total += this.totalCPH [i];
    }
  };


Resturants.prototype.render = function(){
    var trEl =document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl =document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;
    for(var i=0;i<h.length;i++){
      tdEl =document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = this.totalCPH[i];
    }   
    var tdT=document.createElement('td');
    trEl.appendChild(tdT);
    tdT.textContent = this.total;
    // totalRe += this.total;
};

new Resturants('Seattle','23','65','6.3');
new Resturants('Tokyo','3','24','1.2');
new Resturants('Dubai','11','38','3.7');
new Resturants('Paris','20','38','2.3');
new Resturants('Lima','2','16','4.6');


function headerh(){
  var trEl =document.createElement('tr');
  tableEl.appendChild(trEl);
  var thElspace =document.createElement('th');
  thElspace.textContent = ' ';
  trEl.appendChild(thElspace);
  for(var i=0;i<h.length;i++){
    // var trEl =document.createElement('tr');
    // tableEl.appendChild(trEl);
   var thEl =document.createElement('th');
   thEl.textContent = h[i];
   trEl.appendChild(thEl);
  }
  var thElT =document.createElement('th');
  trEl.appendChild(thElT);
  thElT.textContent = 'Total';
}


var resForm = document.getElementById('resN');
resForm.addEventListener('submit',function(event){

  event.preventDefault();
  var name = event.target.name.value;
  var min = event.target.min.value;
  var max = event.target.max.value;
  var avg = event.target.avg.value;
  var resForm = new Resturants(name,min,max,avg);
tableEl.deleteRow(glop.length)

  resForm.render();

  reFooter();

 });






function reFooter(){
    
    var trEl=document.createElement('tr');
    tableEl.appendChild(trEl);
    var tdEl =document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = 'Total';
    var totalh ;
    var totalA = 0 ;
    for(var j=0;j<h.length;j++){
       totalh=0;
      for(var i=0;i<glop.length;i++){
        totalh += glop[i].totalCPH[j];
      }
      var tdEltotal=document.createElement('td');
      tdEltotal.textContent=totalh;
      totalA +=totalh;
      trEl.appendChild(tdEltotal);
    }
    var tdAltotal=document.createElement('td');
    tdAltotal.textContent=totalA;
    trEl.appendChild(tdAltotal);


  }


headerh();

for(var i = 0;i<glop.length;i++){
  glop[i].render();
}

reFooter();

