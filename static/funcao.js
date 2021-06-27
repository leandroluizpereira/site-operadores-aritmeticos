function calcular(){
var n = document.getElementById("number").value;
var n1 = document.getElementById("numberUm").value;



var soma = parseInt(n)+parseInt(n1);
var sub = parseInt(n)-parseInt(n1);
var mult = parseInt(n)*parseInt(n1);
var pt = parseInt(n)*(parseInt(n1)*parseInt(n1));
var divi = parseInt(n)/parseInt(n1);

var raiz =Math.sqrt(soma).toFixed(2);


document.getElementById("texto").innerHTML="Soma: "+n+" + "+n1+" = "+soma+" " ;
document.getElementById("textoDois").innerHTML="Subtração: "+n+" - "+n1+" = "+sub+" " ;
document.getElementById("textoTres").innerHTML="Multiplicação: "+n+" x "+n1+" = "+mult+" " ;
document.getElementById("textoQuatro").innerHTML="Potência: "+n+" <sup>"+n1+"</sup> = "+pt+" " ;
document.getElementById("textoCinco").innerHTML="Divisão: "+n+" / "+n1+" = "+divi.toFixed(2)+" " ;
document.getElementById("textoSeis").innerHTML="Raiz quadrada de: "+soma+" = "+raiz+" " ;




}