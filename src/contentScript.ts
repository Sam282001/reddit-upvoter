// // src/contentScript.ts

// const scrollAndLoadAllComments = async () => {
//   const scrollDelay = 1000;
//   let lastHeight = document.body.scrollHeight;

//   while (true) {
//     window.scrollTo(0, document.body.scrollHeight);
//     await new Promise(resolve => setTimeout(resolve, scrollDelay));

//     // Find all buttons and manually check their text content for "Show More"
//     const loadMoreButtons = Array.from(document.querySelectorAll('button')).filter(
//       (button) => button.textContent.includes('Show More')
//     );
    
//     loadMoreButtons.forEach((button) => button.click());

//     const newHeight = document.body.scrollHeight;
//     if (newHeight === lastHeight) break;
//     lastHeight = newHeight;
//   }
// };
  
// const upvoteAllComments = async () => {
//   await scrollAndLoadAllComments();

//   // Get all buttons and filter those that have "aria-pressed" and are not pressed (false)
//   const upvoteButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('button'))
//     .filter(button => 
//       button.getAttribute('aria-pressed') === 'false' &&
//       button.innerHTML.includes('Upvote')  // Ensure the button is related to upvoting
//     );

//   console.log(`Number of upvote buttons found: ${upvoteButtons.length}`);
  
//   if (upvoteButtons.length === 0) {
//     alert('No comments or replies to upvote.');
//     return;
//   }

//   for (let i = 0; i < upvoteButtons.length; i++) {
//     const button = upvoteButtons[i];
//     button.click();
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Delay to prevent account suspension
//   }

//   alert('All comments and replies have been upvoted.');
// };

  
//   const addUpvoteButton = () => {
//     const button = document.createElement('button');
//     button.textContent = 'Upvote All';
//     button.style.position = 'fixed';
//     button.style.bottom = '10px';
//     button.style.right = '10px';
//     button.style.padding = '10px 20px';
//     button.style.backgroundColor = '#FF4500';
//     button.style.color = '#FFF';
//     button.style.borderRadius = '5px';
//     button.style.zIndex = '1000';
//     button.style.cursor = 'pointer';
  
//     button.addEventListener('click', upvoteAllComments);
//     document.body.appendChild(button);
//   };
  
//   window.addEventListener('load', addUpvoteButton);
  






// // Scroll through the page to ensure all comments are loaded
// const scrollAndLoadAllComments = async () => {
//   const scrollDelay = 1000;
//   let lastHeight = document.body.scrollHeight;

//   while (true) {
//     window.scrollTo(0, document.body.scrollHeight);
//     await new Promise(resolve => setTimeout(resolve, scrollDelay));

//     // Check for "Show more comments" or "Load more replies" buttons and click them
//     const loadMoreButtons = document.querySelectorAll<HTMLButtonElement>(
//       'button:contains("More"), button:contains("Load More"), button:contains("View More")'
//     );
//     loadMoreButtons.forEach(button => button.click());

//     const newHeight = document.body.scrollHeight;
//     if (newHeight === lastHeight) break;
//     lastHeight = newHeight;
//   }
// };

// // Function to upvote all comments and replies
// const upvoteAllComments = async () => {
//   await scrollAndLoadAllComments();

//   // Find all upvote buttons by filtering buttons with aria-pressed=false and containing "Upvote" content
//   const upvoteButtons = Array.from(document.querySelectorAll<HTMLButtonElement>('button'))
//     .filter(button => 
//       button.getAttribute('aria-pressed') === 'false' &&
//       button.innerHTML.includes('Upvote')  // Ensuring the button is related to upvoting
//     );

//   console.log(`Number of upvote buttons found: ${upvoteButtons.length}`);
  
//   if (upvoteButtons.length === 0) {
//     alert('No comments or replies to upvote.');
//     return;
//   }

//   for (let i = 0; i < upvoteButtons.length; i++) {
//     const button = upvoteButtons[i];
//     button.click();
//     await new Promise(resolve => setTimeout(resolve, 2000)); // Delay to prevent account suspension
//   }

//   alert('All comments and replies have been upvoted.');
// };

// // Function to add the "Upvote All" button to the Reddit page
// const addUpvoteButton = () => {
//   const button = document.createElement('button');
//   button.textContent = 'Upvote All';
//   button.style.position = 'fixed';
//   button.style.bottom = '10px';
//   button.style.right = '10px';
//   button.style.padding = '10px 20px';
//   button.style.backgroundColor = '#FF4500';
//   button.style.color = '#FFF';
//   button.style.borderRadius = '5px';
//   button.style.zIndex = '1000';
//   button.style.cursor = 'pointer';

//   button.addEventListener('click', upvoteAllComments);
//   document.body.appendChild(button);
// };

// // Add the "Upvote All" button when the page loads
// window.addEventListener('load', addUpvoteButton);



// Scroll through the page to ensure all comments are loaded
const scrollAndLoadAllComments = async () => {
  const scrollDelay = 1000;
  let lastHeight = document.body.scrollHeight;

  while (true) {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise(resolve => setTimeout(resolve, scrollDelay));

    // Find and click "Show more comments" or "Load more replies" buttons
    const loadMoreButtons = Array.from(document.querySelectorAll('button'))
      .filter(button => button.innerText.includes('More') || button.innerText.includes('Load More'));

    loadMoreButtons.forEach(button => button.click());

    const newHeight = document.body.scrollHeight;
    if (newHeight === lastHeight) break;
    lastHeight = newHeight;
  }
};

// Function to upvote all comments and replies
const upvoteAllComments = async () => {
  await scrollAndLoadAllComments();

  // Select all buttons that could potentially be upvote buttons
  const upvoteButtons = Array.from(document.querySelectorAll('button'))
    .filter(button => {
      const ariaPressed = button.getAttribute('aria-pressed');
      const hasUpvoteText = button.innerText.includes('Upvote');
      return ariaPressed === 'false' && hasUpvoteText;
    });

  console.log(`Number of upvote buttons found: ${upvoteButtons.length}`);

  if (upvoteButtons.length === 0) {
    alert('No comments or replies to upvote.');
    return;
  }

  for (let i = 0; i < upvoteButtons.length; i++) {
    const button = upvoteButtons[i];
    button.click();
    await new Promise(resolve => setTimeout(resolve, 2000)); // Delay to prevent account suspension
  }

  alert('All comments and replies have been upvoted.');
};

// Function to add the "Upvote All" button to the Reddit page
const addUpvoteButton = () => {
  const button = document.createElement('button');
  button.textContent = 'Upvote All';
  button.style.position = 'fixed';
  button.style.bottom = '10px';
  button.style.right = '10px';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#FF4500';
  button.style.color = '#FFF';
  button.style.borderRadius = '5px';
  button.style.zIndex = '1000';
  button.style.cursor = 'pointer';

  button.addEventListener('click', upvoteAllComments);
  document.body.appendChild(button);
};

// Add the "Upvote All" button when the page loads
window.addEventListener('load', addUpvoteButton);
