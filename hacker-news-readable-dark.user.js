// ==UserScript==
// @name         Hacker News Readable Dark
// @namespace    https://greasyfork.org/en/users/961305-darkharden
// @include      https://news.ycombinator.com/*
// @match        https://news.ycombinator.com/*
// @version      2.0.9
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
    // Open Hacker News links in new tab
    const titleLinks = document.querySelectorAll(".athing a, .subtext a");
    for (let i = 0; i < titleLinks.length; i++) {
        const titleLink = titleLinks[i];
        titleLink.setAttribute("target", "_blank");
        // console.log("titleLink:", titleLink);
        // Open link + comments with one click
        titleLink.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Hacker News link clicked");
            function openLinkAndComments() {
                console.log("openLinkAndComments function ran")
            }
            setTimeout(openLinkAndComments, 100);
        });
    }


})();