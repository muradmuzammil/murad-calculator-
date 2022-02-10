//History:
// file name:calcA
// created by murad
// all right reserved to xyz 2022:



// add function starts here

add=function (x,y){
    return  x+y;

}


// substract function starts here
sub=function (a,b){
    return a-b;
}


// mod function starts here
mod=function (m,n){
    return m%n;
}

// object calcA
calcA={
    add:add,
    sub:sub,
    mod:mod,
}

module.exports=calcA