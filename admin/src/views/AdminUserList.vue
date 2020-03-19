<template>
  <el-table :data="items" style="width: 100%">
    <el-table-column label="ID" style="width: 220px">
      <template slot-scope="scope">
        <span style="margin-left: 10px ">{{ scope.row._id }}</span>
      </template>
    </el-table-column>
    <el-table-column label="用户名" prop="username">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>名称: {{ scope.row.username }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.username }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="$router.push(`/admin_users/edit/${scope.row._id}` )">编辑</el-button>
        <el-button size="mini" type="danger" @click="remove(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("/rest/admin_users");
      this.items = res.data;
    },

     remove(row) {
      this.$confirm(`此操作将永久删除${row.name}, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( async () => {
          const res = await this.$http.delete(`/rest/admin_users/${row._id}`);
          console.log(res);
          
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          
          this.fetch()

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>