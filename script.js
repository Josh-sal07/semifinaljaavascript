function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
  }
  function logout() {
    alert("Logging out...");
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index1.html";
}
  