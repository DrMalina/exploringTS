"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/4';
axios_1["default"].get(url).then(function (resp) {
    console.log(resp.data);
});
