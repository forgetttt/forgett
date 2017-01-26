Rails.application.routes.draw do
  scope '/drivers' do
    get '/' => 'drivers#index'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
