<template>
  <div class="loginWrapper">
    <el-container>
      <el-header>
        <div class="contentWrapper"></div>
      </el-header>
      <el-main>
        <div class="contentWrapper">
          <div class="loginBox">
            <div class="loginBoxLeft fll">
              <div class="loginQoute">
                <h3>沈从文</h3>在这青山绿水之间，我想牵着你的手，走个这座桥，桥上是绿叶红花，桥下是流水人家，桥的那头是青丝，桥的那头是白发。
              </div>
            </div>
            <div class="loginBoxRight flr">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                  <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">登录</el-button>
                  <el-button>注册</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.$api.get("/userBasicinfo/selectOne/1", {}, response => {
        console.log(response);
      });
    }
  }
};
</script>


<style lang="scss" scoped="scoped">
.loginWrapper {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.el-container {
  height: 100%;
}
.el-container {
  .el-header {
    height: 15%;
  }
  .el-main {
    background: url("../assets/img/loginbg_default.jpg");
    background-position: center;
    height: 70%;
    width: 100%;
    background-size: cover;
    // position: fixed;
  }
}

.loginBox {
  width: 80%;
  margin-left: 10%;
  min-height: 500px;
  height: 60%;
  margin-top: 5%;
}

.loginBoxRight {
  width: 50%;
  height: 100%;
  background: rgba($color: #fff, $alpha: 1);
  color: #fff;
}
.el-form {
  padding: 5%;
  width: 90%;
}
</style>
<style lang="scss">
.loginBoxLeft {
  width: 50%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.6);
  color: #fff;
}
.loginBoxLeft {
  .loginQoute {
    width: 90%;
    padding: 5%;
  }
}
</style>
