import request from "./request";

//两个api 
//得到分页，分页得到所有留言板的消息
export async function getMessages(page = 1, limit = 10) {
  return await request.get("/api/message", {
    params: {
      page,
      limit,
    },
  });
}
//提交留言板消息
export async function postMessage(msgInfo) {
  return await request.post("/api/message", msgInfo);
}
