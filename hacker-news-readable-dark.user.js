// ==UserScript==
// @name         Hacker News Readable Dark
// @namespace    https://greasyfork.org/en/users/961305-darkharden
// @include      https://news.ycombinator.com/*
// @match        https://news.ycombinator.com/*
// @version      2.0.15
// @author       Schalk Burger <schalkb@gmail.com>
// @description  Hacker News Readable Dark
// @license MIT
// ==/UserScript==

// To-do
// Add click event listener that opens links and comments

(function () {
    "use strict";
    // Init script
    let version = GM_info.script.version;
    console.log(`Hacker News Readable Dark ${version}`);
    // titleLinks
    const aThings = document.querySelectorAll(".athing");
    for (let i = 0; i < aThings.length; i++) {
        const aThing = aThings[i];
        aThing.classList.add("news-link");
        // Open new link and add class
        const titleLineLinks = document.querySelectorAll(".titleline > a");
        for (let i = 0; i < titleLineLinks.length; i++) {
            const titleLineLink = titleLineLinks[i];
            titleLineLink.setAttribute("target", "_blank");
            const titleLinkLinkHref = titleLineLink.href;
            console.log("titleLinkLinkHref", titleLinkLinkHref)
        }
        // Get comments ID
        const aThingID = aThing.id;
        const linkCommentSpan = document.createElement("td");
        linkCommentSpan.setAttribute("id", aThingID);
        linkCommentSpan.className = "link-comment-td";
        linkCommentSpan.innerHTML = `<a href="" comments-id="${aThingID}" target="_blank" class="link-comment">[L+C]</a>`;
        aThing.append(linkCommentSpan);
        // Get news link
    }


    // singleClickLinks
    const singleClickLinks = document.querySelectorAll(".link-comment-td a");
    for (let i = 0; i < singleClickLinks.length; i++) {
        const singleClickLink = singleClickLinks[i];
        const singleClickLinkCommentsID = singleClickLink.getAttribute("comments-id");
        const singleClickLinkCommentsIDLink = `https://news.ycombinator.com/item?id=${singleClickLinkCommentsID}`
        const singleClickLinkNewsLink = singleClickLink.getAttribute("link");
        singleClickLink.addEventListener('click', function (e) {
            e.preventDefault();
            console.log("singleClickLink clicked")
            console.log("singleClickLinkCommentsIDLink", singleClickLinkCommentsIDLink)
            window.open(singleClickLinkCommentsIDLink)
            console.log("singleClickLinkNewsLink", singleClickLinkNewsLink)
        });
    }
})();