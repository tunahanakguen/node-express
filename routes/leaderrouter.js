const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();


leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();

})
.get((req, res,next ) => {
    res.end('Will send all the leaders to you!');
})
.post((req,res,next) => {
    res.end('Will add the leader: ' + req.body.name + 
        'with details: ' + req.body.description);

})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('Put operation not Supported on /leaders ');

})
.delete((req,res,next) => {
    res.end('Deleting all the leaders!');

});
leaderRouter.route('/:leadersId/')
.post((req,res,next) => {
    res.statusCode = 403;
    res.end('Post not supported on /leaders/ ');

})
.get((req, res,next ) => {
    res.end('Will send all the leaders to you!')
})

.put((req,res,next) => {
    res.write('Updating the leader: ' + req.params.leadersId + '\n');
    res.end(' We Will update the leader:' + req.body.name +
    ' with details: ' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting leaders ' + req.params.leadersId);

});


module.exports = leaderRouter;
