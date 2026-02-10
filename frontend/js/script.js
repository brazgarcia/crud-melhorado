async function loadLayout() {
  const header = await fetch('layout/header.html');
  document.getElementById('header').innerHTML = await header.text();

  const footer = await fetch('layout/footer.html');
  document.getElementById('footer').innerHTML = await footer.text();
}

loadLayout();
