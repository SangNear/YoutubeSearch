

import { useParams } from "react-router-dom"
import useFetch from "../Customize/fetch"
const DetailUser = () => {
    let { id } = useParams()
    
    const { data } = useFetch(`https://reqres.in/api/users/${id}`)
    
    let dataUser = data.data
    console.log("check id and dataUser", id,dataUser);
    return (
        <div className="detail-user-container">
            {dataUser &&
                <>
                    <div className="avatar">
                        <img src={dataUser.avatar} />
                    </div>

                    <div className="info">
                        <p>Full Name: {dataUser.first_name} {dataUser.last_name}</p>
                        <p>Email: {dataUser.email} </p>
                    </div>
                </>

            }


        </div>
    )

}

export default DetailUser