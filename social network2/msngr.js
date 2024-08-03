const menuItems = document.querySelectorAll('.menu-item');
const messengerIcon = document.querySelector('#messenger-icon');
const messengerPage = document.querySelector('.messenger');

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    });
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if (item.id === 'messenger-icon') {
            messengerPage.style.display = 'grid';
        } else {
            messengerPage.style.display = 'none';
        }
    });
});

const conversations = document.querySelectorAll('.conversation-item');
const conversationDetails = document.querySelector('.conversation-details');

conversations.forEach(conversation => {
    conversation.addEventListener('click', () => {
        conversationDetails.innerHTML = `<p>Conversation with ${conversation.dataset.name}</p>`;
    });
});
