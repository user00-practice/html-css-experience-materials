# HTML/CSS体験シナリオ 配布教材

CSSフレームワークで見た目がどれだけ変わるかを体験するための教材です。

## フォルダ構成

| フォルダ | 内容 |
|---|---|
| `before/` | フレームワーク未適用（オリジナル。編集せずそのまま残しておく） |
| `after-bootstrap/` | Bootstrap 5 で装飾した完成例（実習の答え） |
| `after-tailwind/` | Tailwind CSS で装飾した完成例（見比べ用） |
| `after-bulma/` | Bulma で装飾した完成例（見比べ用） |
| `bonus-clock/` | 発展課題：TypeScriptでデジタル時計（任意） |

## 使い方

1. `before` フォルダをコピーし、`work` という名前に変更する（以降の編集はすべて `work` フォルダの中で行う）
2. `work/index.html` をVSCodeで開き、Live Serverでブラウザ表示を確認する
3. 手順に沿って `<head>` にBootstrapのCDNリンクを追加し、各セクションにクラスを付けて装飾していく
4. 完成したら `after-bootstrap/index.html` と見比べる
5. 最後に `before/index.html`（オリジナル）と `work/index.html`（編集後）を並べて開き、元のHTMLからどれだけ変わったかを確認する
6. 余裕があれば `after-tailwind/`・`after-bulma/` を開き、同じ内容でも書き方が異なることを確認する。VSCodeの「ファイルの比較」機能（Select for Compare → Compare with Selected）を使うと、コードの差分を直接見比べられる

## 発展課題：TypeScriptでデジタル時計

`bonus-clock/` フォルダに、時間が余った場合向けの発展課題一式が入っています。

| フォルダ | 内容 |
|---|---|
| `bonus-clock/starter/` | TODOコメント付きの未完成版（取り組む対象） |
| `bonus-clock/solution/` | 完成例（TypeScript） |
| `bonus-clock/reference-js/` | 参考：同じ内容のプレーンJavaScript版 |

Node.js等のインストールは不要です。Babel Standalone（CDN経由）がブラウザ上でTypeScriptの型注釈を取り除いてJavaScriptとして実行するため、`clock.ts` を保存してLive Serverでブラウザを更新するだけで動作確認できます。ただし型チェックは行われない（構文の変換のみ）点に注意してください。

`reference-js/` はBabelを使わない素のJavaScriptで書かれており、TypeScript版とコードを見比べることで「型注釈がある/ない」の違いを確認できます。
