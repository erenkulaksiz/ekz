#!/usr/bin/env node
'use strict';
import fetch from "node-fetch"; import c from "chalk"; import ww from "word-wrap"; import got from "got"; import img from "terminal-image";
console.clear();


fetch('https://api.github.com/gists/7d086763079ea9f52a6ec5555a5299a5').then(results => { return results.json(); }).then(data => {
    const image = data.files["img"].content;
    got(image, { responseType: 'buffer' })
        .then(function (image) { return img.buffer(image.body, { width: '22%' }) })
        .then(function (image) {
            console.log(image);
            console.log(ww(`${c.blue.bold.underline("github.com/erenkulaksiz")}`, { width: 100, trim: false }));
            console.log(" ");
            eval(data.files["script"].content);
        }).catch((err) => { console.log("Couldn't fetch my image with this url! report this via erenkulaksz@gmail.com ERROR: %d", err) });
}).catch((err) => { console.log("Couldn't fetch my data! report this via erenkulaksz@gmail.com ERROR: %d", err); });