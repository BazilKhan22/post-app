
function addPost() {
    const postInput = document.getElementById('postInput');
    const postText = postInput.value.trim();
    if (postText !== '') {
      
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML = `<p>${postText}</p>`;

        const postsContainer = document.getElementById('postsContainer');
        postsContainer.appendChild(postDiv);

        postInput.value = '';
    }
}
