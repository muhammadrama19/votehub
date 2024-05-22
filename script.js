document.addEventListener('DOMContentLoaded', () => {
    const feedbackBtn = document.getElementById('feedbackBtn');
    const feedbackPopup = document.getElementById('feedbackPopup');
    const closeBtn = document.querySelector('.close-btn');
    const emojis = document.querySelectorAll('.emoji');
    const submitFeedback = document.getElementById('submitFeedback');
    let selectedEmoji = null;
  
    feedbackBtn.addEventListener('click', () => {
      feedbackPopup.style.display = 'flex';
    });
  
    closeBtn.addEventListener('click', () => {
      feedbackPopup.style.display = 'none';
    });
  
    window.addEventListener('click', (e) => {
      if (e.target === feedbackPopup) {
        feedbackPopup.style.display = 'none';
      }
    });
  
    emojis.forEach(emoji => {
      emoji.addEventListener('click', () => {
        emojis.forEach(e => e.style.backgroundColor = '');
        emoji.style.backgroundColor = 'lightgray';
        selectedEmoji = emoji.textContent;
      });
    });
  
    submitFeedback.addEventListener('click', () => {
      const comment = document.getElementById('feedbackComment').value;
      if (selectedEmoji && comment) {
        alert(`Feedback submitted!\nEmoji: ${selectedEmoji}\nComment: ${comment}`);
        feedbackPopup.style.display = 'none';
      } else {
        alert('Please select an emoji and leave a comment.');
      }
    });
  });
  