walk(document.body);

function walk(node) {
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node && node.tagName && (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea')) {
		return;
	}

	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}



function handleText(textNode) {
	var v = textNode.nodeValue;
        console.log(v);
	var options = ["Business Excellence in Computing", "\"Not a Java course\""];
	var randomItem = options[Math.floor(Math.random()*options.length)]
	v = v.replace(/Engineering Design.*in Computing/gi, randomItem);
	v = v.replace(/Engineering Design/gi, "Business Excellence");
	textNode.nodeValue = v;
}


