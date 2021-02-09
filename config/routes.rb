Rails.application.routes.draw do
  devise_for :users
  get 'questions/index'
  root to: "questions#index"
  get 'questions/page_a'
  get 'questions/page_b'
  get 'questions/page_c'
end
