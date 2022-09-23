// share.addEventListener("click", popUp);

const share = document.querySelector(".share");
const shareId = document.querySelector("#share_id");
const social = document.querySelector("#speechs");
const arrow = document.querySelector("#arrow");
const mimiTest = document.querySelector("#mimitest");
const idFullInfo = document.querySelector("#id-full-info");
const idInfo = document.querySelector("#id-info");

// to toggle social desktop
function popUp() {
  arrow.classList.toggle("arrow-active");
  social.classList.toggle("show");
  shareId.classList.toggle("share_active");
  idFullInfo.classList.toggle("color");
  idInfo.classList.toggle("none");
  console.log("1");
}

// to close social if anywhere else is clicked
document.addEventListener("click", (e) => {
  if (
    !(
      e.target.id == "speechs" ||
      e.target.className == "share" ||
      e.target.className == "arrowimage arrow-active" ||
      e.target.id == "share_id" ||
      e.target.className == "favicon"
    )
  ) {
    arrow.classList.remove("arrow-active");
    social.classList.remove("show");
    shareId.classList.remove("share_active");
    idFullInfo.classList.remove("color");
    idInfo.classList.remove("none");

  }
});

shareId.addEventListener("click", popUp);
