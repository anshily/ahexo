// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {shell} = require('electron')
const fs = require('fs');
const {dialog} = require('electron').remote

// shell.openExternal('https://github.com',()=>{
//     alert("opend!")
// })
// fs.readFile('./index.html', 'utf8', function(err, data){
//     console.log(data);
// });
