# zaikos管理リポジトリ

このリポジトリは在庫管理システムのフロントエンド､zaikosの開発リポジトリ兼ホスティングリポジトリになります｡

## ビルド状況

## ローカル開発環境構築

このプロジェクトは vscode devcontainer を導入しています｡

そちらよりコンテナを起動することで､バージョンの差異を気にすることなく開発が出来ます｡

まず､このレポジトリを Remote Container 機能を使用し､コンテナ内で開いてください｡

ローカルサーバーが起動できます｡

```bash
npm run dev
```

## 開発詳細

ソースコードは`src`以下に存在します｡

### ブランチについて

`main`ブランチをサイトのビルドブランチとして使用しております｡

また､`dev`ブランチを開発用のブランチとし､開発しています｡

そのため､新たに変更を加えるときは`dev`ブランチより新たにブランチを作成し､開発を行ってください｡

### TypeScript

このプロジェクトでは､TypeScript を採用しております｡

型の宣言は全て`type`より行い､`interface`は抽象クラスとして使用してください｡

型を明示的にしなければならない時以外は､なるべく型推論を利用してください｡

### デザイン設計

ディレクトリ構成として､原則アトミックデザインを採用していますが､MUIを導入しているため､すこしざっくりでもいいです｡

新規コンポーネントを作成する際は､そちらに沿って作成をお願いいたします｡

### API

`src/pages/api/*`以下はAPI Routesとして機能します｡

詳しい使い方は[API Routes](https://nextjs.org/docs/api-routes/introduction)を参照してください｡

### Lint & Format

ESLint によるリント､Prettier によるソースコードフォーマットを行っております｡

特に Prettier については､vscode 使用時はファイル保存時に自動でフォーマットが行われるよう設定を行っております｡

## License

このサイトのソースコードは[MIT ライセンス](https://opensource.org/licenses/MIT)によりライセンスされています｡

外部ライブラリ等の使用によるライセンスの継承が発生した際は､そのライセンスを継承します｡

ソースコードは､株式会社 Women's Future Center の許可を得た場合のみ､公開できます｡

また､その他ロゴマーク等は､株式会社 Women's Future Center の著作権取り扱いが適用されます｡

## Authors

- [株式会社 Women's Future Center](https://wfc-wa.com)

- Ryoichi Kurimoto ([ryone9re](https://github.com/ryone9re))
