document.querySelector('.dropdown').addEventListener('mouseover', function () {
  this.querySelector('.dropdown-content').classList.add('expanded');
});

document.querySelector('.dropdown-content').addEventListener('mouseleave', function () {
  this.classList.remove('expanded');
});
