const classItemIsOpen = 'faq__item--open';

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.faq__item');

  items.forEach(item => {
   const question = item.querySelector('.faq__question');
   const answer = item.querySelector('.faq__answer');
    
   question.addEventListener('click', () => {
     const isOpen = item.classList.contains(classItemIsOpen);

     items.forEach(i => {
      i.classList.remove(classItemIsOpen);
      i.querySelector('.faq__answer').style.display = 'none';
      });

     if (!isOpen) {
       item.classList.add(classItemIsOpen);
        answer.style.display = 'block';
     }
  });

})
}
)
