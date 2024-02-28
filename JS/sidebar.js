const content = document.getElementById("sidebar");

const selector = document.getElementById("sidebarHandler");

function toggleSidebar() {
  if (content.style.display === "block") {
    content.style.display = "none";
    selector.style.marginLeft = 0;
  } else {
    content.style.display = "block";
    selector.style.marginLeft = "30%";
  }
}

