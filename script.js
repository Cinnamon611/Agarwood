fetch('data.json')
  .then(response => response.json())
  .then(data => {
    document.querySelector('.hotline').textContent = data.hotline;
  })
  .catch(error => {
    console.error('Error loading hotline:', error);
    document.querySelector('.hotline').textContent = 'Không tải được số';
  });
