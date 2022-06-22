import './Card.css'

const Card = ()=>{
    return(
        <div className="Card">
            <img src="https://img.freepik.com/free-vector/realistic-music-record-label-disk-mockup_1017-33906.jpg?t=st=1655824958~exp=1655825558~hmac=ddba9fb9293aee6ac70d743e2fb622b3d0359c80bc5ed26eec25aa67c1e4a171&w=826" alt="" />
            <div className="details">
                <p>username</p>
                <p>Title</p>
            </div>
            <div className="time">
                <p>10:10</p>
                <p>29323</p>
            </div>
        </div>
    )
}
export default Card;