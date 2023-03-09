// Yms 20023年03月09日 https://github.com/Ymshub/Birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我的",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "小可爱",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第五个生日了",
        "2013年9月20日我们相遇",
        "在一段时间我喜欢一段音乐",
        "听一段音乐我怀念一段时光",
        "坐在一段时光里怀念另一段时光的掌纹",
        "那时的我们是相遇还是错过",
        "还是，没有结局的邂逅",
        "2018年12月30日我们相逢",
        "感谢时光予我的馈赠",
        "是谁夜半深缝着心事",
        "如此的念念不忘",
        "阵阵回响",
        "2019年01月11日我们相恋",
        "恍惚中时常想起",
        "那天阳光微暖的午后",
        "似宿命的双手",
        "拨动了你我的心弦",
        "在每一个稀疏平常的日子里",
        "眼角溢满了愉悦的瞬间",
        "那天以后",
        "我仿佛握住了光",
        "2019年09月07日我们相伴",       
        "这个世界上",      
        "有许多一瞬间让人倍感快乐的事情", 
        "比如：",
        "烈日炎炎下喝的第一口冰可乐",
        "比如：",
        "短信「叮」的一声提醒自己工资到账",
        "比如：",
        "换上秋天衣服时",
        "从口袋里摸出了忘记的一百元钱",
        "又比如：",
        "当我想你的时候",
        "问，你在干嘛",
        "你说，在想你",
        "那种心情",
        "却不是一瞬间的快乐",
        "而是让我在这黯淡无光的生活里",
        "每每想起时",
        "都能提起对这个世界的爱意",
        "对",
        "让我竭尽全力去爱这个风吹雨淋世界的",
        "不是其他，而是你",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐-相依为命",
        bannar_coming: "氛围",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "想对你说的话",
    }
};
