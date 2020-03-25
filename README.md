# moba
王者荣耀(Vue Express MongoDB)

## 王者荣耀后台管理（vue、express、MongoDB）

  1. 采用 axios 发送请求，并用 async/await 方式书写
  2. 使用 axios 拦截器，捕获全局消息，根据状态码判断是否转到登陆页
  3. 服务端登录利用 token 校验
  4. 封装 CRUD 后端接口，使其更加通用。利用 req.params 动态的引入相应的 mongoose.model，返回对应数据
  5. 复用组件，根据是否有 _id 区分新建数据、编辑数据

## 王者荣耀移动端首页（vue）

  1. 利用 flex 布局重写原网页利用浮动流的导航
  2. 利用字体图标替代至少原网页 10%的精灵图，方便修改样式
  3. 封装通用的卡片组件，利用卡片组件进一步封装卡片列表，利用作用域插槽访问子组件数据
  4. 利用 scss @each 指令循环变量，定义 （边距 flex 布局 font-size）类似 bootstrap 的工具类，减少大概 20%
冗余 css 代码）