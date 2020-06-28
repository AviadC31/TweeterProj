const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            $("#posts").append(`<div class='post'data-id="${post.id}">${post.text}
            <button class='delete' id="${post.id}">Delete</button>
            <button class='commentAdd'>Twit</button>
            </div>`)
            for (let comment of post.comments) {
                $(`div[data-id="${post.id}"]`).append(`<p class='comments' data-id="${comment.id}">${comment.text}</p>`)
                $(`p[data-id="${comment.id}"]`).append(`<p class='delete-comment'>X</p>`)
            }
        }
    }
    return {
        renderPosts
    }
}