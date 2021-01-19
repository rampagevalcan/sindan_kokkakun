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
- 最初のページで質問にチェックを付けてお答えください。  その後、「カウントする」ボタンを押して、チェック数の集計をしてください。  
集計後、診断結果が書かれてあるリンクをクリックして、結果をご確認ください。
[![Image from Gyazo](https://i.gyazo.com/e0f41d616c1001601358a8b13df5de94.gif)](https://gyazo.com/e0f41d616c1001601358a8b13df5de94)


# トップページ
[![Image from Gyazo](https://i.gyazo.com/72577794819a5f514190e45fe0447ffc.png)](https://gyazo.com/72577794819a5f514190e45fe0447ffc)


# ページA
[![Image from Gyazo](https://i.gyazo.com/84bb06a12938194a00247999c81dda19.png)](https://gyazo.com/84bb06a12938194a00247999c81dda19)


# ページB
[![Image from Gyazo](https://i.gyazo.com/648750f4dd73bea68834c791b2d1a0a8.png)](https://gyazo.com/648750f4dd73bea68834c791b2d1a0a8)


# ページC
[![Image from Gyazo](https://i.gyazo.com/86434cb0f046ec81978bb452524d0f2b.png)](https://gyazo.com/86434cb0f046ec81978bb452524d0f2b)


# 工夫したポイント
- デザイン面は男性向けになるので、シンプルになるように意識しました。
- ページ遷移したことが分かりやすいように、バックグラウンドカラーをそれぞれ異なったカラーにしました。
- 最初は、チェック数に応じて自動でそれぞれの診断結果ページに遷移させる予定でした。  
しかし、ユーザー目線で考えた場合に知識として他のタイプのことも知っておきたい人もいるのではないか？と考えました。  
そのため、ボタンを押してチェック数を集計する形にして、その気になれば他のタイプの診断結果も見にいけるように実装しました。


# 使用技術（開発環境）
- 言語 ： ruby JavaScript
- フレームワーク : ruby on rails
- サーバー : heroku


# 改善したい点
- 画像が無く、どんな骨格なのか、どんな服装になるのかイメージしにくい人もいると考えたので、画像を探してトップページと診断結果のページに載せて、イメージを持ってもらいやすくしたいと考えております。
