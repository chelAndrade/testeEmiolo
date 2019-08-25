function cadcliente(){
	var formulario = document.createElement("FORM");
	var input01 = document.createElement("INPUT");
	formulario.appendChild(input01);
	var attinput01 = document.createAttribute("type");
	attinput01.value = "text";
	input01.setAttributeNode(attinput01);
	document.body.appendChild(formulario);
	
	
}
			