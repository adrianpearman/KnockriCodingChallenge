import React from "react"

const cardStyle = {
    width: '60%',
    marginLeft: '20%',
    marginRight: '20%',
}

const cardContainer = {
    textAlign: 'center',
    marginTop: '30px',
    marginBottom: '30px',
}

const VideoDetails = (props) => {
    return (
        <div className="card mb-3" style={cardStyle}>
            <div className='card__container' style={cardContainer}>
                <div className="card-body">
                    <video className='mb-2' width='70%' height='auto' controls>
                        <source src={props.videoSRC} type='video/mp4' />
                    </video>
                    <h5 className="card-title">Question</h5>
                    <p className="card-text">
                        {props.question}
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </div>
    )
}

export default VideoDetails