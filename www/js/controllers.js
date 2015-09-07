angular.module('starter.controllers', [])

.controller('TLCtrl', function($scope) {
    $scope.rows = []
    var images = [
        {
            name: "sample0.png",
            url: "/img/sample0.png"
        },
        {
            name: "sample1.png",
            url: "/img/sample1.png"
        },
        {
            name: "sample2.png",
            url: "/img/sample2.png"
        },
        {
            name: "sample3.png",
            url: "/img/sample3.png"
        },
        {
            name: "sample4.png",
            url: "/img/sample4.png"
        },
        {
            name: "sample5.png",
            url: "/img/sample5.png"
        },
        {
            name: "sample6.png",
            url: "/img/sample6.png"
        },
        {
            name: "sample7.png",
            url: "/img/sample7.png"
        },
        {
            name: "sample8.png",
            url: "/img/sample8.png"
        },
        {
            name: "sample9.png",
            url: "/img/sample9.png"
        }
    ]

    // 画像表示の列の数
    // 列の数を変えた際には、tab−tl.htmlの<img>の中のcol-*を適切な数字に変更すること
    // column = 2 のときは、col−50
    // column = 4 のときは、col−25
    var column = 4

    // 画像を2個ずつのデータの配列にしておく
    // [ [sample0,sample1], [sample2, sample3], [sample4, sample5], [sample6, sample7], [sample8, sample9]  ]
    // $scope.rowsが２個ずつの画像が入った配列なので、tab-ui.htmlのng-repeatの部分で、$scope.rowsを利用して画像を2列にして表示する。
    for(var i = 0; i < images.length / column ; i++) {
        $scope.rows.push(images.slice(i*column, column*(i+1)))
    }

})

.controller('InfoCtrl', function($scope, Chats) {
    $scope.posts = [
        {
            date: "2014/10/01",
            msg: "Hello world"
        },
        {
            date: "2014/10/05",
            msg: "Hello"
        },
        {
            date: "2014/10/10",
            msg: "world"
        },
        {
            date: "2014/10/15",
            msg: "This"
        },
        {
            date: "2014/10/20",
            msg: "That"
        },
        {
            date: "2014/11/01",
            msg: "Those"
        },
        {
            date: "2014/11/10",
            msg: "These"
        },
        {
            date: "2014/11/15",
            msg: "They"
        },
        {
            date: "2014/11/20",
            msg: "He"
        },
        {
            date: "2014/11/25",
            msg: "She"
        }
    ]
})

.controller('MapCtrl', function($scope) {
});
