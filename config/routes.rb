Rails.application.routes.draw do
  get 'metrics/new'

  scope '/drivers' do
    get '/' => 'drivers#index'
    get '/:id/metrics' => 'drivers#show_metrics_by_driver_id'
  end

  scope '/metrics' do
    get '/names' => 'metrics#show_metric_names'
    get '/data/:metric_name' => 'metrics#show_by_name', :constraints => { :metric_name => /[^\/]+/ }

  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
