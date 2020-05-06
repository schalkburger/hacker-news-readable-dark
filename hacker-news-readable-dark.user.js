@-moz-document url-prefix("https://news.ycombinator.com/") {
body {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	background: #141414 !important;
	color: #b2b6b9 !important;
}

img {
	filter: grayscale(1);
}

table#hnmain {
	max-width: 700px;
	background-color: rgba(125, 124, 124, 0);
}

td {
	background-color: transparent;
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
	color: #b2b6b9 !important;
	font-size: 12pt;
	line-height: 16pt;
}

textarea,
input {
	background: #ccc;
}

.title {
	color: #b2b6b9 !important;
	padding-left: 10px;
	padding-right: 10px;
}

.title a {
	font-size: 13pt;
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

tr.spacer:nth-child(2n+1) {
	box-shadow: 0 1.7px 1.4px rgba(0, 0, 0, 0.112),
	0 4px 3.3px rgba(0, 0, 0, 0.162),
	0 7.5px 6.3px rgba(0, 0, 0, 0.2),
	0 13.4px 11.2px rgba(0, 0, 0, 0.238),
	0 25.1px 20.9px rgba(0, 0, 0, 0.288),
	0 60px 50px rgba(0, 0, 0, 0.4);
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

.itemlist tbody tr:nth-of-type(1n+1):nth-child(2n-1) td {
	background-color: #1c1c1c;
}

.itemlist tbody tr.athing:nth-of-type(2n) + tr td {
	background-color: #141414 !important;
	padding-bottom: 20px;
}

.itemlist tbody tr.athing:nth-of-type(2n-1) + tr td {
	background-color: #1c1c1c !important;
	padding-bottom: 20px;
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
	color: #b2b6b9 !important;
}

.pagetop a:visited {
	color: #fff !important;
}

.fatitem .title a:visited {
	color: #fff !important;
}
}
