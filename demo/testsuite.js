'use strict';

var fs = require('fs'),
    phantomcss = require('phantomcss'),
    server = require('webserver').create(),
    html = fs.read( fs.absolute( fs.workingDirectory + '/demo/demo.html' ));

server.listen(8080,function(req,res){
	res.statusCode = 200;
	res.headers = {
		'Cache': 'no-cache',
		'Content-Type': 'text/html;charset=utf-8'
	};
	res.write(html);
	res.close();
});

casper.test.begin('demo test', function(test) {
    var options = {
	rebase: casper.cli.get('rebase'),
        screenshotRoot: './demo/screenshots',
        failedComparisonsRoot: './demo/failures',
        addLabelToFailedImage: false,
        addIteratorToImage: false
    };
    phantomcss.init(options);

    var tests = ['body', 'first_row'];

    casper
        .start('http://localhost:8080')
        .viewport(1024, 768)
        .then(function() {
            phantomcss.screenshot('body', tests[0]);
        })
        .then(function() {
            phantomcss.screenshot('body div.container div.row:nth-child(1) p', tests[1]);
        });

    casper
        .then(function() {
            phantomcss.compareExplicit(tests.map(function (name) {
                return options.screenshotRoot + "/" + name + ".diff.png";
            }));
        })
        .run(function() {
            test.done();
        });
});
