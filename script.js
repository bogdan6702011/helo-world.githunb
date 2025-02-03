
const data = [
    {title:"you tube", url:"https://www.youtube.com"},
    {title:"wikipedia", url:"https://www.wikipedia.com.ua"},
    {title:"tiktok", url:"https://www.tiktok.com"},
    {title:"twitch", url:"https://www.twitch.tv"},
    {title:"x.com", url:"https://x.com/?lang=ru"},
    {title:"netflix", url:"https://www.netflix.com"},
    {title:"discord", url:"https://discord.com"},
    {title:"amazon", url:"https://www.amazon.com"},
    {title:"facebook", url:"https://www.facebook.com"},
    {title:"steam", url:"https://store.steampowered.com"},
    {title:"whatsapp", url:"https://www.whatsapp.com"},
    {title:"yahoo", url:"https://www.yahoo.com"},
    {title:"reddit", url:"https://www.reddit.com"},
    {title:"instagram", url:"https://www.instagram.com"},
    {title:"vk", url:"https://vk.com"},
    {title:"telegram", url:"https://web.telegram.org"},
    {title:"fandom", url:"https://www.fandom.com"},
    {title:"temu", url:"https://www.temu.com"},
    {title:"mail.ru", url:"https://mail.ru"},
    {title:"google", url:"https://g.co/kgs/RitwX2a"}
  ];

   // Функция поиска
   function performSearch() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const results = data.filter(item => item.title.toLowerCase().includes(query));
    
    // Очистка текущих результатов
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';

    // Отображение новых результатов
    if (results.length > 0) {
      results.forEach(result => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${result.url}" target="_blank">${result.title}</a>`;
        resultsContainer.appendChild(listItem);
      });
    } else {
      resultsContainer.innerHTML = '<li>Ничего не найдено</li>';
    }
  }
