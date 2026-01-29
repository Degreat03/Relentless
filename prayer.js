const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwnoDDMaveAc5-uME9qUTv3K28_2hQeXKPeo-4BGNpl0z_w_d4-VMkoQIOIqzLEAvaM/exec";

async function sendPrayer() {
  let prayer = document.getElementById("prayerInput").value;
  if (!prayer) return;

  await fetch(SCRIPT_URL + "?prayer=" + encodeURIComponent(prayer), {
    method: "POST"
  });

  document.getElementById("prayerInput").value = "";
  loadPrayers();
}

async function loadPrayers() {
  const response = await fetch(SCRIPT_URL);
  const data = await response.json();

  let list = document.getElementById("prayerList");
  list.innerHTML = "";

  data.reverse().forEach(p => {
    let div = document.createElement("div");
    div.textContent = p;
    list.appendChild(div);
  });
}

loadPrayers();

const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", function(){
    if (this.window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})
