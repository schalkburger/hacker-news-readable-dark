// ==UserScript==
// @name         Hacker News Readable Dark
// @namespace    https://greasyfork.org/en/users/961305-darkharden
// @include      https://news.ycombinator.com/*
// @match        https://news.ycombinator.com/*
// @version      2.0.11
// @author       Schalk Burger <schalkb@gmail.com>
// @description  Hacker News Readable Dark
// @license MIT
// ==/UserScript==

// To-do
// Add click event listener that opens links and comments
// Find nearest .age a link

(function () {
    "use strict";
    // Init script
    let version = GM_info.script.version;
    console.log(`Hacker News Readable Dark ${version}`);
    // Add target blank to links
    const titleLinks = document.querySelectorAll(".titleline a");
    for (let i = 0; i < titleLinks.length; i++) {
        const titleLink = titleLinks[i];
        titleLink.setAttribute("target", "_blank");
        const titleLinkHref = titleLink.href;
        // console.log("titleLinkHref", titleLinkHref)
    }
    // Add target blank to comments
    const commentLinks = document.querySelectorAll(".age a");
    for (let i = 0; i < commentLinks.length; i++) {
        const commentLink = commentLinks[i];
        commentLink.setAttribute("target", "_blank");
        const commentLinkHref = commentLink.href;
        // console.log("commentLinkHref", commentLinkHref)
    }
    // Add target blank to comments
    const subTextElements = document.querySelectorAll(".subtext");
    for (let i = 0; i < subTextElements.length; i++) {
        const subTextElement = subTextElements[i];
        subTextElement.classList.add("subtext-element")
        // console.log("subTextElementHref", subTextElementHref)
    }

    // Insert L+C link
    const linkCommentSpan = document.createElement("span");
    linkCommentSpan.innerHTML = `<a href="#" class="link-comment">[L+C]</a>`;
    const linkCommentContainer = document.querySelector(".subline");
    const linkCommentParent = linkCommentContainer.parentNode;
    linkCommentParent.insertBefore(linkCommentSpan, linkCommentContainer.nextSibling);
    //
    const newsLinks = document.querySelectorAll(".titleline > a");
    for (let i = 0; i < newsLinks.length; i++) {
        const newsLink = newsLinks[i];
        newsLink.setAttribute("target", "_blank");
        const newsLinkHref = newsLink.href;
        console.log("newsLinkHref", newsLinkHref);
        const linkCommentSpanAnchor = document.querySelector(".link-comment");
        function setLinkCommentSpanAnchor() {
            linkCommentSpanAnchor.setAttribute("href", newsLinkHref);
            linkCommentSpan.addEventListener("click", function () {
                console.log("L+C link clicked");
                // window.open("https://cnn.com");
            });
        }
        setTimeout(setLinkCommentSpanAnchor, 500);
    }

})();