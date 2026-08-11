# HTML/CSS体験シナリオ 配布教材

CSSフレームワークで見た目がどれだけ変わるかを体験するための教材です。

## フォルダ構成

| フォルダ | 内容 |
|---|---|
| `before/` | フレームワーク未適用（配布・実習のベース） |
| `after-bootstrap/` | Bootstrap 5 で装飾した完成例（実習の答え） |
| `after-tailwind/` | Tailwind CSS で装飾した完成例（見比べ用） |
| `after-bulma/` | Bulma で装飾した完成例（見比べ用） |

## 使い方（受講者）

1. `before/index.html` をVSCodeで開き、Live Server等でブラウザ表示を確認する
2. 手順に沿って `<head>` にBootstrapのCDNリンクを追加し、各タグにクラスを付けていく
3. 完成したら `after-bootstrap/index.html` と見比べる
4. 余裕があれば `after-tailwind/`・`after-bulma/` を開き、同じ内容でも書き方が異なることを確認する

## GitHubリポジトリとしての配布方法（講師向け）

1. このフォルダの内容をそのまま新規リポジトリ（例: `html-css-experience`）にpushする
2. 受講者には `before/` の内容だけをベースに配布してもよいし、リポジトリ全体をクローンさせてから `before/` フォルダを使わせてもよい
3. 本教材では「リポジトリ全体をクローンし、`before/`フォルダで作業する」構成を想定している（講師用シナリオ参照）
