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
    alert(`Aを${count_a}個 Bを${count_b}個 Cを${count_c}個チェックしました`);
 };

  btn.addEventListener("click",getCheckedCount, false);
}
window.addEventListener('load',countAnswer)