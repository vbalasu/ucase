if(process.argv.length <= 2) console.log("Syntax: node ucase.js <inputText>")
else {
	console.log(process.argv[2].toUpperCase())
}