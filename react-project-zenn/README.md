#　実行コマンド
## reactインストール
npx create-react-app react-project-zenn

## ESLint と Prettierインストール
yarn add -D eslint prettier eslint-config-prettier

## .eslintrc.json作成
```
{
  // 適用する環境
  "env": {
    "es6": true,
    "node": true,
    "browser": true,
    "commonjs": true
  },
  // パーサー
  "parser": "babel-eslint",
  // jsx を使います
  "parserOptions": {
    "ecmaVersion": 2018,
    "ecmaFeatures": {
      "jsx": true
    },
    // import 文でモジュールを使用します
    "sourceType": "module"
  },
  // React のバージョンは自動検出に
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["react-hooks", "react"],
  // 基本的にルールは recommended に従う
  // prettier は配列の最後尾に書く
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "rules": {
    // TypeScirpt なので prop-types は要らない
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off"
  }
}
```
## .prettierrc.json作成
```
{
  "singleQuote": true,
  "jsxBracketSameLine": true
}
```
 
## vscodeの.ettings.json
```
{
  "editor.formatOnSave": true, // <-- prettierで整形
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // <-- eslintでリント
  },
  // デフォルトフォーマッタをprettierに
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## package.jsonにbabel-eslint追記
```
  "devDependencies": {
    "babel-eslint": "^10.1.0",
    "eslint": "^7.30.0",
    "eslint-config-prettier": "^8.3.0",
    "prettier": "^2.3.2"
  }
```

## 参考記事
https://zenn.dev/sprout2000/articles/9f20902d394aa2
