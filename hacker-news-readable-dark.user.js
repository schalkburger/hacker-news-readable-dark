@-moz-document url-prefix("https://news.ycombinator.com/") {

    /* Globals  */

    body,
    textarea,
    input {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        background: #141414 !important;
        color: #b2b6b9 !important;
    }
    a:link {
        color: #b2b6b9 !important;
    }
    a:visited {
        color: #4c5053 !important;
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
        border: 2px solid #2b2b2b;
    }

    .pagetop a:visited {
        color: #fff !important;
    }

    td[bgcolor='#ff6600'] {
        background-color: transparent !important;
    }

    /* Main News Feed   */

    .title {
        color: #b2b6b9 !important;
        padding-left: 10px;
        padding-right: 10px;
    }

    .title a {
        font-size: 13pt;
        color: #b2b6b9;
        line-height: 1.4;
        font-weight: 500;
    }

    span.sitebit.comhead a > span {
        color: #545454 !important;
        font-size: 10pt;
    }

    .subtext,
    .subtext a,
    .subtext .score,
    .subtext .age a {
        color: #6d6d6d !important;
    }

    .subtext {
        padding-left: 10px;
    }

    tr.spacer {
        height: 2px !important;
        background-color: rgba(0, 0, 0, 0) !important;
    }

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

    /* Comments */

    .comment-tree .comment,
    .fatitem .comment {
        font-size: 10pt;
        line-height: 20pt;
    }

    .comment-tree .comment {
        background-color: #1b1b1b;
        padding: 40px;
    }

    .fatitem {
        background: #fff0;
        width: 100%;
        padding: 0 0 20px 0;
        border-bottom: 2px solid #2b2b2b;
    }

    .fatitem .comment {
        background: #f7f5f5;
        padding: 15px 25px;
    }

    .comment .c00 {
        color: #b2b6b9 !important;
    }

    .fatitem .title a:visited {
        color: #fff !important;
    }

}