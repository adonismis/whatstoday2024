<style lang="scss">
  .card-img-top {
    position: absolute;
    top: -248px;
    left: 50%;
    margin-left: -150px;
    width: 300px !important;
  }
  .card {
    margin-top: 30px;
    padding-top: 30px;
  }
</style>

<template>
  <section class="min-vh-100 d-flex">
    <div class="container text-center my-auto">
      <h1 class="display-1">便當日記</h1>
      <p class="lead">一個讓您輕鬆選擇便當的網站</p>
      <div class="d-flex justify-content-center">
        <router-link to="/login" class="btn btn-primary rounded-pill">立即開始</router-link>
      </div>
    </div>
  </section>

  <section class="py-5">
    <div class="container">
      <div class="mb-5 pb-3">
        <h2 style="padding-bottom: 107px;">想吃頓飯卻傷透腦筋？</h2>
      </div>
      <div class="row rounded-4 px-4" style="background: #FAF1DD;padding-top: 107px;">
        <div class="col-md-4 col-sm-6">
          <div class="card border-0 mb-4">
            <img src="@/assets/images/01.png" class="card-img-top" alt="..." />
            <div class="card-body p-5">
              <h4 class="text-center text-primary">想不出來要吃什麼</h4>
              <p>
                  您總是挑選時猶豫不決嗎？<br>
                  每次想了很久遲遲沒有下手？<br>
                  明明不挑食，但最後總是吃相同料理 😰
              </p>
            </div>
          </div>
        </div>          
        <div class="col-md-4 col-sm-6">
          <div class="card mb-4 border-0 shadow-sm">
            <img src="@/assets/images/02.png" class="card-img-top" alt="..." />
            <div class="card-body p-5">
              <h4 class="text-center text-primary">吃的健康嗎</h4>
              <p>
                對於自助餐菜色不太了解？<br>
                常常會偏好不太健康的選擇？<br>
                使得飲食並不夠均衡，吃的不太健康
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6">
          <div class="card mb-4 border-0 shadow-sm">
            <img src="@/assets/images/03.png" class="card-img-top" alt="..." />
            <div class="card-body p-5">
              <h4 class="text-center text-primary"><b>忘記昨天吃了什麼</b></h4>
              <p>
                今天想來點不一樣的選擇<br>
                卻忘了您昨天吃了什麼？<br>
                生活就夠操心動腦了，還有時間來紀錄                  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-5">
    <div class="container">
      <div class="mb-5">
        <h2>方案介紹</h2>
      </div>
      
    </div>
  </section>


</template>
  

<script>

export default {
  components: {
    
  },
  data() {
    return {
      //資料狀態A
      //資料狀態B
    };
  },
  computed: {
    //功能Ａ
    //功能B
  },
  methods: {
    //功能Ａ
    //功能B
    
  },
  watch:{
     //功能Ａ
    //功能B
  }
  //略...
};
</script>
