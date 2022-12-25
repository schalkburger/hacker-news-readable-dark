// ==UserScript==
// @name         Hacker News Readable Dark
// @namespace    https://greasyfork.org/en/users/961305-darkharden
// @include      https://news.ycombinator.com/*
// @match        https://news.ycombinator.com/*
// @version      2.0.1
// @author       Schalk Burger <schalkb@gmail.com>
// @description  Hacker News Readable Dark
// @license MIT
// ==/UserScript==

// To-do
// Add click event listener that opens link and comments

(function () {
    "use strict";
    console.log("Hacker News Readable Dark 2.0.1");
    // Open Hacker News links in new tab
    const titleLink = document.querySelectorAll(".titleline a");
    for (let i = 0; i < titleLink.length; i++) {
        const theLink = titleLink[i];
        theLink.setAttribute("target", "_blank");
        console.log("theLink:", theLink);
    }
    // Open Hacker News comments in new tab
    const commentLink = document.querySelectorAll(".age a");
    for (let i = 0; i < commentLink.length; i++) {
        const theCommentLink = commentLink[i];
        theCommentLink.setAttribute("target", "_blank");
        console.log("theCommentLink:", theCommentLink);
    }

})();