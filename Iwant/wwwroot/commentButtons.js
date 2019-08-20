function likeButton() {
    return e("li", {}, [
        e("button", {}, [
            e("img", { src: "buttons/likeButton.svg", width: "20px" }, [])
        ])
    ]);
}

function dislikeButton() {
    return e("li", {}, [
        e("button", {}, [
            e("img", { src: "buttons/dislikeButton.svg", width: "20px" }, [])
        ])
    ]);
}

function replyButton() {
    return e("li", {}, [
        e("button", {}, [
            e("h4", {}, "REPLY")
        ])
    ]);
}

function likesCount(count) {
    return e("li", {}, [
        e("h4", {}, count.toString())
    ])
}

function allButtons(likes) {
    return e("ul", { class: "comment-buttons" }, [
        likeButton(),
        likesCount(likes),
        dislikeButton(),
        replyButton()
    ]);
}