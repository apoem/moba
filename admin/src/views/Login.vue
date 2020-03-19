<template>
  <el-tabs type="border-card" class="login" value="first">
    <el-tab-pane label="请先登录" name="first">
      <el-form style="margin-top:50px;width:400px" @submit.native.prevent="save">
        <el-form-item label="用户名" label-width="80px">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">登陆</el-button>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    async save() {
      const res = await this.$http
        .post("/login", this.model)
        .catch(function(error) {
          if (error.response.data) {
            console.log(error.response.data.message);
          } else  {
            console.log("Error", error.message);
          }
        })
        if (res.data) {
          localStorage.token = res.data
          this.$router.push('/')
          this.$message({
            type: 'success',
            message: '登录成功'
          })
        }
        
      
    }
  }
};
</script>

<style>
.login {
  width: 450px;
  height: 300px;
  margin: 150px auto 0 auto;
  text-align: center;
}
</style>