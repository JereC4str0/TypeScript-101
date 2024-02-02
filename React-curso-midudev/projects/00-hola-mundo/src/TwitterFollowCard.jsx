import { useState } from "react"

export function TwitterFollowCard({formatUsername, username, name, initialIsFollowing}){
  // const state = useState(false)
  // // state devuelve un array con dos posiciones, una es el estado y otra una funcion para cambiarlo
  // const isFollowing = state[0] // ver si la luz esta prendida
  // const isFollowing = state[1] // cambiar el estado de la luz 

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
  const handleClick = () => {
    setIsFollowing(!isFollowing) // cambia de true a false de false a true
  }
  return(
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img  alt="avatar random" 
            src= {`https://unavatar.io/${username}`}
            className='tw-followCard-avatar'></img>
      <div className='tw-followCard-info'>
        <strong >{name}</strong>
        <span className='tw-followCard-infoUserName'>{formatUsername(username)}</span>
      </div>
    </header>

    <aside>
      <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
    </aside> 
  </article>
  )
}