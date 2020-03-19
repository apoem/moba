<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}分类</h1>
    <el-form @submit.native.prevent="save" label-width="80px">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择" padding-left="80px">
          <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="名称 ">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: { id: { type: String } },
  data() {
    return {
      model: {},
      parents: [],
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/categories/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/categories", this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "成功发送"
      });
    },


    async fetch() {
      if (this.id) {
        const ret = await this.$http.get(`/rest/categories/${this.id}`);
        this.model = ret.data;
      }
      const res = await this.$http.get(`/rest/categories`);
      this.parents = res.data;
    }
    // async fetch() {
    //   const ret = await this.$http.get(`/categories/${this.id}`);
    //     this.model = ret.data;
    // },
    // async fetchParents() {
    //   const ret = await this.$http.get(`/categories`);
    //     this.parents = ret.data;
    // }

  },

  created() {
    this.model = {}
    this.fetch();
    // this.fetchParents()
    // this.id && this.fetch()11
  }
};
</script>

<style>
</style>