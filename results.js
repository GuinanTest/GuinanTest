// 结局类型定义
const endings = {
    "default": {
        "name": "普通结局",
        "description": "你完成了所有题目，收获了一个不错的彩礼价格。虽然结果平平，但这是一个不错的开始！",
        "icon": "💰",
        "color": "#4CAF50",
        "traits": [
            "完成测试",
            "表现正常", 
            "有待提升",
            "继续努力"
        ]
    },
    "guiman": {
        "name": "龟男结局",
        "description": "恭喜！你达到了传说中的龟男境界！在某些特殊领域表现出了独特的...天赋。你的彩礼价格因为这种特殊属性而发生了戏剧性的变化。",
        "icon": "🐢",
        "color": "#FF5722",
        "traits": [
            "特殊天赋",
            "独特视角",
            "需要反思",
            "另辟蹊径"
        ]
    },
    "sigma": {
        "name": "Sigma结局",
        "description": "你是真正的Sigma男性，有着自己独特的人生哲学和价值观！恭喜你，你的人生中没有彩礼。",
        "icon": "💪",
        "color": "#9C27B0",
        "traits": [
            "独立思考",
            "自主决策",
            "领导气质",
            "Sigma特质"
        ]
    }
};

// 意识形态/结果类型定义（保留原有的，用于兼容性）
const results = {
    "default": {
        "name": "普通结局",
        "description": "你完成了所有题目，收获了一个不错的彩礼价格。虽然结果平平，但这是一个不错的开始！",
        "icon": "💰",
        "color": "#4CAF50",
        "traits": [
            "完成测试",
            "表现正常", 
            "有待提升",
            "继续努力"
        ]
    },
    "guiman": {
        "name": "龟男结局",
        "description": "恭喜！你达到了传说中的龟男境界！在某些特殊领域表现出了独特的...天赋。你的彩礼价格因为这种特殊属性而发生了戏剧性的变化。",
        "icon": "🐢",
        "color": "#FF5722",
        "traits": [
            "特殊天赋",
            "独特视角",
            "需要反思",
            "另辟蹊径"
        ]
    },
    "sigma": {
        "name": "Sigma结局",
        "description": "你是真正的Sigma男性，有着自己独特的人生哲学和价值观！恭喜你，你的人生中没有彩礼。",
        "icon": "💪",
        "color": "#9C27B0",
        "traits": [
            "独立思考",
            "自主决策",
            "领导气质",
            "Sigma特质"
        ]
    },
    "Ligong": {
        "name": "力工结局",
        "description": "你是一个典型的力工。还是先学会爱自己吧！",
        "icon": "🛠️",
        "color": "#2196F3",
        "traits": [
            "勤劳",
            "踏实",
            "务实",
            "力工特质"
        ]
    }
};

// 特殊状态定义
const specialStates = {
    "MC": {
        "name": "美少女",
        "description": "啊啊啊啊宝宝，你是一位独立美丽的大女人！",
        "icon": "💖",
        "color": "#E91E63",
        "bonus": 100000
    },
    "TL": {
        "name": "田力而已",
        "description": "一般用户，普信国男。",
        "icon": "⚡",
        "color": "#9E9E9E",
        "bonus": 0
    },
    "XNN": {
        "name": "小南梁",
        "description": "可爱，香草味",
        "icon": "🎭",
        "color": "#9C27B0",
        "bonus": 50
    },
    "LGBT": {
        "name": "多元化",
        "description": "宝宝，你不是一块吮指原味鸡。",
        "icon": "🌈",
        "color": "#673AB7",
        "bonus": 200
    },
    "YPP": {
        "name": "原批Plus",
        "description": "深度原神玩家，可能需要适当控制游戏时间。",
        "icon": "🎮",
        "color": "#F44336",
        "bonus": -500
    },
    "YP": {
        "name": "前原批",
        "description": "曾经的原神玩家，已经觉醒。",
        "icon": "🔄",
        "color": "#FF9800",
        "bonus": 100
    }
};
