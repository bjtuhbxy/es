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
        this.$http.get('/static/data/login.json').then((response)=>{
          console.log(response);
          let data = response.data
          this.$cookies.set("token", data.data.token)
          let t = this.$cookies.get("token")
          if (t) {
            this.$router.push({//你需要接受路由的参数再跳转
              path: '/'
            });
          }
          console.log(t);
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
