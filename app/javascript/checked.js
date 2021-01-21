function countAnswer(){

  const a = document.getElementsByName("answer_a");
  const b = document.getElementsByName("answer_b");
  const c = document.getElementsByName("answer_c");
  const btn = document.getElementById("btn");

  const getCheckedCount = () => {
    
    let count_a = 0;
    let count_b = 0;
    let count_c = 0;

    for(let i = 0; i<a.length; i++){
      if (a[i].checked) {
        count_a++;
      }
    }
    for(let i = 0; i<b.length; i++){
      if (b[i].checked) {
        count_b++;
      }
    }
    for(let i = 0; i<c.length; i++){
      if (c[i].checked) {
        count_c++;
      }
    }
    if(count_a>count_b&&count_a>count_c){
    alert(`Aを${count_a}個 Bを${count_b}個 Cを${count_c}個チェックしました
Aが多かったので、ぺージAに進んでください。`);
    }else if(count_b>count_a&&count_b>count_c){
    alert(`Aを${count_a}個 Bを${count_b}個 Cを${count_c}個チェックしました
Bが多かったので、ぺージBに進んでください。`);
    }else if(count_c>count_a&&count_c>count_b){
    alert(`Aを${count_a}個 Bを${count_b}個 Cを${count_c}個チェックしました
Cが多かったので、ぺージCに進んでください。`);
    }else{
      alert(`Aを${count_a}個 Bを${count_b}個 Cを${count_c}個チェックしました
あなたはミックスタイプです。`);
    }
 };

  btn.addEventListener("click",getCheckedCount, false);
}
window.addEventListener('load',countAnswer)