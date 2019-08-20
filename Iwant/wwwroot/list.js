function e(tag, attr, child) {
    const node = document.createElement(tag);
    const attributes = attr || {};
    let childNodes = child || [];
    if (typeof child === "string") {
        childNodes = [document.createTextNode(child)];
    }
    childNodes.forEach(c => node.appendChild(c));

    Object.keys(attributes)
        .forEach(k => {
            if (typeof attributes[k] === "function") { node.addEventListener(k, attributes[k]); }
            else { node.setAttribute(k, attributes[k]); }
        });
    return node;
}

async function loadVideos() {
    const response = await fetch("videos.json");
    const videos = await response.json();
    loadNextVideos(videos);
    
}

function loadNextVideos(nextVideos) {
    var list = document.querySelector(".videos ul");
    nextVideos
        .map(v => video(v))
        .forEach(x => list.appendChild(x));
}

function video(videoDetails) {
    return e("li", {}, [
        e("a", { class: "yt-video", href: "#", click: () => addVideo(videoDetails) }, [
            e("img", { src: videoDetails.thumbnail, class: "poster" }, []),
            details(videoDetails)
        ])
    ]);
}
function addVideo(videoDetails) {
    document.getElementById("myVideo").src =videoDetails.source;
    loadComments(videoDetails.comments);
    addDetails(videoDetails);
}

function thumbnail(source) {
    var node = document.createElement("img");
    node.className = "poster";
    node.src = source;
    return node;
}

function details(videoDetails) {
    var nod = document.createElement("div");
    nod.className = "video-elements"
    nod.appendChild(title(videoDetails.title));
    nod.appendChild(publisher(videoDetails.publisher));
    nod.appendChild(views(videoDetails.views));
    return nod;
}

function title(title) {

    var x = document.createElement('strong');
    x.innerText = title;
    return x;
}

function publisher(publisher) {
    var x = document.createElement('h5');
    x.innerText = publisher;
    return x;
}

function views(views) {
    const text = document.createElement('h5');
    text.id = "viewers";
    text.innerText = views;
    return text;
}

