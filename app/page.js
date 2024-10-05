"use client"
import React from 'react';
import Nav from './Components/Nav'
import Header from './Components/Header'
import Main from './Components/Main'
import Team from './Components/Team'
import Footer from './Components/Footer'

export default function Home() {
  return (
   <div>
    <Nav />
    <Header />
    <Main />
    <Team />
    <Footer />
   </div>
  );
}
