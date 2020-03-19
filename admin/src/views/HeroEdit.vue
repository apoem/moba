<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}英雄</h1>
    <el-form @submit.native.prevent="save" style="margin-top:2em">
      <el-tabs value="first" type="card">
        <el-tab-pane label="基础资料" name="first">
          <el-form-item label="名称 ">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/uploads' "
              :show-file-list="false"
              :on-success="afterUplodas"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="分类">
            <el-select multiple v-model="model.categories" placeholder="请选择" padding-left="80px">
              <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate v-model="model.scores.difficult" show-score :max="9"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate v-model="model.scores.skill" show-score :max="9"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate v-model="model.scores.attack" show-score :max="9"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate v-model="model.scores.survive" show-score :max="9"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select multiple v-model="model.items1" placeholder="请选择" padding-left="80px">
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select multiple v-model="model.items2" placeholder="请选择" padding-left="80px">
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="model.usageTips"></el-input>
          </el-form-item>
          <el-form-item label="团战技巧">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="model.teamTips"></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" type="card" name="skils">
          <el-button round @click="model.skills.push({})">添加技能</el-button>

          <el-row type="flex" style="flex-wrap: wrap">
            <el-col
              :md="11"
              v-for="(skill, index) in model.skills"
              :key="index"
              style=" text-align:center"
            >
              <el-form-item label="名称" label-width="80px">
                <el-input v-model="skill.title"></el-input>
              </el-form-item>
              <el-form-item label="图片" label-width="80px">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/uploads' "
                  :show-file-list="false"
                  :on-success=" (res) => $set(skill , 'icon' , res.url)"
                >
                  <img v-if="skill.icon" :src="skill.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="小提示" label-width="80px">
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="skill.tips"></el-input>
              </el-form-item>
              <el-button
                type="danger"
                icon="el-icon-delete"
                @click="model.skills.splice(index,1)"
                style="margin:10px auto"
              ></el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="海报" type="card" name="post">
          <el-form-item label="图片" label-width="80px">
            <el-upload
              class="avatar-uploader"
              :action="$http.defaults.baseURL + '/uploads' "
              :show-file-list="false"
              :on-success=" (res) => {return model.post = res.url}"
              
            >
              <img v-if="model.post" :src="model.post" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>

      <el-form-item style="margin:3em">
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
        avatar: "",
        title: "",
        categories: "",
        scores: {
          difficult: 0,
          skill: 0,
          attack: 0,
          survive: 0
        },
        skills: [],
        usageTips: "",
        teamTips: ""
      },
      categories: [],
      items: []
    };
  },
  methods: {
    async save() {
      if (this.id) {
        await this.$http.put(`/rest/heroes/${this.id}`, this.model);
      } else {
        await this.$http.post("/rest/heroes", this.model);
      }
      this.$router.push("/heroes/list");
      this.$message({
        type: "success",
        message: "成功发送"
      });
    },

    async fetch() {
      if (this.id) {
        const ret = await this.$http.get(`/rest/heroes/${this.id}`);
        this.model = Object.assign(this.model, ret.data);
      }
      const res = await this.$http.get("/rest/categories");
      this.categories = res.data;
      const ret = await this.$http.get("/rest/items");
      this.items = ret.data;
    },

    afterUplodas(res) {
      this.model.avatar = res.url;
    },

    addSkills() {}
  },

  created() {
    this.fetch();
  }
};
</script>



<style>
</style>