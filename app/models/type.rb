class Type < ActiveHash::Base
  self.data = [
    { id: 1, name: '--' },
    { id: 2, name: '骨格ストレート' },
    { id: 3, name: '骨格ウェーブ' },
    { id: 4, name: '骨格ナチュラル' },
  ]

  include ActiveHash::Associations
  has_many :users

  end