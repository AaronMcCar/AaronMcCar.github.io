// functionality for showing/hiding the comments section

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  let showHideText = showHideBtn.textContent;
  if(showHideText === 'Show comments') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};

// functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const listItem = document.createElement('li');
  const nameLabel = document.createElement('span');
  const commentlabel = document.createElement('span');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  const nameValue = nameField.value;
  const commentValue = commentField.value;

  namePara.setAttribute("tabindex", "0");
  commentPara.setAttribute("tabindex", "0");

  nameLabel.textContent = "Author: ";
  commentLabel.textContent = "Comment: ";

  namePara.appendChild(nameLabel);
  commentPara.appendChild(commentLabel);

  namePara.innerHTML += nameValue;
  commentPara.innerHTML += commentValue;

  console.log("attr: ", namePara.getAttribute("tabindex"));

  list.appendChild(listItem);
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);

  console.log("namePara: ", namePara);

  nameField.value = '';
  commentField.value = '';
}

console.log("here")
const transcript = document.querySelector('.transcript');
const transcriptBtn = document.querySelector('.transcript-container button');

transcriptsBtn.addEventListener("click", toggleTranscript);

function toggleTranscript() {
  if(transcriptBtn.textContent === 'Show transcript') {
    transcript.style.height = '150px';
    transcript.textContent = 'Hide transcript';
  } else {
    transcript.style.height = '0';
    transcriptBtn.textContent = 'Show transcript';
  }
};

const commentBtn = document.querySelector(".show-hide")

commentBtn.addEventListener("keydown", (e) => {
  if(e.keyCode === 13) {
    document.activeElement.click();
  }
});

const skipToContentLink = document.querySelector("#skip-to-content-link");

skipToContentLink.addEventListener("focus", (e) => {
  skipToContentLink.classList.toggle("skip-to-content-link-visible")
})