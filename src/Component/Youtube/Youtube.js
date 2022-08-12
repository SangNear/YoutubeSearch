import { useEffect, useState } from "react"
import axios from "axios"
import "./Youtube.scss"
const Youtube = () => {
    const [query, setQuery] = useState('')
    const [video, setVideo] = useState('')

    const HandleSearchYoutube = async () => {

        let res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params": {
                'part': 'snippet',
                'maxResults': '5',
                'key': 'AIzaSyAW8mqXLXs7xoqpzM6G5uKCBQehX42tGNI',
                'type': 'video',
                'q': query
            }
        })
        if(res && res.data.items) {
            let raw = res.data.items
            let result = []
            if(raw && raw.length > 0) {
                raw.map((item) => {
                    let obj = {}
                    obj.id = item.id.videoId
                    obj.title = item.snippet.title
                    obj.author = item.snippet.channelTitle
                    obj.des = item.snippet.description

                    result.push(obj)
                })

                
            }
            setVideo(result)
        }

    }

    return (

        <div className="youtube-container">
            <div className="search">
                <input
                    type="text"
                    className="input-search"
                    placeholder="Search video"
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button className="btn-search" onClick={() => { HandleSearchYoutube() }}>Search</button>
            </div>
            {
                
                video && video.length > 0 &&
                video.map((item) => {
                    
                    return (
                        
                        <div className="content">
                            <div className="video">
                                <iframe width="100%" height="300" src={`https://www.youtube.com/embed/${item.id}`} title="Vì sao Mouse (Kẻ Săn Người) Là Series Phim Xuất Sắc Nhất Của Hàn Quốc ?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div className="video-info">
                                <div className="title-name">
                                    {item.title}
                                </div>

                                <div>
                                    <span className="views">105 N lượt xem - </span>
                                    <span className="created at">1 tháng trước</span>
                                </div>
                                <div className="owner">{item.author}</div>
                                <div className="description">{item.des}</div>


                            </div>
                        </div>
                    )
                })
            }


            


        </div>
    )
}

export default Youtube