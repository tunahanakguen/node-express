const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();


promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();

})
.get((req, res,next ) => {
    res.end('We Will send the promotion to you!');
})
.post((req,res,next) => {
    res.end('Will add the promotion: ' + req.body.name + 
        'with the details: ' + req.body.description);

})
.put((req,res,next) => {
    res.statusCode = 403;
    res.end('Put operation not Supported on /promotion ');

})
.delete((req,res,next) => {
    res.end('Deleting all the promotions!');

});


promoRouter.route('/:promoId')
.get((req, res,next ) => {
    res.end('Will send details of the promotion: ' 
    + req.params.promoId);

})


.post((req,res,next) => {
    res.statusCode = 403;
    res.end('Post not supported on /promotion/ ');

})

.put((req,res,next) => {
    res.write('Updating the following promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion:' + req.body.name +
    'with details:' + req.body.description);
})

.delete((req,res,next) => {
    res.end('Deleting promotion' + req.params.promoId);

});


module.exports = promoRouter;
