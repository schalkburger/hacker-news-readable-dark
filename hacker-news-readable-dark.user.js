@-moz-document url-prefix("https://news.ycombinator.com/") {
    body,
    .title {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        background: #141414 !important;
        color: #b2b6b9 !important;
    }


    table#hnmain {
        max-width: 700px;
        background-color: rgba(125, 124, 124, 0);
    }

    td {
        background-color: transparent;
    }

    .title {
        color: #b2b6b9 !important;
    }

    img {
        filter: grayscale(1);
    }

    .title a {
        font-size: 12pt;
        color: #b2b6b9 !important;
        line-height: 1.4;
        font-weight: 500;
    }

    a:link {
        color: #b2b6b9 !important;
    }
    a:visited {
        color: #4c5053 !important;
    }

    .subtext a {
        color: #606060 !important;
    }

    tr.spacer {
        height: 20px !important;
        box-shadow: 0px 1px 0 0px #ececec;
    }

    tr.athing td {
        padding-top: 20px;
        border-top: 1px solid #1f1f1f;
    }

    td.subtext {
        padding-top: 8px;
    }

    .comment-tree .comment,
    .fatitem .comment {
        font-size: 10pt;
        line-height: 20pt;
    }

    .fatitem {
        background: #fff0;
        width: 100%;
        padding: 0 0 20px 0;
        border-bottom: 2px solid #ccc;
    }

    .fatitem .comment {
        background: #f7f5f5;
        padding: 15px 25px;
    }

    .comment .c00 {
        color: #dddddd !important;
    }
}