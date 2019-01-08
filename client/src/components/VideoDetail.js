import React, { Component } from "react"
import axios from 'axios'
import CommentList from './CommentList'

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

const inputStyle = {
    padding: '20px',
    width: '80%'
}

class VideoDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            comment: '',
            comments: [],
        }

        this.postCommentHandler = this.postCommentHandler.bind(this)
        this.submitCommentHandler = this.submitCommentHandler.bind(this)
    }

    postCommentHandler(event) {
        event.preventDefault()
        let comment = event.target.value
        this.setState({ comment: comment })
    }

    submitCommentHandler(event) {
        event.preventDefault()
        let applicantId = this.props.applicationId
        let comments = this.state.comments
        // removes any trailing whihte space from the comment
        comments.push(this.state.comment.trim())
        // grabs list of existing videos
        const videos = this.props.appState.videos
        // updates the specific video object by filtering on the video url.
        // in the future it maybe better to attach an id for each video instance
        let updatedVideo = videos.filter((video) => {
            return video.src === this.props.videoSRC
        })
        // replaceing the comments with the new comments list
        updatedVideo[0].comments = comments
        // returns the list of the other videos
        const videoList = videos.filter((video) => {
            return video.src !== this.props.videoSRC
        })
        // creates an array object of the new and old videos
        videoList.push(updatedVideo[0])

        // compiled object to replace existing object with new comment information  
        const submitObject = {
            id: applicantId,
            videos: videoList
        }

        // submits the updated object to the server
        axios
            .put(`http://localhost:4000/applications/${applicantId}`, submitObject)
            .then((response) => {
                this.setState({ comment: '' })
            })
            .catch(err => { console.log(err) })
    }

    componentDidMount(){
        // Will grab the list of comments from the api file when loaded
        const comments = this.props.comments
        // iterates all of the comments
        comments.forEach(index => {
            return this.state.comments.push(index)
        })
    }

    render() {
        let commentsArray = this.state.comments

        return(
            <div className="card mb-3" style={cardStyle}>
                <div className='card__container' style={cardContainer}>
                    <div className="card-body">
                        <video className='mb-2' width='70%' height='auto' controls>
                            <source src={this.props.videoSRC} type='video/mp4' />
                        </video>
                        <h5 className="card-title">Question</h5>
                        <p className="card-text">
                            {this.props.question}
                        </p>
                        <hr/>
                        <CommentList comments={commentsArray}/>
                        <hr/>
                        <input
                            className='mb-4'
                            value={this.state.comment}
                            style={inputStyle}
                            onChange={this.postCommentHandler}
                            placeholder='Please Enter Comment'
                        />
                        <br />
                        <button onClick={this.submitCommentHandler} className="btn btn-primary" disabled={!this.state.comment}>
                            Add Comment
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoDetails