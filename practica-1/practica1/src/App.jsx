import './App.css'  
import {TwitterFollowCard} from './TwitterFollowCard'
export function App(){
    const format = (userName) => `@${userName}`
    return (
        <section className='app'>
        <TwitterFollowCard formatUserName={format} userName="jean041519" name="Jean Carlos Melgar" initialIsFollowing/>
        <TwitterFollowCard formatUserName={format} userName="elonmusk" name="elon Musk" initialIsFollowing={false}/>
        <TwitterFollowCard formatUserName={format} userName="alberteinstein" name="Albert Einstein" initialIsFollowing={true}/>
        <TwitterFollowCard formatUserName={format} userName="Milycyrus" name="Miley Cyrus" initialIsFollowing={false}/>
        </section>
    )
};