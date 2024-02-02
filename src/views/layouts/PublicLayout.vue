<style lang="scss">
    @import "@/assets/index.scss";
</style>

<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">
                <img src="../../assets/logo.svg" height="72" alt="login">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    
                </ul>
                <form class="d-flex">
                    <RouterLink to="/" style="width: 81px; height: 35px; padding: 8px;">立即開始</RouterLink>
                    <RouterLink to="/admin" style="width: 81px; height: 35px; padding: 8px;">便當日記</RouterLink>
                    <button class="btn btn-blue rounded-pill">登入 / 註冊 ></button>
                </form>
            </div>
        </div>
    </nav>

    <router-view></router-view>

    <footer class="py-5 bg-dark text-light">
        <div class="container">
            <div class="text-center mt-4">
                <p class="small text-secondary m-0">@copyright 2099 YAYAYAYAYA</p>
            </div>
        </div>
    </footer>
</template>