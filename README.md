# テーブル設計
## usersテーブル
|     Column         |  Type   |  Options               |
|-------------------------------------------------------|
| nickname           | string  | null:false             |
| encrypted_password | string  | null:false             |
| email              | string  | null:false, unique:true|
| type_id            | integer | null:false             |

### Association
 has_many : dress
 has_many : comments

 ## dressesテーブル
|     Column     |  Type |  Options        |
|------------------------------------------|
| text           | text       | null:false |
| user           | reference  | null:false |

### Association
 has_many : comments
 belongs_to : user

  ## commentsテーブル
|     Column     |  Type |  Options        |
|------------------------------------------|
| text           | text       | null:false |
| user           | reference  | null:false |
| dress          | reference  | null:false |

### Association
 belongs_to : user
 belongs_to : dress
