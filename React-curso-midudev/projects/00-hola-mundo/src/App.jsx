import { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App(){
  const formatUsername = (username) => `@${username}`
  return(
  <section className='App'>
    <TwitterFollowCard formatUsername={formatUsername} username="AnnieScigliano" name="Annie"/>
    <TwitterFollowCard formatUsername={formatUsername} username="jesus" name="yisus"/>
    <TwitterFollowCard formatUsername={formatUsername} username="elonmusk" name="Elon Musk"/>
    <TwitterFollowCard formatUsername={formatUsername} username="dios" name="Dios"/>
  </section>

  )

} 