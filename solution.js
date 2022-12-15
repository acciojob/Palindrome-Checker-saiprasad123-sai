// complete the given function

function palindrome(str){
const len=str.length;
for(let i=0;i<len;i++){
const l=str[i].toUpperCase();
const r=str[len-1-i].toUpperCase();
if(l!==r)
return false;
}
return true;
}
module.exports = palindrome
