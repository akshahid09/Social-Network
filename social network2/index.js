//sidebar
const menuItems = document.querySelectorAll('.menu-item');
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
 

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        
        if (item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }
    })
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name=chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        } else{
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})
function navigateTo(page) {
    window.location.href = page;
}
document.addEventListener("DOMContentLoaded", () => {
    const videos = document.querySelectorAll("video");
    const searchIcon = document.querySelector(".search-icon");
    const searchBarContainer = document.querySelector(".search-bar-container");
    const arrowUp = document.querySelector(".arrow-up");
    const arrowDown = document.querySelector(".arrow-down");
    const videoFeed = document.querySelector(".video-feed");
  
    videos.forEach(video => {
      video.addEventListener("click", () => {
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
      });
    });
  
    searchIcon.addEventListener("click", () => {
      searchBarContainer.style.display = searchBarContainer.style.display === "flex" ? "none" : "flex";
    });
  
    arrowUp.addEventListener("click", () => {
      videoFeed.scrollBy(0, -window.innerHeight);
    });
  
    arrowDown.addEventListener("click", () => {
      videoFeed.scrollBy(0, window.innerHeight);
    });
  });
  