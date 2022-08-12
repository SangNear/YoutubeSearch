import React from "react";
import { useEffect, useState } from "react"
class CountDown extends React.Component {
    state = {
        count: 5
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }

    componentDidUpdate(prevState) {
        if (prevState !== this.state.count && this.state.count == 0) {
            if (this.timer) {
                clearInterval(this.timer)

            }
        }
    }
    render() {
        return (
            <div>
                {this.state.count} class

            </div>
        )
    }
}

const NewCountDown = () => {
    const [count, setCount] = useState(5)

    useEffect(() => {
        if (count === 0) {
            return;
        }
        let timer = setInterval(() => {
            console.log("run me");
            setCount(count - 1)

        }, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <div>{count} hooks</div>
    )
}

export { CountDown, NewCountDown }