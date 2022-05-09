import Mock from "mockjs";
import qs from "querystring";

// 提交留言板消息
Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid", // id
    nickname: "@cname", // 昵称
    content: "@cparagraph(1, 10)", // 内容
    createDate: Date.now(), // 提交时间
    "avatar|1": [
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
      "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
    ],
  },
});

//分页获取留言板
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
 
  const query = qs.parse(options.url); // 获取到页容量

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,  // 总数
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar6.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar4.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar8.jpg",
            "https://qiheizhiya.oss-cn-shenzhen.aliyuncs.com/image/avatar2.jpg",
          ],
        },
      ],
    },
  });
});
