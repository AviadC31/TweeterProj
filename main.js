const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())


$('#post').on('click', function () {
    tweeter.addPost($(this).closest("#container").find("input").val())
    $(this).closest("#container").find("input").val('')
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', `.delete`, function () {
    tweeter.removePost($(this).parent().data().id)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.commentAdd', function () {
    tweeter.addComment($(this).closest("#container").find("input").val(), $(this).parent().data().id)
    $(this).closest("#container").find("input").val('')
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click','.delete-comment', function () {
    tweeter.removeComment($(this).parent().parent().data().id, $(this).parent().data().id)
    renderer.renderPosts(tweeter.getPosts())
})


