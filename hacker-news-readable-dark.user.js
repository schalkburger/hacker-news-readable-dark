// ==UserScript==
// @name         Hacker News Readable Dark
// @namespace    https://greasyfork.org/en/users/961305-darkharden
// @include      https://news.ycombinator.com/*
// @match        https://news.ycombinator.com/*
// @version      2.0.10
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
    // Open Hacker News links in new tab
    const titleLinks = document.querySelectorAll(".athing a, .subtext a");
    for (let i = 0; i < titleLinks.length; i++) {
        const titleLink = titleLinks[i];
        titleLink.setAttribute("target", "_blank");
        // console.log("titleLink:", titleLink);
        const commentLinks = document.querySelectorAll(".age a");
        for (let i = 0; i < commentLinks.length; i++) {
            const commentLink = commentLinks[i];
            console.log("commentLink", commentLink.href)
        }

        // Open link + comments with one click
        titleLink.addEventListener("click", function () {
            console.log("Hacker News link clicked");
            // window.open("https://cnn.com");
        });
    }


})();