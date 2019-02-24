import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

// anchor tag, and href attributes
function PhotoWall(props) {
        return  <div>
                        <Link className="add-icon" to="/AddPhoto"><FontAwesomeIcon className="fapluscircle" icon={faPlusCircle}/></Link>
                        <div className="photo-grid">
                                {props.posts
                                        .sort(function(x,y) {
                                                return y.id - x.id
                                        })
                                        .map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
                        </div>
                </div>
}

PhotoWall.propTypes = {
        posts: PropTypes.array.isRequired,
        onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall