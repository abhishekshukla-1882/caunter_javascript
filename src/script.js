// s = 0
// function increa(){
    
//     p = s +1;
//     document.getElementById('inc').innerHTML = p;
// }
document.getElementById('plus').addEventListener('click',add);
document.getElementById('minus').addEventListener('click',min);
function add(){
    let y = document.getElementById('div').innerHTML;
    ++y;
    display(y);
}
function min(){
    let z = document.getElementById('div').innerHTML;
    --z;
    display(z);

}
function display(x){
    
        document.getElementById('div').innerHTML = x;
    
}