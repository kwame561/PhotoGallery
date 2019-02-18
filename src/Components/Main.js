import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall';

class Main extends Component {
    constructor() {
        super()
        // the below property is use for state management for each posts
        this.state = {
            posts: [{
                id: "0",
                description: "Spiderman",
                imageLink: "https://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/01/df-28509_r2_r-h_2017.jpg"
            }, {
                id: "1",
                description: "Mindfulness",
                imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqdoI48yvKHGyWM8KkoTiLZZWhNPqnmX3BYB6QFqwlhoqZG-nO"
            }, {
                id: "2",
                description: "Date Night",
                imageLink: require('../images/evening_out.jpg')
            }
            , {
                id: "3",
                description: "Sherlock!",
                imageLink: require('../images/sherlock.jpg')
            }]
        }
        this.removePhoto = this.removePhoto.bind(this);
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    render() {
        return <div>
                    <Title title = {'Photowall'}/>
                    <PhotoWall posts = {this.state.posts} onRemovePhoto={this.removePhoto}/>
                </div>
    }
}

export default Main