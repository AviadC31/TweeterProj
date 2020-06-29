function Tweeter() {

    let posts = []
    let comments = []
    let postIdCounter = 0
    let commentIdCounter = 0

    function getPosts() {
        return posts
    }
    function addPost(text) {
        postIdCounter++
        posts.push({
            text: text,
            id: "p" + postIdCounter.toString(),
            comments: []
        })
        return
    }
    function removePost(postID) {

        for (let post in posts) {
            if (posts[post].id === postID) {
                posts.splice(post, 1)
                break
            }
        }
        return
    }

    function addComment(text, postID) {
        for (let post of posts) {
            if (post.id === postID) {
                commentIdCounter++
                post.comments.push({ id: "c" + commentIdCounter.toString(), text: text })
                break
            }
        }
        return
    }
    function removeComment(postID, commentID) {
        for (post of posts) {
            if (post.id === postID)
                for (let comIndex in post.comments) {
                    if (post.comments[comIndex].id === commentID) {
                        post.comments.splice(comIndex, 1)
                        break
                    }
                }
        }
        return
    }
    return {
        addPost,
        removePost,
        getPosts,
        addComment,
        removeComment
    }
}


