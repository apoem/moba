<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}广告位</h1>
    <el-form @submit.native.prevent="save" label-width="80px" >
      <el-form-item label="名称 " style="margin:20px 0" >
        <el-input v-model="model.name" ></el-input>
      </el-form-item>
      <el-form-item label="广告" label-width="80px" style="margin:20px 0">
        <el-button round @click="model.items.push({})"  >添加广告</el-button>

        <el-row type="flex" style="flex-wrap: wrap">
          <el-col
            :md="24"
            v-for="(item, index) in model.items"
            :key="index"
            style=" text-align:center"
          >
            <el-form-item label="url地址" label-width="80px" style="margin:20px 0">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" label-width="80px">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/uploads' "
                :show-file-list="false"
                :on-success=" (res) => $set(item , 'image' , res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-button
              type="danger"
              icon="el-icon-delete"
              @click="model.items.splice(index,1)"
              style="margin:10px auto"
            ></el-button>
          </el-col>
        </el-row>
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
      model: {
        name: "",
        items: []
      }
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/ads/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message({
        type: "success",
        message: "成功发送"
      });
    },

    async fetch() {
      if (this.id) {
        const ret = await this.$http.get(`/rest/ads/${this.id}`);
        this.model = ret.data;
      }
    }
  },

  created() {
    this.fetch();
  }
};
</script>

<style>

</style>