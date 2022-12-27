// ==UserScript==
// @name         Hacker News Readable Dark
// @namespace    https://greasyfork.org/en/users/961305-darkharden
// @include      https://news.ycombinator.com/*
// @match        https://news.ycombinator.com/*
// @version      2.0.13
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
    // titleLinks
    const titleLinks = document.querySelectorAll(".titleline > a");
    for (let i = 0; i < titleLinks.length; i++) {
        const titleLink = titleLinks[i];
        titleLink.setAttribute("target", "_blank");
        titleLink.classList.add("news-link");

    }

    const newsLinks = document.querySelectorAll(".news-link");
    for (let i = 0; i < newsLinks.length; i++) {
        const newsLink = newsLinks[i];
        const newsLinkHref = newsLink.href;
        console.log("newsLinkHref", newsLinkHref)
        // singleClickLink.setAttribute("href", newsLinkHref);
    }

    // Insert L+C link
    const subTextLinks = document.querySelectorAll(".subline");
    for (let i = 0; i < subTextLinks.length; i++) {
        const subTextLink = subTextLinks[i];
        //
        const linkCommentSpan = document.createElement("span");
        linkCommentSpan.innerHTML = `<a href="#" target="_blank" class="link-comment">[L+C]</a>`;
        const linkCommentParent = subTextLink.parentNode;
        linkCommentParent.append(linkCommentSpan);
        const subTextCommentLinks = document.querySelectorAll(".age a");
        const linkComments = document.querySelectorAll(".link-comment");
        let arrHREF = []; // create an Array to save hrefs
        let j = 0;
        for (; j < subTextCommentLinks.length; j++) {
            arrHREF.push(subTextCommentLinks[j].href); // push hrefs in array
            console.log("subTextCommentLink", subTextCommentLinks[j].href)
            let k = 0;
            for (; k < linkComments.length; k++) {
                const linkComment = linkComments[k];
                arrHREF.push(linkComments[k].href); // push hrefs in array
                linkComment.setAttribute("href", subTextCommentLinks[j].href);
                console.log("linkComments", subTextCommentLinks[j].href)
            }
        }
    }

    // singleClickLink
    // const singleClickLinks = document.querySelectorAll(".link-comment");
    // for (let i = 0; i < singleClickLinks.length; i++) {
    //     const singleClickLink = singleClickLinks[i];
    //     const newsLinks = document.querySelectorAll(".news-link");
    //     for (let i = 0; i < newsLinks.length; i++) {
    //         const newsLink = newsLinks[i];
    //         const newsLinkHref = newsLink.href;
    //         singleClickLink.setAttribute("href", newsLinkHref);
    //     }
    //     singleClickLink.addEventListener('mousedown', function (e) {
    //         e.preventDefault();
    //         console.log("singleClickLink clicked")
    //     });
    // }


})();