function translating(){
	var morse;
	var trans = [];
	var code = document.form1.message.value;
	var translates = code.split(" ");
	var head1 = document.getElementById("head1");
	for (var i = 0; i < translates.length; i++){
		morse = translates[i];

		switch (morse){
			case ".-":
			trans[i] = "a";
			break;

			case "-...":
			trans[i] = "b";
			break;

			case "-.-.":
			trans[i] = "c";
			break;

			case "-..":
			trans[i] = "d";
			break;

			case ".":
			trans[i] = "e";
			break;

			case "..-.":
			trans[i] = "f";
			break;

			case "--.":
			trans[i] = "g";
			break;

			case "....":
			trans[i] = "h";
			break;

			case "..":
			trans[i] = "i";
			break;

			case ".---":
			trans[i] = "j";
			break;

			case "-.-":
			trans[i] = "k";
			break;

			case ".-..":
			trans[i] = "l";
			break;

			case "--":
			trans[i] = "m";
			break;

			case "-.":
			trans[i] = "n";
			break;

			case "---":
			trans[i] = "o";
			break;

			case ".--.":
			trans[i] = "p";
			break;

			case "--.-":
			trans[i] = "q";
			break;

			case ".-.":
			trans[i] = "r";
			break;

			case "...":
			trans[i] = "s";
			break;

			case "-":
			trans[i] = "t";
			break;

			case "..-":
			trans[i] = "u";
			break;

			case "...-":
			trans[i] = "v";
			break;

			case ".--":
			trans[i] = "w";
			break;

			case "-..-":
			trans[i] = "x";
			break;

			case "-.--":
			trans[i] = "y";
			break;

			case "--..":
			trans[i] = "z";
			break;
			
			case "...-.":
			trans[i] = "understood";
			break;
			
			case "|":
			trans[i] =" ";
			break;
			default:
			break;

		}
	}
	var final = trans.join("");
	
	head1.firstChild.nodeValue=final;
}


function translating2(){
	var english;
	var trans2 = [];
	var code2 = document.form1.message2.value;
	var translates2 = code2.split("");
	var head2 = document.getElementById("head2");
	for (var i2 = 0; i2 < translates2.length; i2++){
		english = translates2[i2];

		switch (english.toLowerCase()){
			case "a":
			trans2[i2] =".-";
			break;

			case "b":
			trans2[i2] = "-...";
			break;

			case "c":
			trans2[i2] = "-.-.";
			break;

			case "d":
			trans2[i2] = "-..";
			break;

			case "e":
			trans2[i2] = ".";
			break;

			case "f":
			trans2[i2] = "..-.";
			break;

			case "g":
			trans2[i2] = "--.";
			break;

			case "h":
			trans2[i2] = "....";
			break;

			case "i":
			trans2[i2] = "..";
			break;

			case "j":
			trans2[i2] = ".---";
			break;

			case "k":
			trans2[i2] = "-.-";
			break;

			case "l":
			trans2[i2] = ".-..";
			break;

			case "m":
			trans2[i2] = "--";
			break;

			case "n":
			trans2[i2] = "-.";
			break;

			case "o":
			trans2[i2] = "---";
			break;

			case "p":
			trans2[i2] = ".--.";
			break;

			case "q":
			trans2[i2] = "--.-";
			break;

			case "r":
			trans2[i2] = ".-.";
			break;

			case "s":
			trans2[i2] = "...";
			break;

			case "t":
			trans2[i2] = "-";
			break;

			case "u":
			trans2[i2] = "..-";
			break;

			case "v":
			trans2[i2] = "...-";
			break;

			case "w":
			trans2[i2] = ".--";
			break;

			case "x":
			trans2[i2] = "-..-";
			break;

			case "y":
			trans2[i2] = "-.--";
			break;

			case "z":
			trans2[i2] = "--..";
			break;

			case " ":
			trans2[i2] = "|";
			break;

		}
	}
	head2.firstChild.nodeValue=trans2.join(" ");
}

