
async function loadComments(source) {
    const response = await fetch(source);
    const comments = await response.json();
    loadAllComments(comments);
}

function loadAllComments(comments) {
    const list = document.querySelector(".comments>ul");
    list.innerHTML = "";
    comments
        .map(c => commentContent(c))
        .forEach(d => list.appendChild(d));

}

function commentContent(details) {
    const listItem = e("li", { class: "comment" }, [
        e("img", { class: "avatar", src: details.publisher.logo }, []),
        e("div", { class: " features", style: "text-align:left;margin :5px 0px" }, [
            e("b", { style: "margin:0px 5px; font-size:14px" }, details.publisher.name),
            e("span", { style: "font-size:13px;color:#777" }, details.date),
            e("h5", { style: "font-size:16px;margin:4px 8px" }, details.comment),
            allButtons(details.likes),
            e("strong", { style: "font-size:13px;margin:4px" }, "Show 24 replies")
        ]),
    ]);
    return listItem;
}


