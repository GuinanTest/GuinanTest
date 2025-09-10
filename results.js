// 结局类型定义
const endings = {
    "default": {
        "name": "普通结局",
        "description": "你完成了所有题目，获得了基础的彩礼价格。虽然结果平平，但这是一个不错的开始！",
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
        "description": "你是真正的Sigma男性！独立自主，不随波逐流，有着自己独特的人生哲学和价值观。你的高价值让彩礼价格达到了新的高度。",
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
    "perfect": {
        "name": "完美主义者",
        "description": "你是一个有着正确价值观和优秀品德的人！",
        "icon": "🌟",
        "color": "#4CAF50",
        "minScore": 1000,
        "maxScore": Infinity,
        "traits": [
            "尊重他人",
            "价值观正确", 
            "品德高尚",
            "积极向上"
        ]
    },
    "good": {
        "name": "优秀学员",
        "description": "你表现得很不错，继续保持这种积极的态度！",
        "icon": "👍",
        "color": "#8BC34A",
        "minScore": 500,
        "maxScore": 999,
        "traits": [
            "表现良好",
            "态度积极",
            "有改进空间",
            "值得鼓励"
        ]
    },
    "neutral": {
        "name": "普通用户",
        "description": "你的表现还算可以，但还有很大的提升空间。",
        "icon": "😊",
        "color": "#FF9800",
        "minScore": 0,
        "maxScore": 499,
        "traits": [
            "表现平平",
            "需要改进",
            "有潜力",
            "继续努力"
        ]
    },
    "problematic": {
        "name": "需要反思",
        "description": "你的一些观点可能需要重新考虑，建议多学习正确的价值观。",
        "icon": "😅",
        "color": "#F44336",
        "minScore": -Infinity,
        "maxScore": -1,
        "traits": [
            "观点有误",
            "需要学习",
            "有待改进",
            "需要引导"
        ]
    }
};

// 特殊状态定义
const specialStates = {
    "MC": {
        "name": "美少女",
        "description": "恭喜你！你是一位美丽的女性！",
        "icon": "💖",
        "color": "#E91E63",
        "bonus": 100000
    },
    "TL": {
        "name": "钛合金",
        "description": "男性用户，普通表现。",
        "icon": "⚡",
        "color": "#9E9E9E",
        "bonus": 0
    },
    "XNN": {
        "name": "小南梁",
        "description": "特殊用户类型。",
        "icon": "🎭",
        "color": "#9C27B0",
        "bonus": 50
    },
    "LGBT": {
        "name": "多元化",
        "description": "支持多元化的用户。",
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
