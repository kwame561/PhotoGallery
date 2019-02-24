import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'

class Main extends Component {
    constructor() {
        super()
        // the below property is use for state management for each posts
        this.state = {
            posts: [
                {
                    id: "0",
                    description: "Spiderman",
                    imageLink: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/01/df-28509_r2_r-h_2017.jpg"
                }, {
                    id: "1",
                    description: "Mindfulness",
                    imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdoI48yvKHGyWM8KkoTiLZZWhNPqnmX3BYB6QFqwlhoqZG-nO"
                }, {
                    id: "2",
                    description: "Day at the Museum",
                    imageLink: require('../images/museum.jpg')
                }
                , {
                    id: "3",
                    description: "Downtown",
                    imageLink: require('../images/downtown.jpg')
                }
            ]
        }
        this.removePhoto = this.removePhoto.bind(this)
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    // lifecycle component evoked
    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    }

    render() {
        return (
                <div>
                    <Route exact path="/" render={() => (
                        <div>
                            <Title title = {"Courtney's Photowall"}/>
                            <PhotoWall posts = {this.state.posts} onRemovePhoto={this.removePhoto} onNavigate = {this.navigate}/>
                        </div>
                    )}/>
                    <Route path="/AddPhoto" render={({history}) => (
                        <AddPhoto onAddPhoto={(addedPost) => {
                            this.addPhoto(addedPost)
                            history.push("/")
                        }}/>
                    )}
                    />
                </div>
        )
    }
}

export default Main