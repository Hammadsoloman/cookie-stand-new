'use strict';
var h = ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm']
var glop=[];


function Resturants(name,minC,maxC,avgC){
    this.name=name;
    this.minC=minC;
    this.maxC=maxC;
    this.avgC=avgC;
    this.totalCPH=[];
    this.customrs=0;
    this.total=0;
}

Resturants.prototype.getRandomC = function(){
    this.customrs = getRandomC(this.minC,this.maxC);
  };
Resturants.prototype.pCookies = function(){
    var cPH = Math.ceil(this.avgC * this.customrs);
    this.totalCPH.push(cPH);
    this.total += cPH;
  };

Resturants.prototype.render = function(){
    for(var i =0; i<h.length ;i++ ){
      this.getRandomC();
     this.pCookies();}
    glop.push(this);
  };


var seattle = new Resturants('Seattle',23,65,6.3);
seattle.render();
var tokyo = new Resturants('tokyo',3,24,1.2);
tokyo.render();
var dubai = new Resturants('Dubai',11,38,3.7);
dubai.render();
var paris = new Resturants('Paris',20,38,2.3);
paris.render();
var lima = new Resturants('Lima',2,16,4.6);
lima.render();


var container =document.getElementById('cookie');
var tableEl =document.createElement('table');
container.appendChild(tableEl);

function headerh(){
    var trEl =document.createElement('tr');
    tableEl.appendChild(trEl);
    var thEl =document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = '';
    for(var i=0;i<h.length;i++){
      thEl=document.createElement('th');
      trEl.appendChild(thEl);
      thEl.textContent = h[i];
    }
    thEl =document.createElement('th');
    trEl.appendChild(thEl);
    thEl.textContent = 'Total';
  }
  headerh();


  function content(){
    var totalResturents = 0;
    var trEl =document.createElement('tr');
    tableEl.appendChild(trEl);
    for(var j=0;j<glop.length;j++){
      trEl =document.createElement('tr');
      tableEl.appendChild(trEl);
      trEl.textContent = glop[j].name;
      for(var i=0;i<h.length;i++){
        var tdEl =document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent = glop[j].totalCPH[i];
      }
      tdEl =document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = glop[j].total;
      totalResturents += glop[j].total;
    }
  }
  content();


  function footer(){
    var totalH = 0;
    var totalA = 0 ;
    var trEl =document.createElement('tr');
    tableEl.appendChild(trEl);
    trEl.textContent = 'Total';
    for(var j=0;j<h.length;j++){
      for(var i=0;i<glop.length;i++){
        totalH += glop[i].totalCPH[j];
      }
      var tdEl =document.createElement('td');
      trEl.appendChild(tdEl);
      tdEl.textContent = totalH;
      totalA = totalH + totalA;
      totalH = 0;
    }
    tdEl =document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = totalA;
  }
  footer();

  
function getRandomC(min,max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }