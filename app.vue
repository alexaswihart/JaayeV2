<template>
  <header>   
    <nav class="fixed w-full z-20 top-0 start-0">
      <div><NuxtLink to="/" class="title sans">JAAYE</NuxtLink></div>
      <ul class="flex items-center font-medium rounded-lg justify-center">
        <li><NuxtLink to="/music" class="menu">MUSIC</NuxtLink></li>
        <li><NuxtLink to="/videos" class="menu">VIDEOS</NuxtLink></li>
        <li><NuxtLink to="/shows" class="menu">SHOWS</NuxtLink></li>
        <li><NuxtLink to="/info" class="menu">INFO</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <div class="h-full">
    <NuxtPage class="h-full grid align-middle"/>
  </div>
  <footer class="fixed w-full bottom-0">
    <nav>
      <ul class="flex items-center font-medium rounded-lg justify-center">
        <li><a href="https://www.instagram.com/jaayeband/" target="_blank" class="menu">INSTAGRAM</a></li>
        <li><a href="https://www.tiktok.com/@jaayeband" target="_blank" class="menu">TIKTOK</a></li>
        <li><a href="https://www.youtube.com/@jaayeband" target="_blank" class="menu">YOUTUBE</a></li>
        <li><a href="https://jaaye.printify.me/products" target="_blank" class="menu">MERCH</a></li>
        <li><a href="https://linktr.ee/jaaye" target="_blank" class="menu">LINKTREE</a></li>
      </ul>
    </nav>
  </footer>
</template>

<style>
.title {
  font-size: 80px;
  font-weight: 900;
  justify-content: center;
  display: flex;
  color: rgb(209 213 219);
}

.title:hover {
  color: rgb(156 163 175);
}

.menu:hover {
  color: rgb(156 163 175);
}

li {
  display: inline;
  margin: 5px;
}

footer {
  padding-bottom: 20px;
}
</style>