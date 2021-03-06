# アプリケーション名
## 骨格診断コッカくん


# 制作背景
- 自分に似合う服装が分からない友人の悩みを解決するために作成しました。  
自分の骨格に合う服装を知ってもらうことで、第一印象で好印象を持ってもらえる確率を上げ、結果として友人の自信に繋がることを願いました。

# 実装機能
- チェックボックス集計機能（javascriptによる非同期通信）
- 各診断結果への遷移機能


# 本番環境（デプロイ先とID パスワード）
- Git Hub https://github.com/rampagevalcan/sindan_kokkakun
- デプロイ先 https://sindan-kokkakun.herokuapp.com/
- ID kokkaku 
- Password 3333


# 利用方法
- ①最初のページで質問にチェックを付けてお答えください。  
②その後、「カウントする」ボタンを押して、チェック数の集計をしてください。  
③集計後、診断結果が書かれてあるリンクをクリックして、結果をご確認ください。  
集計結果でアラートの表示が変わります。
[![Image from Gyazo](https://i.gyazo.com/54c0c369bcdb8db0397ba2691865300f.gif)](https://gyazo.com/54c0c369bcdb8db0397ba2691865300f)


# トップページ
[![Image from Gyazo](https://i.gyazo.com/72577794819a5f514190e45fe0447ffc.png)](https://gyazo.com/72577794819a5f514190e45fe0447ffc)


# ページA
[![Image from Gyazo](https://i.gyazo.com/84bb06a12938194a00247999c81dda19.png)](https://gyazo.com/84bb06a12938194a00247999c81dda19)
[![Image from Gyazo](https://i.gyazo.com/423c7ea27e4c944d6a1bd4745049f9cd.jpg)](https://gyazo.com/423c7ea27e4c944d6a1bd4745049f9cd)


# ページB
[![Image from Gyazo](https://i.gyazo.com/648750f4dd73bea68834c791b2d1a0a8.png)](https://gyazo.com/648750f4dd73bea68834c791b2d1a0a8)
[![Image from Gyazo](https://i.gyazo.com/5ffbfdd744197518dc44f8c685b8764e.jpg)](https://gyazo.com/5ffbfdd744197518dc44f8c685b8764e)

# ページC
[![Image from Gyazo](https://i.gyazo.com/86434cb0f046ec81978bb452524d0f2b.png)](https://gyazo.com/86434cb0f046ec81978bb452524d0f2b)
[![Image from Gyazo](https://i.gyazo.com/739768ceed1745ad30a82cbf6d1a9162.jpg)](https://gyazo.com/739768ceed1745ad30a82cbf6d1a9162)


# 工夫したポイント
- デザイン面は男性向けになるので、シンプルになるように意識しました。
- ページ遷移したことが分かりやすいように、バックグラウンドカラーをそれぞれ異なったカラーにしました。
- 最初は、チェック数に応じて自動でそれぞれの診断結果ページに遷移させる予定でした。  
しかし、ユーザー目線で考えた場合に知識として他のタイプのことも知っておきたい人もいるのではないか？と考えました。  
そのため、ボタンを押してチェック数を集計する形にして、その気になれば他のタイプの診断結果も見にいけるように実装しました。


# 使用技術（開発環境）
- フロントエンド ： JavaScript/HTML/CSS
- サーバーエンド : Ruby 2.6.5
- フレームワーク : Ruby on Rails 6.0.0
- サーバー : heroku
- DB ： MySQL

# 改善したい点
- 似合う服装を知ったあとのアクションに繋げやすいように、服を購入できるサイトへのリンクを乗せることを検討しております。
- オシャレに詳しい方に質問できたり、服装をチェックしてもらえるコメント機能の実装をしてみたいと考えております。
