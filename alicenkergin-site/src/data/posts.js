const defaultPosts = [
    {
      id: '1',
      title: 'Yazılım Öğrenme Yolculuğum',
      summary: 'Sıfırdan nasıl başladım, hangi hataları yaptım, neler öğrendim...',
      date: '2025-05-10',
      content: `Bu yazıda kendi yazılım öğrenme sürecimi anlatıyorum...`,
      categories: ['Kariyer', 'Yazılım'],
    },
    {
      id: '2',
      title: 'Mac İçin Geliştirici Araçları',
      summary: 'Cursor, iTerm2, VS Code ve daha fazlası...',
      date: '2025-04-28',
      content: `Mac üzerinde kullandığım temel yazılım geliştirme araçlarını...`,
      categories: ['Araçlar', 'MacOS'],
    },
    {
      id: '3',
      title: 'Test Otomasyonu Üzerine',
      summary: 'Neden önemlidir, nasıl başlarım, hangi araçları kullanmalıyım?',
      date: '2025-03-18',
      content: `Test otomasyonu projelerinde öğrendiklerimi derledim...`,
      categories: ['Test', 'Yazılım'],
    },
  ];
  
  export function getPosts() {
    const stored = localStorage.getItem('posts');
    return stored ? JSON.parse(stored) : defaultPosts;
  }
  
  export function savePosts(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
  }