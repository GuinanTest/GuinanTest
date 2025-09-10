// 题库数据
const questions = {
    "1": {
        "question": "你尊重女性吗？",
        "options": ["是", "否"],
        "score": [10, -1000],
        "state": [0, 0],
        "sigma": [0, 0],
        "firstsin": [0, 0]
    },
    "2": {
        "question": "你的性别是？",
        "options": ["男", "女", "小南梁", "其他"],
        "score": [-100, 114514, 0, 100],
        "state": ["TL", "MC", "XNN", "LGBT"],
        "sigma": [0, 0, 1000, 0],
        "firstsin": [1000, 0, 0, 0]
    },
    "3": {
        "question": "你玩原神吗？",
        "options": ["是，现在在玩。", "是，已退坑。", "否，我不承认我玩过", "否，从来没玩过。"],
        "score": [-1000, -100, 100, 1000],
        "state": ["YPP", "YP", 0, 0],
        "sigma": [0, 0, 0, 0],
        "firstsin": [0, 0, 0, 0]
    }
};
