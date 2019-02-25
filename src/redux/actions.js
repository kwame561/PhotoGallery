// remove

export function removePost(index) {
    return {
        type: 'REMOVE_POST',
        index
    }
}

// adding a post
export function addPost(post) {
    return {
        type: 'ADD_POST',
        post
    }
}