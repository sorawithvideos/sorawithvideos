# sorawithvideos
sorawithvideos は、ユーザーがテキストを使って OpenAI の Sora モデルでオンラインビデオを生成できるようにすることで、ビデオ作成を簡素化するオープンソースプロジェクトです。
👉 [sorawithvideos](https://sorawithvideos.com)

[English](https://github.com/sorawithvideos/sorawithvideos/blob/main/README.md) | [简体中文](https://github.com/sorawithvideos/sorawithvideos/blob/main/README.zh-CN.md) | 日本語


# プロジェクトプラン
- ✅ 単語で動画を生成 ([FakeSoraAPI](https://github.com/sorawithvideos/FakeSoraAPI) を使用):

  この機能は、👉 [main](https://github.com/sorawithvideos/sorawithvideos/tree/main) または 👉 [version-0.1](https://github.com/sorawithvideos/sorawithvideos/tree/version-0.1) で見ることができます

- ✅ Google でログイン:

  この機能は、👉 [login](https://github.com/sorawithvideos/sorawithvideos/tree/login) または 👉 [version-0.2](https://github.com/sorawithvideos/sorawithvideos/tree/version-0.2) で見ることができます

- ✅ Google ワンクリックログイン:

  この機能は、👉 [login](https://github.com/sorawithvideos/sorawithvideos/tree/login) または 👉 [version-0.3](https://github.com/sorawithvideos/sorawithvideos/tree/version-0.3) で見ることができます

- [ ] Stripe 決済：

  準備中

- [ ] OpenAI の Sora API を追加する：

  OpenAI が Sora の API を起動するのを待ってから、この機能を起動します。


## クイックスタート

### Vercel でデプロイ
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSoraWebui%2FSoraWebui&project-name=sorawithvideos&repository-name=sorawithvideos&external-id=https%3A%2F%2Fgithub.com%2FSoraWebui%2FSoraWebui%2Ftree%2Fmain)

### 1. プロジェクトをクローン

```bash
git clone git@github.com:sorawithvideos/sorawithvideos.git
```

### 2. 依存関係をインストール

```bash
cd sorawithvideos && yarn
#もしくは
cd sorawithvideos && npm install
#もしくは
cd sorawithvideos && pnpm install
```

### 3. .env.example をコピーし、.env.local にリネームする

```bash
# web サイト URL
NEXT_PUBLIC_SITE_URL=http://localhost

# openai 設定
OPENAI_API_KEY=sk-XXXXXX
OPENAI_API_BASE_URL=http://localhost:8081
OPENAI_API_MODEL=sora-1.0-turbo
```

### 4. 実行

```bash
yarn dev
#もしくは
npm run dev
#もしくは
pnpm dev
```

### 5. [http://localhost](http://localhost) をブラウザで開いてご覧ください。
![success_deploy.jpg](https://sorawithvideos.com/success_deploy.jpg)


# 重要
sorawithvideos が正しく機能するには [FakeSoraAPI](https://github.com/sorawithvideos/FakeSoraAPI) が必要です。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sorawithvideos/sorawithvideos&type=Date)](https://star-history.com/#sorawithvideos/sorawithvideos&Date)
