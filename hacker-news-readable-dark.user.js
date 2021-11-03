/* ==UserStyle==
@name           Hacker News Readable Dark Serendipity
@namespace      https://github.com/schalkburger/hacker-news-readable-dark/tree/serendipity
@version        1.0.0
@description    A more readable, dark version of Hacker News inspired by Serendipity VSCode Theme
@author         Schalk Burger
==/UserStyle== */
@-moz-document domain("news.ycombinator.com") {
	*,
	*::before,
	*::after {
	  box-sizing: border-box;
	}
}
@-moz-document url-prefix("https://news.ycombinator.com/") {

    :root {
        --color-raisinblack: #232834;
        --color-ebonyclay: #1f2430;
        --color-timberwolf: #cbccc6;
        --color-lightsalmon: #f29e74;
        --color-cyclamen: #f06897;
        --color-mauve: #d4bfff;
        --color-celeste: #9ef0f0;
        --color-lightskyblue: #73d0ff;
        --color-frenchskyblue: #78a9ff;
        --color-bluegreen: #519aba;
        --color-manatee: #8c94a3;
        --color-white: #ffffff;
        --color-charcoal: #333b4e;
        --color-darkgunmental: #191e2a;
        --color-davysgrey: #4f535e;
    }

    body,
    textarea,
    input {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        background: var(--color-raisinblack) !important;
        color: var(--color-timberwolf) !important;
    }

    a:link {
        color: var(--color-timberwolf) !important;
    }
    a:visited {
        color: var(--color-davysgrey) !important;
    }

    img {
        filter: grayscale(1);
    }

    table#hnmain {
        margin-top: 20px;
        max-width: 700px;
        background-color: rgba(125, 124, 124, 0);
    }

    td {
        font-size: 12pt;
        line-height: 16pt;
    }

    textarea,
    input {
        padding: 10px;
        border: 1px solid var(--color-davysgrey);
        background: var(--color-darkgunmental) !important;
    }

    .pagetop a:visited {
        color: #fff !important;
    }

    td[bgcolor='#ff6600'] {
        background-color: transparent !important;
    }

    /* Main News Feed  */

    .title {
        color: var(--color-timberwolf) !important;
        padding-left: 10px;
        padding-right: 10px;
    }

    .title a {
        font-size: 13pt;
        color: var(--color-timberwolf);
        line-height: 1.4;
        font-weight: 500;
    }

    span.sitebit.comhead a > span {
        color: var(--color-manatee) !important;
        font-size: 10pt;
    }

    .subtext,
    .subtext a,
    .subtext .score,
    .subtext .age a {
        color: #7a7b7e !important;
    }

    .subtext {
        padding-left: 10px;
    }

    tr.spacer {
        height: 2px !important;
        background-color: rgba(0, 0, 0, 0) !important;
    }

    /* tr.spacer:nth-child(2n + 1) {
        box-shadow: 0 1.7px 1.4px rgba(0, 0, 0, 0.112),
        0 4px 3.3px rgba(0, 0, 0, 0.162), 0 7.5px 6.3px rgba(0, 0, 0, 0.2),
        0 13.4px 11.2px rgba(0, 0, 0, 0.238), 0 25.1px 20.9px rgba(0, 0, 0, 0.288),
        0 60px 50px rgba(0, 0, 0, 0.4);
    } */

    tr.athing td {
        padding-top: 20px;
        border-top: none;
    }

    tr.athing.comtr td * td {
        border-top: none;
        padding-bottom: 20px;
    }

    td.subtext {
        padding-top: 0;
    }

    .itemlist tbody tr:nth-of-type(1n + 1):nth-child(2n-1) td {
        background-color: #1f2430 !important;
    }

    .itemlist tbody tr.athing:nth-of-type(2n) + tr td {
        background-color: var(--color-raisinblack) !important;
        padding-bottom: 20px;
    }

    .itemlist tbody tr.athing:nth-of-type(2n-1) + tr td {
        background-color: #1f2430 !important;
        padding-bottom: 20px;
    }

    /* Comments  */

    .comment-tree .comment,
    .fatitem .comment {
        font-size: 10pt;
        line-height: 20pt;
    }

    .comment-tree .comment {
        background-color: #1f2430;
        padding: 40px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
        0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
        0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
        0 100px 80px rgba(0, 0, 0, 0.07);
    }

    tr.athing:nth-child(even) td .comment {
        background-color: var(--color-darkgunmental);
    }

    .fatitem {
        background: #fff0;
        width: 100%;
        padding: 0 0 20px 0;
        border-bottom: 2px solid var(--color-davysgrey);
    }

    .fatitem .comment {
        background: #f7f5f5;
        padding: 15px 25px;
    }

    .comment .c00 {
        color: var(--color-timberwolf) !important;
    }

    .fatitem .title a:visited {
        color: #fff !important;
    }
}