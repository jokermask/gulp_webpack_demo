/**
 * Created by 天俊sama on 2016/7/9.
 */

import {animal} from './animal' ;

$(function(){
  init() ;
});

function init(){
  initClick() ;
}

function initClick(){
  $(".d1").click(function(){
    $(this).animate({height:"300px"},2000) ;
  });
  var tiger = new animal("tiger") ;
  tiger.sayhi() ;
}