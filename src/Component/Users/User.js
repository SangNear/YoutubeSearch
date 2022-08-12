
import { Link } from "react-router-dom"
import useFetch from "../Customize/fetch"

import "./Users.scss"
const User = () => {
    const { data, loading } = useFetch('https://reqres.in/api/users')
    let dataUsers = data.data

    return (
        <div className="user-container">
            <div className="user-list">
                {loading === false && dataUsers && dataUsers.length > 0
                    && dataUsers.map((item) => {
                        return (
                            <div className="user-item" key={item.id}>
                                <span>
                                    {item.id} - {item.first_name} {item.last_name}
                                    <button className="btn">
                                        <Link to={`/user/${item.id}`}>View detail</Link>
                                    </button>
                                </span>

                            </div>
                        )

                    })
                }
                {loading === true &&
                    <div className="user-item">
                        Loading ...
                    </div>
                }


            </div>
        </div>
    )
}

export default User 