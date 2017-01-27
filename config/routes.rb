Rails.application.routes.draw do
  get 'metrics/new'

  scope '/drivers' do
    get '/' => 'drivers#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
