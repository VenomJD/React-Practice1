import { useState } from "react"

export function TwitterFollowCard({formatUserName,userName,name,initialIsFollowing}){

    const [isFollow, setFollow] = useState(initialIsFollowing)
    const imgSource = `https://unavatar.io/${userName}`
    const text = isFollow ? "siguiendo" : "seguir"
    const classButton = isFollow ? 'tw-btn isFollow' : 'tw-btn'
    
    
  const handleClick = () => {
    setFollow(!isFollow)
  }
    return (<article className='tw-card'>
        <header>
            
            <img src={imgSource}></img>
            <div>
                <strong>{name}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>
        <aside>
            <button className={classButton} onClick={handleClick}>
                <span className="tw-card-follow">{text}</span>
                <span className="tw-card-stop">dejar de seguir</span>
                </button>
        </aside>
    </article>)
};