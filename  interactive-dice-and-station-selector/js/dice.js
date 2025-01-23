// タイトルの設定 // Установка заголовка
var titleElement = document.getElementById("title");
var messageElement = document.getElementById("message");
var diceElement = document.getElementById("dice");
var number = 1;

// タイトルと初期メッセージの設定 // Установка заголовка и начального сообщения
titleElement.textContent = 'DICE';
messageElement.textContent = 'サイコロをふってください！'; // Бросьте кубик!

/**
 * ランダムな整数を生成 // Генерация случайного целого числа
 */
/*
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};
*/
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
};

/**
 * サイコロの画像を切り替える関数 // Функция для смены изображения кубика
 */
const updateDiceImage = (number) => {
    var resultElement = document.getElementById("result");
    // TODO: サイコロ画像の更新 // Обновление изображения кубика
    resultElement.src = "./images/dice" + number + ".png";
};

/**
 * rollDice()
 * サイコロを振る関数 // Функция для броска кубика
 */
// TODO: HTMLに onclickイベントで登録 // Зарегистрировать событие onclick в HTML
const rollDice = () => {
    console.log("Click!");

    const timer = setInterval(() => {
        // TODO: 1 - 6 のランダムな数字を取得 // Получить случайное число от 1 до 6
        number = randomNumber(1, 6);

        // TODO: サイコロが振られている間、updateDiceImage() で画像をランダムに変更(0.05秒インターバル） // Пока кубик крутится, случайно менять изображение с интервалом 0,05 секунды через updateDiceImage()
    updateDiceImage(number)
    }, 200);

    // TODO: アニメーション開始: class = rolling を追加 // Начало анимации: добавить класс "rolling"
    // img タグを取得
    var resultElement = document.getElementById("result");
    // class = rolling を追加
    resultElement.classList.add('rolling');

    // TODO: setTimeout で２秒後にサイコロを止める // Остановить кубик через 2 секунды с помощью setTimeout
    setTimeout(() => {
        // タイマー停止
        clearInterval(timer)
        // TODO: アニメーション終了 class = rolling を削除 // Конец анимации: удалить класс "rolling"
        resultElement.classList.remove('rolling');
        
        //メッセージ更新
        messageElement.textContent = "サイコロをふりました！";
    }, 2000);

};

// ウィンドウ読み込み完了後に実行 // Выполнить после завершения загрузки окна
window.onload = () => {
    // ローディングを非表示 // Скрыть загрузку
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'none';
}