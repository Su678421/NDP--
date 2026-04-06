# NDP 新捐赠平台

## 项目简介
一个为公益组织设计的捐赠平台，直接连接捐赠者与受赠者，确保每一份爱心都能精准送达。

## 在线体验地址
🔗 [https://ndp-donation-platform.gitee.io](https://ndp-donation-platform.gitee.io)

## 功能列表

### 核心功能
- ✅ **用户注册与登录**：支持捐赠者和受赠者两种角色注册
- ✅ **头像上传与修改**：用户可自定义个人头像
- ✅ **受赠者注册**：支持上传图片证明情况
- ✅ **捐赠功能**：支持金钱和物品捐赠
- ✅ **聊天功能**：捐赠者与受赠者可直接交流
- ✅ **个人主页**：查看个人信息和捐赠记录
- ✅ **管理员后台**：审核受赠者、管理用户

### 特色功能
- 实时聊天系统
- 捐赠记录查询
- 受赠者信息展示
- 响应式设计，支持移动端

## 技术栈

### 前端
- HTML5 + CSS3
- JavaScript (原生)
- LocalStorage (本地存储)

### 后端
- Node.js + Express
- MongoDB (数据库)
- JWT (身份验证)
- Socket.io (实时通信)

### 依赖库
- bcrypt (密码加密)
- cors (跨域支持)
- dotenv (环境变量管理)
- mongoose (MongoDB ORM)
- multer (文件上传)

## 快速开始

### 本地运行步骤

1. **克隆仓库**
   ```bash
   git clone https://gitee.com/your-username/ndp-donation-platform.git
   cd ndp-donation-platform
   ```

2. **安装依赖**
   ```bash
   cd ndp-backend
   npm install
   ```

3. **配置环境变量**
   在 `ndp-backend` 目录创建 `.env` 文件：
   ```
   MONGO_URI=mongodb://localhost:27017/ndp
   JWT_SECRET=your_jwt_secret_key
   PORT=3000
   ```

4. **启动服务器**
   ```bash
   node server.js
   ```

5. **访问网站**
   打开浏览器访问：`http://localhost:3000`

## 项目截图

### 首页
![首页](screenshots/home.png) <!-- 请将项目首页截图保存为 screenshots/home.png -->

### 个人主页
![个人主页](screenshots/profile.png) <!-- 请将个人主页截图保存为 screenshots/profile.png -->

### 捐赠页面
![捐赠页面](screenshots/donate.png) <!-- 请将捐赠页面截图保存为 screenshots/donate.png -->

## 开源协议

MIT License - 详见 [LICENSE](LICENSE) 文件

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

- 邮箱：3973748283@qq.com
- 客服热线：400-123-4567

---

⭐ 如果这个项目对您有帮助，请给个 Star 支持一下！