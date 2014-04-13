n = 5; // number of hidden layers

function show(a){
  for(i=1;i<=n;i++){
    document.getElementById('d'+i).style.display = 'none';
  }
  document.getElementById('d'+a).style.display = 'block';
}
