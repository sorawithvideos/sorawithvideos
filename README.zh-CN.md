# sorawithvideos
sorawithvideos 是一个开源项目，允许用户使用 OpenAI 的 Sora 模型使用文本在线生成视频，从而简化视频创建，并具有轻松的一键网站部署功能。
👉 [sorawithvideos](https://sorawithvideos.com)

[English](https://github.com/sorawithvideos/sorawithvideos/blob/main/README.md) | 简体中文 | [日本語](https://github.com/sorawithvideos/sorawithvideos/blob/main/README.ja-JP.md)

# 项目计划
- ✅ 通过文字生成视频（使用[FakeSoraAPI](https://github.com/sorawithvideos/FakeSoraAPI)）:

  您可以在 👉 [main](https://github.com/sorawithvideos/sorawithvideos/tree/main) 或 👉 [version-0.1](https://github.com/sorawithvideos/sorawithvideos/tree/version-0.1) 中体验该功能

- ✅ 使用谷歌登录:

  您可以在 👉 [login](https://github.com/sorawithvideos/sorawithvideos/tree/login) 或 👉 [version-0.2](https://github.com/sorawithvideos/sorawithvideos/tree/version-0.2) 中体验该功能

- ✅ Google 一键登录:

  您可以在 👉 [login](https://github.com/sorawithvideos/sorawithvideos/tree/login) 或 👉 [version-0.3](https://github.com/sorawithvideos/sorawithvideos/tree/version-0.3) 中体验该功能

- [ ] Stripe支付：

  即将推出

- [ ] 添加 OpenAI 的 Sora API：

  等待 OpenAI 开放 Sora 的 API，随后我们就会推出该功能.


## 快速开始

### 在 Vercel 上部署
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSoraWebui%2FSoraWebui&project-name=sorawithvideos&repository-name=sorawithvideos&external-id=https%3A%2F%2Fgithub.com%2FSoraWebui%2FSoraWebui%2Ftree%2Fmain)

### 1. 克隆项目

```bash
git clone git@github.com:sorawithvideos/sorawithvideos.git
```

### 2. 安装依赖

```bash
cd sorawithvideos && yarn
#or
cd sorawithvideos && npm install
#or
cd sorawithvideos && pnpm install
```

### 3. 复制 .env.example 并将其重命名为 .env.local

```bash
# website URL
NEXT_PUBLIC_SITE_URL=http://localhost

# openai config
OPENAI_API_KEY=sk-XXXXXX
OPENAI_API_BASE_URL=http://localhost:8081
OPENAI_API_MODEL=sora-1.0-turbo
```

### 4. 运行

```bash
yarn dev
#or
npm run dev
#or
pnpm dev
```

### 4. 在浏览器打开 [http://localhost](http://localhost)
![success_deploy.jpg](https://sorawithvideos.com/success_deploy.jpg)


# 重要事项
sorawithvideos 需要 [FakeSoraAPI](https://github.com/sorawithvideos/FakeSoraAPI) 才能正常运行。

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sorawithvideos/sorawithvideos&type=Date)](https://star-history.com/#sorawithvideos/sorawithvideos&Date)
