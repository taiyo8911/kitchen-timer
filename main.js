(function () {
    'use strict';

    // タイマーの要素を取得
    const timers = [
        { id: 1, timer: document.getElementById('timer1'), min: document.getElementById('min1'), sec: document.getElementById('sec1'), reset: document.getElementById('reset1'), start: document.getElementById('start1'), timeToCountDown: 0, timerId: null, isRunning: false, startTime: null, timeLeft: null },
        { id: 2, timer: document.getElementById('timer2'), min: document.getElementById('min2'), sec: document.getElementById('sec2'), reset: document.getElementById('reset2'), start: document.getElementById('start2'), timeToCountDown: 0, timerId: null, isRunning: false, startTime: null, timeLeft: null },
        { id: 3, timer: document.getElementById('timer3'), min: document.getElementById('min3'), sec: document.getElementById('sec3'), reset: document.getElementById('reset3'), start: document.getElementById('start3'), timeToCountDown: 0, timerId: null, isRunning: false, startTime: null, timeLeft: null },
    ];

    // タイマー表示関数
    function displayTimer(t, timerObj) {
        const minutes = Math.floor(t / (1000 * 60));
        const seconds = Math.floor((t / 1000) % 60);
        const timerText = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
        timerObj.timer.textContent = timerText;
    }

    // カウントダウン関数
    function countDown(timerObj) {
        timerObj.timerId = setTimeout(function () {
            timerObj.timeLeft = timerObj.timeToCountDown - (Date.now() - timerObj.startTime);

            if (timerObj.timeLeft < 0) {
                timerObj.timeLeft = 0;
                timerObj.timeToCountDown = 0;
                displayTimer(timerObj.timeLeft, timerObj);
                timerObj.start.textContent = 'スタート';
                return;
            }

            displayTimer(timerObj.timeLeft, timerObj);
            countDown(timerObj);
        }, 10);
    }

    // スタートボタンクリック時の処理
    function startTimer(timerObj) {
        // カウントダウンされていない場合
        if (timerObj.isRunning === false) {
            // カウントダウンフラグを立てる
            timerObj.isRunning = true;

            // ボタンの表記をストップに変える
            timerObj.start.textContent = 'ストップ';

            // 現在時刻をスタートタイムにする
            timerObj.startTime = Date.now();

            // カウントダウン開始
            countDown(timerObj);
        } else {
            // カウントダウンフラグを下す
            timerObj.isRunning = false;

            // ボタンの表記をスタートに戻す
            timerObj.start.textContent = 'スタート';

            // この時点のtimeLeftで更新してあげる
            timerObj.timeToCountDown = timerObj.timeLeft;

            // タイマーをクリアする
            clearTimeout(timerObj.timerId);
        }

    }

    // スタートボタンのイベントリスナー登録
    timers.forEach(function (timerObj) {
        timerObj.start.addEventListener('click', function () {
            startTimer(timerObj);
        });
    });

    // リセットボタンのイベントリスナー登録
    timers.forEach(function (timerObj) {
        timerObj.reset.addEventListener('click', function () {
            // カウントダウン中はリセットされないようにする
            if (timerObj.isRunning === true) {
                return;
            } else {
                timerObj.timeToCountDown = 0;
                displayTimer(timerObj.timeToCountDown, timerObj);
            }
        });
    });

    // 分・秒ボタンのイベントリスナー登録
    timers.forEach(function (timerObj) {
        // 分ボタン
        timerObj.min.addEventListener('click', function (e) {
            // カウントダウン中に設定時間を変更できないようにする
            if (timerObj.isRunning === true) {
                return;
            } else {
                timerObj.timeToCountDown += 60 * 1000;
                displayTimer(timerObj.timeToCountDown, timerObj);
            }
        });

        // 秒ボタン
        timerObj.sec.addEventListener('click', function (e) {
            //カウントダウン中に設定時間を変更できないようにする
            if (timerObj.isRunning === true) {
                return;
            } else {
                timerObj.timeToCountDown += 1000 * 10;
                displayTimer(timerObj.timeToCountDown, timerObj);
            }
        });
    });
})();