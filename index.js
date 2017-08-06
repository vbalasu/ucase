//USAGE (using function key):
// Browser: https://cloudmaticafunctions.azurewebsites.net/api/ucase?code=Uayoo/sEE9Mjdc2Qy8WXcIhBIvPrgcwLa6BSGBD/HapHIWDQp6lbhQ==&inputText=sometext
module.exports = function (context, req) {
    //context.log('JavaScript HTTP trigger function processed a request.');
    //Original body: "Hello " + (req.query.name || req.body.name)
    context.log(req.body.inputText);
    var inputText = (req.query.inputText || req.body.inputText);

    if (req.query.inputText || (req.body && req.body.inputText)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: inputText.toUpperCase()
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass some input text on the query string or in the request body"
        };
    }
    context.done();
};