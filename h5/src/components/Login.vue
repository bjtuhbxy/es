<template>
  <div>
    欢迎来到登录页面
    <div class="login">
      <form class="MessageLogin-iYvWA">
        <section class="MessageLogin-FsPlX"><input type="tel" maxlength="11" placeholder="手机号" v-model="ruleForm.username">
          <button disabled="disabled" class="CountButton-3e-kd" ubt-click="101161">
            获取验证码
          </button>
        </section>
        <section class="MessageLogin-FsPlX"><input type="password" maxlength="8" placeholder="验证码" v-model="ruleForm.password"></section>
        <div id="_umfp" style="display: inline; width: 1px; height: 1px; overflow: hidden;"></div>
        <div id="slideVerify" class="nc-container"></div>
        <section class="MessageLogin-15xD9">
          新用户登录即自动注册，并表示已同意
          <a
            href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18">《用户服务协议》</a>
        </section>
      </form>
      <mt-button type="primary" size="large" class="submitButton" @click="login('ruleForm')">登录</mt-button>
      <a href="javascript:;" class="MessageLogin-31EIr">关于我们</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        ruleForm: {
          username: 'admin',
          password: '123456'
        }
      }
    },
    methods: {
      // login: function () {
      //   console.log(this.$http);
      //   this.$http.post('/api/login',{
      //     u: this.ruleForm.username,
      //     p: this.ruleForm.password
      //   }).then((response)=>{
      //     // this.newsList=response.data.data;
      //     // console.log(response);
      //     this.$router.push({//你需要接受路由的参数再跳转
      //       path: '/'
      //     });
      //   }).catch((response)=>{
      //     console.log(response);
      //   })
      // }
      login: function () {
        this.$http.get('/elm/restapi/shopping/v3/restaurants?latitude=39.85394&longitude=116.41465&keyword=&offset=8&limit=8&extras[]=activities&extras[]=tags&terminal=h5&rank_id=860b4c205b84444ab3cd86b6c70142ca&brand_ids[]=&restaurant_category_ids[]=209&restaurant_category_ids[]=212&restaurant_category_ids[]=213&restaurant_category_ids[]=214&restaurant_category_ids[]=215&restaurant_category_ids[]=216&restaurant_category_ids[]=217&restaurant_category_ids[]=219&restaurant_category_ids[]=265&restaurant_category_ids[]=266&restaurant_category_ids[]=267&restaurant_category_ids[]=268&restaurant_category_ids[]=269&restaurant_category_ids[]=221&restaurant_category_ids[]=222&restaurant_category_ids[]=223&restaurant_category_ids[]=224&restaurant_category_ids[]=225&restaurant_category_ids[]=226&restaurant_category_ids[]=227&restaurant_category_ids[]=228&restaurant_category_ids[]=231&restaurant_category_ids[]=232&restaurant_category_ids[]=263&restaurant_category_ids[]=218&restaurant_category_ids[]=234&restaurant_category_ids[]=236&restaurant_category_ids[]=237&restaurant_category_ids[]=238&restaurant_category_ids[]=211&restaurant_category_ids[]=229&restaurant_category_ids[]=230&restaurant_category_ids[]=264').then((response)=>{

        }).catch((response)=>{
          console.log(response);
        })
      }
    },
    mounted() {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    margin: 2rem auto;
    width: 300px;
    height: 200px;
  }

  .MessageLogin-FsPlX {
    position: relative;
    margin-bottom: 16px;
    height: 48px;
    font-size: 14px;
    background: #fff;
  }

  .CountButton-3e-kd {
    display: inline-block;
    position: absolute;
    top: 54%;
    right: 0rem;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .MessageLogin-15xD9 {
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
  }

  input {
    width: 100%;
    height: 100%;
    left: 0;
    padding-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #333;
    -webkit-appearance: none;
  }

  .submitButton {
    margin-top: .8rem;
  }

  .MessageLogin-31EIr {
    display: block;
    font-size: 15px;
    margin-top: .8rem;
    text-align: center;
    color: #999;
  }

  a {
    text-decoration: none
  }
</style>
