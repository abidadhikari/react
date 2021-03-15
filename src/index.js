import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Thopda from "./components/Thopda";
const root=document.getElementById("root");

ReactDOM.render(
  <>
  <Header/>
  <Thopda/>
  <Footer/>
  </>,
  root
);

const mainHeader=document.querySelector(".main-header");
const scrollIndicator=document.querySelector(".scrollindicator");
const toup=document.querySelector(".toup")
window.addEventListener('scroll',()=>{
  if(window.scrollY>=50){
    mainHeader.style.background="#282c34";
    scrollIndicator.style.display="block";
    toup.style.display="flex";
  }
  else{
    mainHeader.style.background="transparent";
    scrollIndicator.style.display="none";
    toup.style.display="none";
  }
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
})

const burger=document.querySelector(".burger");
const nav=document.querySelector('nav');
burger.addEventListener('click',()=>{
  if(nav.style.display==="block"){
    nav.style.display="none";
    document.querySelector(".open").style.display="none";
    document.querySelector(".close").style.display="block"

  }
  else{
    nav.style.display="block";
    nav.addEventListener('click',()=>{
      nav.style.display="none";
      document.querySelector(".open").style.display="none";
      document.querySelector(".close").style.display="block"
      
    })
    document.querySelector(".open").style.display="block"
    document.querySelector(".close").style.display="none"
  }
  // alert("working")
})