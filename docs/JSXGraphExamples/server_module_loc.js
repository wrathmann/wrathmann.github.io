//The Websites will call this Function to ensure the Connection to the Illias-System
function ConnectedToIllias(){
	return true;
}

//Writes the location of the stylesheet into the Calling Website.
document.write('<link rel="stylesheet" type="text/css" href="indexILIAS.css" />');

//The Try and Catch Blocks are nessesary to ensure that the Script tries all three modules.
try{
	if(useJsxGraph==true){
		//Writes the location of the stylesheet into the Calling Website if the Flag is set
		//document.write('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraph.css" />');
		
		//Writes the location of the nesesary Javascripts for the module into the Calling Website if the Flag is set
		document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jsxgraph/distrib/jsxgraphcore.js"></script>');
		
		console.log('JsxGraph ready to use.');
	}
} catch(err){}

try{
	if(useMathJax==true){
		//Writes the location of the nesesary Javascripts for the module into the Calling Website if the Flag is set
		document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/latest.js?config=TeX-AMS_HTML" type="text/javascript"></script>');
		
		console.log('MathJax ready to use.');
	}
} catch(err){}

try{
	if(useSageCell==true){
		//Writes the location of the nesesary Javascripts for the module into the Calling Website if the Flag is set
		document.write('<script src="https://sagecell.sagemath.org/static/embedded_sagecell.js"></script>');
		document.write('<script src="https://sagecell.sagemath.org/static/jquery.min.js"></script>');
		console.log('SageCell ready to use.');
		console.log('MathJax ready to use.');
	}
} catch(err){}
