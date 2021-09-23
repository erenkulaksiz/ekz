#!/usr/bin/env node
'use strict';
import fetch from "node-fetch"; import c from "chalk"; import ww from "word-wrap"; import got from "got"; import img from "terminal-image";
fetch('https://api.github.com/gists/7d086763079ea9f52a6ec5555a5299a5').then(results => { return results.json(); }).then(data => {
    got("https://avatars.githubusercontent.com/u/44942737?v=4", { responseType: 'buffer' })
        .then(function (image) { return img.buffer(image.body, { width: '44%' }) })
        .then(function (image) {
            console.clear();
            console.log(image);
            eval(data.files["script"].content);
        });
}).catch(err => {
    console.log(ww(`${c.red.bold("There is an error, please report via erenkulaksz@gmail.com")}, ERROR: ${c.red.bold.underline(err)}`, { width: 100, trim: false }));
});

