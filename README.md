# 建築会社サイト（静的コーディング）

デザインカンプをもとに建築会社サイトの静的コーディングを実装しました。  
**FLOCSS + BEM** に基づいた CSS 設計と **SCSS の分割**、さらに **アニメーションや UI 演出** の実装を通じて、フロントエンド実装の基礎から設計・表現までを学習しています。  

## 概要
- 制作目的：**学習およびポートフォリオ用**
- 実装内容：静的ページ構築 / レスポンシブ対応 / CSS設計 / UI演出
- 対応デバイス：PC / タブレット / スマートフォン

## 実装内容

### ページ構築
- 静的ページ構築：`top` / `company` / `access` / `contact`
- レスポンシブ対応（PC / タブレット / スマートフォン）

### CSS設計
- 設計手法：FLOCSS + BEM
- ディレクトリ構成：`foundation` / `layout` / `object (component, project)` / `utility`
- Google Fonts 導入：Gruppo / Noto Sans JP

### UI演出
- ボタン hover エフェクト
- スマートフォン用ハンバーガーメニュー
- Top ページ演出
  - メインビジュアルのスライダー
  - スクロール誘導アニメーション
  - 見出しのタイムラインアニメーション
  - mainvisual / works / contact でのパララックス効果

## ディレクトリ構成（FLOCSS）

```scss
scss/
├── foundation/
│   ├── _variables.scss
│   └── _base.scss 
├── layout/
│   ├── _container.scss
│   ├── _header.scss
│   ├── _footer.scss
│   └── _pageHeader.scss
├── object/
│   ├── component/
│   │   ├── _button.scss
│   │   ├── _dl.scss
│   │   ├── _fields.scss
│   │   ├── _radios.scss
│   │   └── _swiper.scss 
│   ├── project/
│   │   ├── _top.scss
│   │   ├── _company.scss
│   │   ├── _access.scss
│   │   └── _contact.scss
│   └── utility/
│       └── _utilities.scss
├── style.scss 
├── top.scss 
├── company.scss
├── access.scss
└── contact.scss
```

# 使用技術

* **HTML5 / CSS3 / SCSS**
* **JavaScript**

  * Swiper.js（スライダー実装）
  * GSAP / IntersectionObserver（スクロールアニメーション・パララックス効果）
* **設計手法**：FLOCSS + BEM
* **フォント**：Gruppo / Noto Sans JP

# 工夫点
* 保守性：FLOCSS + BEM による明確な役割分担で管理性を向上
* 拡張性：ページ単位 + コンポーネント単位で SCSS を分割
* アクセシビリティ：ハンバーガーメニューにスクリーンリーダー対応
* UI/UX：パララックスやアニメーションによる動きのある演出

# 動作確認

以下の URL からご確認いただけます。
各ページの表示およびレスポンシブ対応をご確認ください。

 [建築会社サイト](https://tomoroltuto.github.io/raisehome/pr-preview/pr-1/top.html)
