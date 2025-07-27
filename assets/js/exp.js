document.querySelectorAll('.exp__title').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.classList.contains('open');

    document.querySelectorAll('.exp__desc').forEach(a => a.classList.remove('open'));
    document.querySelectorAll('.exp__title').forEach(b => b.classList.remove('open'));

    if (!isOpen) {
      answer.classList.add('open');
      button.classList.add('open');
    }
  });
});
