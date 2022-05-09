import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
    code: 0, // 错误码
    msg: "", // 错误消息
    data: [{
            id: "1",
            midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202107%2F15%2F20210715205341_7aec6.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1650032793&t=2449dfd9196117f64507c015c8a5c4b4",
            bigImg: "https://tse1-mm.cn.bing.net/th/id/R-C.f251b99dea492d083af3b0cdf6ebfca8?rik=PGh2SgT1Ag37uQ&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2faf27f52056ec1e7b00920b49fba1de4ace8d036e.jpg&ehk=jT7UQqxyq4q7RDs7cughjNguSmNZYJfH14wVYReffhQ%3d&risl=&pid=ImgRaw&r=0",
            title: "凛冬将至",
            description: "人唯有恐惧的时候方能勇敢",
        },
        {
            id: "2",
            midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
            bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F976bf7993af69782264803ce7150d6234c76b31d.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652972287&t=979cdc1f0c29240b63a2036745f3ba5a",
            title: "血火同源",
            description: "如果我回头，一切都完了",
        },
        {
            id: "3",
            midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
            bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2020-08-11%2F5f320a234be26.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1652973188&t=925f5b1a714f2b4152365afb57fc3ecb",
            title: "听我怒吼",
            description: "兰尼斯特有债必偿",
        },
    ]
})