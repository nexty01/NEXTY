function showTab(tabId){
  document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

function toggleMusic(){
  const music=document.getElementById("bg-music");
  if(music.paused){music.play();}else{music.pause();}
}
