<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form @submit.native.prevent="save" label-width="80px">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" placeholder="请选择" padding-left="80px" multiple>
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <vue-editor
          v-model="model.body"
             id="editor"
          useCustomImageHandler
          @image-added="handleImageAdded"
        ></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";

export default {
  props: { id: { type: String } },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {},
      categories: []
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/articles/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "成功发送"
      });
    },

    async fetch() {
      if (this.id) {
        const ret = await this.$http.get(`/rest/articles/${this.id}`);
        this.model = ret.data;
      }
      const res = await this.$http.get(`/rest/categories`);
      this.categories = res.data;
    },

    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      var formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("/uploads", formData);
      console.log(res);
      
      let url = res.data.url; // Get url from response
      Editor.insertEmbed(cursorLocation, "image", url);
      resetUploader();
    }
  },

  created() {
    this.model = {};
    this.fetch();
  }
};
</script>

<style>
</style>