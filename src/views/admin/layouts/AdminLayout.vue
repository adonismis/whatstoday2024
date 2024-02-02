<style lang="scss">
  @import "@/assets/admin.scss";
</style>

<template>
  <div>
    <header>
      管理員頁面的頂部
      <RouterLink to="/">Home</RouterLink> / 
      <RouterLink to="/admin">Admin</RouterLink>
    </header>
    <router-view></router-view>
    <footer>管理員頁面的底部</footer>
  </div>
</template>