const ap = new APlayer({
    container: document.getElementById('aplayer'),
    // fixed: true,
    // autoplay: true,
    audio: [
      {
        name: '誰にもなれない私だから',
        artist: 'TOGENASHI TOGEARI',
        url: '/img/誰にもなれない私だから.mp3',
        cover: '/img/誰にもなれない私だから.jpg',
      },
      {
        name: '雑踏、僕らの街',
        artist: 'TOGENASHI TOGEARI',
        url: '/img/雑踏、僕らの街.mp3',
        cover: '/img/雑踏、僕らの街.jpg',
      },
    ]
  });
