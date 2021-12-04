var calculator = {
    'num1':0,
    'num2':0,
    'res':0,
     'sum': function (){
           this.res= this.num1 + this.num2;
            return this.res; 
     },
     'mul':function(){
            this.res = this.num1 * this.num2;
            return this.res;
        
     },
     'diff': function(){
         this.res = this.num1 - this.num2;
         return this.res;
    },
     'div': function(){
         this.res = this.num1 / this.num2;
         return this.res;
     },
        
};
calculator.num1 = 10;
calculator.num2 = 4;
calculator.res = calculator.sum();
var add = calculator.res;
console.log(add);
calculator.res = calculator.mul();
var product = calculator.res;
console.log(product);
calculator.res = calculator.diff();
var sub = calculator.res;
console.log(sub);
calculator.res = calculator.div();
var divide = calculator.res;
console.log(divide);
