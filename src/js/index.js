/**
 * Created by 天俊sama on 2016/5/26.
 */
import cats from './cat' ;
import {animal,myname} from './animal' ;

$(function(){
  init() ;
});

function init(){
  initClick() ;
}

function initClick(){
  console.log(cats) ;
  $(".d1").click(function(){
    $(this).animate({height:"300px"},2000) ;
  });
  $('<h1>Cats</h1>').appendTo('body');
  const ul = $('<ul></ul>').appendTo('body');
  console.log(myname) ;
  for (const cat of cats) {
    $('<li></li>').text(cat).appendTo(ul);
    var cat = new animal(cat) ;
    cat.sayhi() ;
  }
}