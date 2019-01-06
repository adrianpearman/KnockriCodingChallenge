import React, { Component } from 'react'
import axios from 'axios';

import VideoDetails from './VideoDetail'
import MessageContainer from './MessageContainer'

// Component to highlight all of the candidate information
class CandidateDetails extends Component {
    state = {
        videos: [],
        videoId: '',
        question: [],
        comments: '',
        videoListContainer: null
    }

    // function fires when it is loaded to the screen
    componentDidMount() {
        // reaches out to the api to grab the candidate applications
        axios.get('http://localhost:4000/applications')
            .then((application) => {
                const appId = this.props.location.state.applicationId
                const applicationList = application.data
                // returns the application videos where the applicationId matches the id of the candidate
                const applicantInfo = applicationList.filter((app) => {
                    return app.id === appId
                })
                // sets state to the matching candidate videos
                this.setState({
                    videos: applicantInfo[0].videos,
                    videoId: applicantInfo[0].id
                })
            })
            .then(() => {
                // reaches out to the api to grab the questions
                axios.get('http://localhost:4000/questions')
                    .then((questions) => {
                        const question = questions.data
                        this.setState({ question: question })
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    render() {
        let applicationId = this.props.location.state.applicationId
        let id = this.props.location.state.id
        let name = this.props.location.state.name

        // renders the list of videos and questions to the screen
        let videoList = this.state.videos.map((video, index) => {
            // filters the questions to match the appropriate videos
            let question = this.state.question.filter((q) => {
                return q.id === video.questionId
            })
            // grabbing the question title from the returned matched question
            let questionName = question.map((q) => { return q.question })[0]

            // console.log(video)

            // returning the reusable the component with the prop values
            return <VideoDetails key={index} videoSRC={video.src} question={questionName} />
        })

        // unable to create a boolean value but have grabbed the length to create an turinary value.
        let videoListContainer = this.state.videos.length

        let textAlign = {
            textAlign: 'center'
        }
        return (
            <div className="card bg-secondary mb-3">
                <div className="card-header" style={textAlign}>
                    <h3>{name}</h3>
                </div>
                <div className="card-body" style={textAlign}>
                    {/* rendering the correct component based on the video list */}
                    <h4 className="card-title">
                        Applicant ID: {id}{videoListContainer > 0 ? ` - Application ID: ${applicationId}` : ''}
                    </h4>


                    {videoListContainer < 1 ? <MessageContainer name={name} /> : videoList}
                </div>
            </div>
        )
    }
}

export default CandidateDetails