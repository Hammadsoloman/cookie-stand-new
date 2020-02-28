'use strict';
var h = ['6 am','7 am','8 am','9 am','10 am', '11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm']


var locationOne = {
    name : 'seattle',
    minC: 23,
    maxC: 65,
    avgCookie : 6.3 ,
    totaleCPH : [],
    totalCPD : 0,
    getNumOfCookie : function(){
        for (var i = 0; i < h.length; i++) {
          var randCustomer = getRandomCustomer(this.minC , this.maxC);
          var numbOfCookies = Math.floor(randCustomer * this.avgCookie);
          this.totalCPD +=  numbOfCookies;
          this.totaleCPH.push(numbOfCookies);
        }
        console.log(this.totalCPD);
    },

    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = locationOne.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < h.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${h[i]} ${this.totaleCPH[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        var totalLi = document.createElement('li');
        totalLi.textContent = `total ${this.totalCPD}`;
        ulEl.appendChild(totalLi);
 
    }
};


function getRandomCustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
locationOne.getNumOfCookie();
locationOne.render();


var locationTwo = {
    name : 'Tokyo',
    minC: 3,
    maxC: 24,
    avgCookie : 1.2 ,
    totaleCPH : [],
    totalCPD : 0,
    getNumOfCookie : function(){
        for (var i = 0; i < h.length; i++) {
          var randCustomer = getRandomCustomer(this.minC , this.maxC);
          var numbOfCookies = Math.floor(randCustomer * this.avgCookie);
          this.totalCPD +=  numbOfCookies;
          this.totaleCPH.push(numbOfCookies);
        }
        console.log(this.totalCPD);
    },

    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = locationTwo.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < h.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${h[i]} ${this.totaleCPH[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        var totalLi = document.createElement('li');
        totalLi.textContent = `total ${this.totalCPD}`;
        ulEl.appendChild(totalLi);
 
    }
};


function getRandomCustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
locationTwo.getNumOfCookie();
locationTwo.render();


var locationThree = {
    name : 'Dubai',
    minC: 11,
    maxC: 38,
    avgCookie : 3.7 ,
    totaleCPH : [],
    totalCPD : 0,
    getNumOfCookie : function(){
        for (var i = 0; i < h.length; i++) {
          var randCustomer = getRandomCustomer(this.minC , this.maxC);
          var numbOfCookies = Math.floor(randCustomer * this.avgCookie);
          this.totalCPD +=  numbOfCookies;
          this.totaleCPH.push(numbOfCookies);
        }
        console.log(this.totalCPD);
    },

    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = locationThree.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < h.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${h[i]} ${this.totaleCPH[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        var totalLi = document.createElement('li');
        totalLi.textContent = `total ${this.totalCPD}`;
        ulEl.appendChild(totalLi);
 
    }
};


function getRandomCustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
locationThree.getNumOfCookie();
locationThree.render();


var locationFour = {
    name : 'Paris',
    minC: 20,
    maxC: 38,
    avgCookie : 2.3 ,
    totaleCPH : [],
    totalCPD : 0,
    getNumOfCookie : function(){
        for (var i = 0; i < h.length; i++) {
          var randCustomer = getRandomCustomer(this.minC , this.maxC);
          var numbOfCookies = Math.floor(randCustomer * this.avgCookie);
          this.totalCPD +=  numbOfCookies;
          this.totaleCPH.push(numbOfCookies);
        }
        console.log(this.totalCPD);
    },

    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = locationFour.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < h.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${h[i]} ${this.totaleCPH[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        var totalLi = document.createElement('li');
        totalLi.textContent = `total ${this.totalCPD}`;
        ulEl.appendChild(totalLi);
 
    }
};


function getRandomCustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
locationFour.getNumOfCookie();
locationFour.render();

var locationFive = {
    name : 'Lima',
    minC: 2,
    maxC: 16,
    avgCookie : 4.6 ,
    totaleCPH : [],
    totalCPD : 0,
    getNumOfCookie : function(){
        for (var i = 0; i < h.length; i++) {
          var randCustomer = getRandomCustomer(this.minC , this.maxC);
          var numbOfCookies = Math.floor(randCustomer * this.avgCookie);
          this.totalCPD +=  numbOfCookies;
          this.totaleCPH.push(numbOfCookies);
        }
        console.log(this.totalCPD);
    },

    render : function(){
        var container = document.getElementById('cookie-stand');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = locationFive.name;
        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
          for (var i = 0; i < h.length; i++){
          var liEl = document.createElement('li');
          liEl.textContent = `${h[i]} ${this.totaleCPH[i]} cookies`;
          ulEl.appendChild(liEl);
        }
        var totalLi = document.createElement('li');
        totalLi.textContent = `total ${this.totalCPD}`;
        ulEl.appendChild(totalLi);
 
    }
};


function getRandomCustomer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
locationFive.getNumOfCookie();
locationFive.render();









