// ==UserScript==
// @name         Hacker News Readable Dark
// @namespace    https://greasyfork.org/en/users/961305-darkharden
// @include      https://news.ycombinator.com/*
// @match        https://news.ycombinator.com/*
// @version      1.0.2
// @author       Schalk Burger <schalkb@gmail.com>
// @description  Hacker News Readable Dark
// @license MIT
// ==/UserScript==

(function () {
    "use strict";
    console.log("Hacker News Readable Dark");
    let cells = document.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        let td = cells[i];
        if ('title' === td.className) {
            let links = td.getElementsByTagName('a');
            console.log("links -->", links);
            if (links.length > 0) {
                let link = links[0];
                link.setAttribute("target", "_blank");
                console.log("link -->", link);
            }
        }
        if ('subtext' === td.className) {
            let commentsLinks = td.getElementsByTagName('a');
            console.log("commentsLinks -->", commentsLinks);
            if (commentsLinks.length > 0) {
                let commentsLink = commentsLinks[1];
                commentsLink.setAttribute("target", "_blank");
                console.log("commentsLink -->", commentsLink);
            }
        }
    }
})();