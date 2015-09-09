/**
 * Created by kitchiong on 9/6/15.
 */
var express = require('express');
var server = express();

server.use(express.static(__dirname + '/app'));

server.listen(8080);