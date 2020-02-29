'use strict';
var h =  ['06am','07am','08am','09am','10am','11am','12pm','01pm','02pm','03pm','04pm','05pm','06pm','07pm'];
var glop = [];


function Resturants(name,minC,maxC,avgC){
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
      this.total += cookiesP;
    }
  };

var container =document.getElementById('cookie');
var tableEl =document.createElement('table');
container.appendChild(tableEl);

Resturants.prototype.render = function(){
    var totalRe = 0;
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
    tdEl =document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = this.total;
    totalRe += this.total;
};

new Resturants('Seattle',23,65,6.3);
new Resturants('Tokyo',3,24,1.2);
new Resturants('Dubai',11,38,3.7);
new Resturants('Paris',20,38,2.3);
new Resturants('Lima',2,16,4.6);


headerh();

for(var i = 0;i<glop.length;i++){
  glop[i].render();
}

footer(trEl);

var container =document.getElementById('cookie');
var tableEl =document.createElement('table');
container.appendChild(tableEl);
var trEl = document.createElement('tr');
// footer(trEl);

var resForm = document.getElementById('resN');
resForm.addEventListener('submit',function(event){

  e.preventDefault();
  var bResturant = event.target.name.value;
  var minN = event.target.min.value;
  var maxN = event.target.max.value;
  var avgN = event.target.avg.value;
  var newResturent = new Resturants(bResturant,minN,maxN,avgN);
  newResturent.render();
  tableEl.removeChild(trEl);
  trEl =document.createElement('tr');

  footer(trEl);
 });

function headerh(){
    var trEl =document.createElement('tr');
    var thEl =document.createElement('th');
    tableEl.appendChild(trEl);
    trEl.appendChild(thEl);
    thEl.textContent = '';
    for(var i=0;i<h.length;i++){
      thEl =document.createElement('th');
      trEl.appendChild(thEl);
      thEl.textContent = h[i];
    }
    thEl =document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Total';
  }

  headerh();


function footer(border){
    var totalh = 0;
    var totalA = 0 ;
    tableEl.appendChild(border);
    var tdEl =document.createElement('td');
    border.appendChild(tdEl);
    tdEl.textContent = 'Total';
    for(var j=0;j<h.length;j++){
      for(var i=0;i<glop.length;i++){
        totalh += glop[i].totalCPH[j];
      }
      tdEl =document.createElement('td');
      border.appendChild(tdEl);
      tdEl.textContent = totalh;
      totalA = totalh + totalA;
      totalh = 0;
    }
    tdEl =document.createElement('td');
    border.appendChild(tdEl);
    tdEl.textContent = totalA;
  }



function getRandomC(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }