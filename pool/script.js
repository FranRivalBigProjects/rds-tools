const res=document.getElementById('res');
function run(){
  const txt=document.getElementById('input').value||'';
  const val=parseFloat(document.getElementById('value').value||'0');
  const rows = txt ? txt.split('\n').length : 0;
  res.innerText = 'Rows: ' + rows + '\nMetric: ' + val;
}