var a = 2;
var b = (a++ + ++a - --a + a--);
     //   2  +  4  -  3  +  3

alert(a);
alert(b);