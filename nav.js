  function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("sidenav").style.display='block'
    document.getElementById("main").style.marginBottom = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("Sidenav").style.width = "15px";
    document.getElementById("main").style.marginLeft = "0px";
  }