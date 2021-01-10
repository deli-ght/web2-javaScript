var Link = {
  setColor:function setColor(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i++;
    // }
    $('a').css('color',color);
  }
};

var Body = {
  setColor:function setColor(color){
    //document.querySelector('body').style.color= color;
    $('body').css('color',color);
  },
  setBackgroundColor: function setBackgroundColor(color){
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
  }
};

function nightDayHandler(self){
  if(self.value === 'night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  Link.setColor('gray');
  self.value = 'day'
  } else {
  Body.setBackgroundColor('beige');
  Body.setColor('black');
  Link.setColor('skyblue');
  self.value = 'night'
    }
  }
