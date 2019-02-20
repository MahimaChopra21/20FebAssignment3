function sum(x){
    var i=x;
    function add(y){
        return (i+y);
    }
    return add;
    
}
console.log(sum(2)(3));