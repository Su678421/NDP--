const Donation = require('./models/Donation');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');

dotenv.config();

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('数据库连接成功'))
  .catch(err => console.log(err));

// 静态文件服务 - 指向正确的目录
app.use(express.static(path.join(__dirname, '捐赠网页项目')));

// 首页
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '捐赠网页项目/index.html'));
});

// 路由
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

io.on('connection', (socket) => {
  console.log('用户连接:', socket.id);
  
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
  });
  
  socket.on('sendMessage', async (data) => {
    try {
      const Message = require('./models/Message');
      const message = new Message({
        sender: data.senderId,
        receiver: data.receiverId,
        content: data.content,
        roomId: data.roomId
      });
      await message.save();
      io.to(data.roomId).emit('newMessage', data);
    } catch (err) {
      console.error('发送消息错误:', err);
    }
  });
  
  socket.on('disconnect', () => {
    console.log('用户断开连接:', socket.id);
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`服务器运行在端口 ${process.env.PORT || 3000}`);
});