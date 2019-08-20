
function addDetails(source) {
    const container = document.getElementsByClassName('grid-container');
    const g = document.getElementsByClassName("video-details");
    g[0].parentNode.removeChild(g[0]);
    container[0].appendChild(composeDetails(source));
}

function composeDetails(source) {
    return e('div', { class: "video-details" }, [
        e('div', { class: "video-name" }, [
            e('h2', {}, source.title)]),
        e('div', { class: "video-views" }, [
            e('h3', {}, source.views + " views")]),
        e('div', { class: "video-options features" }, [videoOptions(source.likes, source.dislikes)]),
        e('div', { class: "channel" }, [
            e('div', { id: "channel-logo" }, [
                e('img', { src: "avatar1.png", width: "50px", height: "50px" }, [])]),
            e('div', { id: "channel-name" }, [
                e('strong', { style: "font-size:16px" }, source.publisher),
                e('h3', { style: "font-size:13px" }, "Published on " + source.date)]),
            e('div', { id: "subscribe" }, [
                e('button', {}, [
                    e('h4', { style: "color:white" }, "SUBSCRIBE 226K")])]),
            e('div', { id: "video-description" }, source.description),
            e('div', { id: "show-more" }, [
                e('button', { style: "padding:0;" }, [
                    e('h4', { style: "margin:10px;color:#888" }, "SHOW MORE")
                ])
            ])
        ])
    ]);
}

function videoOptions(likes, dislikes) {
    return e('ul', { style: "margin-top:0;float:right" }, [
        e('li', {}, [
            e('button', {}, [
                e('img', { src: "buttons/likeButton.svg" }, []),
                e('h4', {}, likes.toString())])
        ]),
        e('li', {}, [
            e('button', {}, [
                e('img', { src: "buttons/dislikeButton.svg" }, []),
                e('h4', {}, dislikes.toString())])
        ]),
        e('li', {}, [
            e('button', {}, [
                e('img', { src: "buttons/share-btn.svg" }, []),
                e('h4', {}, "SHARE")])
        ]),
        e('li', {}, [
            e('button', {}, [
                e('img', { src: "buttons/save-btn.svg" }, []),
                e('h4', {}, "SAVE")])
        ]),
        e('li', {}, [
            e('button', {}, [
                e('img', { src: "buttons/options-btn.svg" }, [])])
        ]),
    ])
}