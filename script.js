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
      
      // Enable or disable the submit button based on whether an emoji is selected
      if (selectedEmoji) {
        submitFeedback.disabled = false;
      } else {
        submitFeedback.disabled = true;
      }
    });
  });

  submitFeedback.addEventListener('click', () => {
     
      // Display success modal
      $('#successModal').modal('show');

      // Hide the feedback popup
      feedbackPopup.style.display = 'none';

      // Optionally, clear the textarea
      document.getElementById('feedbackComment').value = '';

      // Close the success modal after 2 seconds
      setTimeout(() => {
        $('#successModal').modal('hide');
      }, 2000);

  });
});
