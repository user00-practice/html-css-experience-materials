// 発展課題：デジタル時計を作ろう
//
// id="clock" の要素に、現在時刻を「時:分:秒」（例：14:05:09）の形式で
// 1秒ごとに更新しながら表示するプログラムを作成してください。
//
// このファイルはブラウザ上でBabelによってJavaScriptに変換されて実行されます。
// 保存してブラウザを更新すると、すぐに結果を確認できます。

const clockEl = document.getElementById("clock") as HTMLElement;

function updateClock(): void {
  // TODO 1: 現在時刻を取得する
  //   ヒント：new Date() で「今」の日時を表すDateオブジェクトが作れる

  // TODO 2: 時・分・秒を、それぞれ2桁の文字列にする
  //   ヒント：Dateオブジェクトには getHours() / getMinutes() / getSeconds() がある
  //   ヒント：1桁の数字を2桁にするには、文字列の padStart(2, "0") が便利
  //     例）String(9).padStart(2, "0") → "09"

  // TODO 3: clockEl.textContent に "HH:MM:SS" の形式で代入する
  //   ヒント：テンプレートリテラル（`${h}:${m}:${s}`）を使うと書きやすい
}

// TODO 4: setInterval を使って、1秒（1000ミリ秒）ごとに updateClock を呼び出す

// ページを開いた直後に一瞬「--:--:--」のままにならないよう、最初に一度だけ呼び出しておく
updateClock();
