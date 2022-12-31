// ==UserScript==
// @name         Hacker News Readable Dark
// @namespace    https://greasyfork.org/en/users/961305-darkharden
// @include      https://news.ycombinator.com/*
// @match        https://news.ycombinator.com/*
// @version      2.0.16
// @author       Schalk Burger <schalkb@gmail.com>
// @description  Hacker News Readable Dark
// @license MIT
// ==/UserScript==

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
        }
    }

    const aThingNewsLinks = document.querySelectorAll(".news-link + tr .subline");
    for (let i = 0; i < aThingNewsLinks.length; i++) {
        // const aThingNewsLink = aThingNewsLinks[i];
        const sublineLinksArray = [];
        var k = 0;
        for (; k < aThingNewsLinks.length; k++) {
            sublineLinksArray.push(aThingNewsLinks[k]); // push hrefs in array
        }
        console.log("sublineLinksArray", sublineLinksArray)
        // Get comments ID
        // const aThingNewsLinkID = aThingNewsLink.id;
        // // Create link + comments anchor
        // const linkCommentSpan = document.createElement("span");
        // linkCommentSpan.setAttribute("id", aThingNewsLinkID);
        // linkCommentSpan.className = "link-comment-td";
        // linkCommentSpan.innerHTML = `<a href="${aThingNewsLinkID}" comments-id="${aThingNewsLinkID}" target="_blank" class="link-comment">[l+c]</a>`;
        // aThingNewsLink.append(linkCommentSpan);
    }


    const titleLineHrefs = document.querySelectorAll(".titleline > a");
    // var downloadLinks = document.querySelectorAll('[href*="/Download"]');
    var hrefsArray = []; // create an Array to save hrefs
    var j = 0;
    for (; j < titleLineHrefs.length; j++) {
        hrefsArray.push(titleLineHrefs[j].href); // push hrefs in array
    }
    // console.log(hrefsArray);
    //
    const newsLinks = document.querySelectorAll(".link-comment-td a");
    for (let i = 0; i < newsLinks.length; i++) {
        const newsLink = newsLinks[i];
        newsLink.setAttribute("href", hrefsArray[i])
    }

    // singleClickLinks
    const singleClickLinks = document.querySelectorAll(".link-comment-td a");
    for (let i = 0; i < singleClickLinks.length; i++) {
        const singleClickLink = singleClickLinks[i];
        const singleClickLinkCommentsID = singleClickLink.getAttribute("comments-id");
        const singleClickLinkCommentsIDLink = `https://news.ycombinator.com/item?id=${singleClickLinkCommentsID}`
        const singleClickLinkNewsLink = singleClickLink.getAttribute("href");
        singleClickLink.addEventListener('click', function (e) {
            e.preventDefault();
            // console.log("singleClickLink clicked")
            // console.log("singleClickLinkCommentsIDLink", singleClickLinkCommentsIDLink)
            // console.log("singleClickLinkNewsLink", singleClickLinkNewsLink)
            window.open(singleClickLinkCommentsIDLink)
            window.open(singleClickLinkNewsLink)
        });
    }
})();