var posts=["2026/01/07/SSL/","2026/01/04/hello-world/","2026/01/06/First/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };