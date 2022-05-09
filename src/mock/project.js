import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, 'get', {
    code: 0,
    msg: '',
    "data|10-20": [{ //模拟了10-20个项目
        id: "@uuid",
        name: "@ctitle(1,10)",
        "url|1": ["@url", null],
        "github|1": ["@url", null],
        "description|1-4": ["@cparagraph(1, 5)"], // 生成描述，描述是个数组
        thumb: "@image(300x250, @color,#fff,@natural)", // 生成随机图片
    }]
})