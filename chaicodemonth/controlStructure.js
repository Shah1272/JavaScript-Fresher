// Task 1 
function checkNumber(a){
if(a>0){
    console.log("Positive")
}
else if(a<0){
    console.log(`Negative`)
}
else{
    console.log(`zero`)
}
}
checkNumber(10); checkNumber(-10); checkNumber(0);

// Task 2 
function eligible(Age){
    if(Age>=18){
        console.log("Eligible")
    }
    else{
        console.log("Not eligible")
    }
}
eligible(15);eligible(18);eligible(20);

// Task 3
function Biggest(b,c,d){
    if(b>c && b>d){
        console.log(`B is greater`)
    }
    else if(c>d && c>b){
        console.log(`C is greater`)
    }
    else{
        console.log(`D is greater`)
    }    
    }
    Biggest(12,16,16);
