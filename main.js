(function () {

    'use strict';

    var timer = document.getElementById('timer');
    var min = document.getElementById('min');
    var sec = document.getElementById('sec');
    var reset = document.getElementById('reset');
    var start = document.getElementById('start');

    //スタートタイムを押した時の時間を入れる変数
    var startTime;

    //残り時間を計算するための変数
    var timeLeft;

    //とりあえず4秒で設定しておく。 現在時刻と表示形式を合わせるために * 1000
    var timeToCountDown = 0;

    //clearTimeoutメソッドを使いたいので、その時用に変数定義
    var timerId;

    //変数を用意し、カウントダウンの状態を管理できるようにする * Startの兼用
    var isRunning = false;

    //残り時間を表示するためにミリ秒を渡すと分とか秒に直してくれる関数を作る
    function updateTimer(t) {

        //引数として渡されたtでデータオブジェクトを作りたいので変数dという変数名で作ってみる
        var d = new Date(t);

        var m = d.getMinutes();
        var s = d.getSeconds();
        m = ('0' + m).slice(-2);
        s = ('0' + s).slice(-2);
        timer.textContent = m + ':' + s;

    }


    function countDown() {

        //setTimeoutを使って次の処理を10ミリ秒後に実行するようにする
        timerId = setTimeout(function () {

            //残り時間 = カウントされる時間 - 現在時刻
            timeLeft = timeToCountDown - (Date.now() - startTime);


            //残り時間が0になった時の処理をif文で記述する。
            if (timeLeft < 0) {
                isRunning = false;
                start.textContent = 'スタート';
                clearTimeout(timerId);
                timeLeft = 0;

                //カウントをリスタートした際にデフォ値の4秒にならないようにする
                timeToCountDown = 0;

                updateTimer(timeLeft);
                return;
            }

            //countDownを再帰的に呼び出すためのに記述
            updateTimer(timeLeft)
            countDown();

            //1秒以下の時間も表示されるようにする
        }, 10);
    }

    //startを押した際に発火するイベント
    start.addEventListener('click', function () {

        if (isRunning === false) {
            isRunning = true;

            start.textContent = 'ストップ';

            startTime = Date.now();

            //カウントダウンの機能は再帰的に実行したいのでcountDown関数を入れとく
            countDown();
        } else {
            isRunning = false;

            //表記をStartに戻す
            start.textContent = 'スタート';

            //この時点のtimeLeftで更新してあげる
            timeToCountDown = timeLeft;

            //カウントを止めたいのでclearTimeoutする
            clearTimeout(timerId);
        }
    });

    //Minを押した時の処理を記述
    min.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning === true) {
            return;
        }

        //分 = 60秒なので
        timeToCountDown += 60 * 1000;

        //60分、60秒を超えたら0になるようにする
        if (timeToCountDown >= 60 * 60 * 1000) {
            timeToCountDown = 0;
        }

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer(timeToCountDown);
    });


    //Secを押した時の処理
    sec.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning === true) {
            return;
        }

        //60秒なので
        timeToCountDown += 1000 * 10;

        if (timeToCountDown >= 60 * 60 * 1000) {
            timeToCountDown = 0;
        }

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer(timeToCountDown);
    });


    //Resetを押した時の処理
    reset.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning === true) {
            return;
        }

        //60秒なので
        timeToCountDown = 0;

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer(timeToCountDown);
    });
})();





(function () {

    'use strict';

    var timer2 = document.getElementById('timer2');
    var min2 = document.getElementById('min2');
    var sec2 = document.getElementById('sec2');
    var reset2 = document.getElementById('reset2');
    var start2 = document.getElementById('start2');

    //スタートタイムを押した時の時間を入れる変数
    var startTime2;

    //残り時間を計算するための変数
    var timeLeft2;

    //とりあえず4秒で設定しておく。 現在時刻と表示形式を合わせるために * 1000
    var timeToCountDown2 = 0;

    //clearTimeoutメソッドを使いたいので、その時用に変数定義
    var timerId2;

    //変数を用意し、カウントダウンの状態を管理できるようにする * Startの兼用
    var isRunning2 = false;

    //残り時間を表示するためにミリ秒を渡すと分とか秒に直してくれる関数を作る
    function updateTimer2(t) {

        //引数として渡されたtでデータオブジェクトを作りたいので変数dという変数名で作ってみる
        var d2 = new Date(t);

        var m2 = d2.getMinutes();
        var s2 = d2.getSeconds();
        m2 = ('0' + m2).slice(-2);
        s2 = ('0' + s2).slice(-2);
        timer2.textContent = m2 + ':' + s2;

    }


    function countDown2() {

        //setTimeoutを使って次の処理を10ミリ秒後に実行するようにする
        timerId2 = setTimeout(function () {

            //残り時間 = カウントされる時間 - 現在時刻
            timeLeft2 = timeToCountDown2 - (Date.now() - startTime2);


            //残り時間が0になった時の処理をif文で記述する。
            if (timeLeft2 < 0) {
                isRunning2 = false;
                start2.textContent = 'スタート';
                clearTimeout(timerId2);
                timeLeft2 = 0;

                //カウントをリスタートした際にデフォ値の4秒にならないようにする
                timeToCountDown2 = 0;

                updateTimer2(timeLeft2);
                return;
            }

            //countDownを再帰的に呼び出すためのに記述
            updateTimer2(timeLeft2)
            countDown2();

            //1秒以下の時間も表示されるようにする
        }, 10);
    }

    //startを押した際に発火するイベント
    start2.addEventListener('click', function () {

        if (isRunning2 === false) {
            isRunning2 = true;

            start2.textContent = 'ストップ';

            startTime2 = Date.now();

            //カウントダウンの機能は再帰的に実行したいのでcountDown関数を入れとく
            countDown2();
        } else {
            isRunning2 = false;

            //表記をStartに戻す
            start2.textContent = 'スタート';

            //この時点のtimeLeftで更新してあげる
            timeToCountDown2 = timeLeft2;

            //カウントを止めたいのでclearTimeoutする
            clearTimeout(timerId2);
        }
    });

    //Minを押した時の処理を記述
    min2.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning2 === true) {
            return;
        }

        //分 = 60秒なので
        timeToCountDown2 += 60 * 1000;

        //60分、60秒を超えたら0になるようにする
        if (timeToCountDown2 >= 60 * 60 * 1000) {
            timeToCountDown2 = 0;
        }

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer2(timeToCountDown2);
    });


    //Secを押した時の処理
    sec2.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning2 === true) {
            return;
        }

        //60秒なので
        timeToCountDown2 += 1000 * 10;

        if (timeToCountDown2 >= 60 * 60 * 1000) {
            timeToCountDown2 = 0;
        }

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer2(timeToCountDown2);
    });


    //Resetを押した時の処理
    reset2.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning2 === true) {
            return;
        }

        //60秒なので
        timeToCountDown2 = 0;

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer2(timeToCountDown2);
    });
})();


(function () {

    'use strict';

    var timer3 = document.getElementById('timer3');
    var min3 = document.getElementById('min3');
    var sec3 = document.getElementById('sec3');
    var reset3 = document.getElementById('reset3');
    var start3 = document.getElementById('start3');

    //スタートタイムを押した時の時間を入れる変数
    var startTime3;

    //残り時間を計算するための変数
    var timeLeft3;

    //とりあえず4秒で設定しておく。 現在時刻と表示形式を合わせるために * 1000
    var timeToCountDown3 = 0;

    //clearTimeoutメソッドを使いたいので、その時用に変数定義
    var timerId3;

    //変数を用意し、カウントダウンの状態を管理できるようにする * Startの兼用
    var isRunning3 = false;

    //残り時間を表示するためにミリ秒を渡すと分とか秒に直してくれる関数を作る
    function updateTimer3(t) {

        //引数として渡されたtでデータオブジェクトを作りたいので変数dという変数名で作ってみる
        var d3 = new Date(t);

        var m3 = d3.getMinutes();
        var s3 = d3.getSeconds();
        m3 = ('0' + m3).slice(-2);
        s3 = ('0' + s3).slice(-2);
        timer3.textContent = m3 + ':' + s3;

    }


    function countDown3() {

        //setTimeoutを使って次の処理を10ミリ秒後に実行するようにする
        timerId3 = setTimeout(function () {

            //残り時間 = カウントされる時間 - 現在時刻
            timeLeft3 = timeToCountDown3 - (Date.now() - startTime3);


            //残り時間が0になった時の処理をif文で記述する。
            if (timeLeft3 < 0) {
                isRunning3 = false;
                start3.textContent = 'スタート';
                clearTimeout(timerId3);
                timeLeft3 = 0;

                //カウントをリスタートした際にデフォ値の4秒にならないようにする
                timeToCountDown3 = 0;

                updateTimer3(timeLeft3);
                return;
            }

            //countDownを再帰的に呼び出すためのに記述
            updateTimer3(timeLeft3)
            countDown3();

            //1秒以下の時間も表示されるようにする
        }, 10);
    }

    //startを押した際に発火するイベント
    start3.addEventListener('click', function () {

        if (isRunning3 === false) {
            isRunning3 = true;

            start3.textContent = 'ストップ';

            startTime3 = Date.now();

            //カウントダウンの機能は再帰的に実行したいのでcountDown関数を入れとく
            countDown3();
        } else {
            isRunning3 = false;

            //表記をStartに戻す
            start3.textContent = 'スタート';

            //この時点のtimeLeftで更新してあげる
            timeToCountDown3 = timeLeft3;

            //カウントを止めたいのでclearTimeoutする
            clearTimeout(timerId3);
        }
    });

    //Minを押した時の処理を記述
    min3.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning3 === true) {
            return;
        }

        //分 = 60秒なので
        timeToCountDown3 += 60 * 1000;

        //60分、60秒を超えたら0になるようにする
        if (timeToCountDown3 >= 60 * 60 * 1000) {
            timeToCountDown3 = 0;
        }

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer3(timeToCountDown3);
    });


    //Secを押した時の処理
    sec3.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning3 === true) {
            return;
        }

        //60秒なので
        timeToCountDown3 += 1000 * 10;

        if (timeToCountDown3 >= 60 * 60 * 1000) {
            timeToCountDown3 = 0;
        }

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer3(timeToCountDown3);
    });


    //Resetを押した時の処理
    reset3.addEventListener('click', function () {

        //カウントダウン中に設定時間を変更できないようにする
        if (isRunning3 === true) {
            return;
        }

        //60秒なので
        timeToCountDown3 = 0;

        //timeToCountDownをtimerに反映させたいのでupDatetimerを使う
        updateTimer3(timeToCountDown3);
    });
})();