import {CountDown, NewCountDown} from "./CountDown/CountDown"

const Home = () => {
    return (
        <div>
            <CountDown/>
            <span>--------------------</span>
            <NewCountDown/>
            Hello from home
        </div>
    )
}

export default Home