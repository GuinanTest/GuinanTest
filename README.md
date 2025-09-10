# 龟男测试系统

一个多页面答题测试系统。

## 项目结构

### 页面文件
- `index.html` - 项目主页，介绍测试系统
- `instructions.html` - 测试说明页面
- `quiz.html` - 答题页面
- `results.html` - 结果展示页面

### 数据文件
- `questions.js` - 题库文件，包含所有题目和评分规则
- `results.js` - 结果分析文件，定义不同的结果类型和特殊状态
- `questions.json` - JSON格式的题库文件（向后兼容）

### 工具文件
- `start_server.bat` - 启动本地服务器（中文）
- `start_server_en.bat` - 启动本地服务器（英文）

## 使用说明

### 方法1: 使用本地服务器（推荐）
1. 双击 `start_server.bat` 启动本地服务器
2. 在浏览器中访问 `http://127.0.0.1:8000`
3. 点击"开始挑战"按钮开始测试

### 方法2: 直接打开HTML文件
1. 直接双击 `index.html` 文件
2. 如果遇到加载问题，点击"使用示例题目"

## 页面流程

1. **主页 (index.html)** - 项目介绍和功能特色
2. **说明页 (instructions.html)** - 详细的测试说明
3. **答题页 (quiz.html)** - 进行答题测试
4. **结果页 (results.html)** - 查看测试结果和分析

## 自定义题目

### 编辑 questions.js
```javascript
const questions = {
    "1": {
        "question": "你的问题内容",
        "options": ["选项1", "选项2", "选项3"],
        "score": [10, -5, 0],  // 对应选项的分数
        "state": ["STATE1", "STATE2", 0]  // 对应选项的状态标识
    }
};
```

### 编辑 results.js
```javascript
const results = {
    "your_type": {
        "name": "结果类型名称",
        "description": "结果描述",
        "icon": "🎯",
        "color": "#4CAF50",
        "minScore": 100,
        "maxScore": 500,
        "traits": ["特征1", "特征2"]
    }
};

const specialStates = {
    "STATE1": {
        "name": "状态名称",
        "description": "状态描述",
        "icon": "💫",
        "color": "#E91E63",
        "bonus": 100  // 额外分数
    }
};
```

## 特色功能

- 📱 响应式设计，支持多端访问
- 🎨 现代化UI界面
- 📊 智能评分系统
- 🏷️ 特殊状态标识
- 📈 详细结果分析
- 🔄 多页面导航

## 技术特点

- 纯前端实现，无需后端服务器
- 模块化JavaScript架构
- 本地存储传递数据
- CSS3动画效果
- 移动端适配

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge
- 移动端浏览器
