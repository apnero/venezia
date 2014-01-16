var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname ));

app.use(express.bodyParser());

var postmark = require("postmark")("07c7bc0e-8c7f-4cbf-85f6-9c8c8c4b20db")



app.post('/getFormData', function(req, res) {
  postmark.send({
    "From": "email@plasmascape.com",
    "To": "inquire@plasmascape.com",
    "Subject": "EMAIL FROM Venezia Website",
    "TextBody": new String('From: ' + req.body.name + '.\n\rEmail: ' + req.body.email + '.\n\rPhone: ' + req.body.phone + '.\n\rSubject: ' + req.body.subject + '.\n\rMessage: ' + req.body.message)
	}, function(error, success) {
    if(error) {
        res.send("We have had technical difficulties and we regret to say you email hasn't been delivered to Venezia");
       return;
    }
    res.send("Thank you for contacting us.  We will respond as soon as possible.")
	});
  
});


var port = process.env.PORT || 3000;

app.listen(port);