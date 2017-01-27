class DriversController < ApplicationController
  def index
    @drivers = Driver.select(:id, :name)
    render json: @drivers
  end

  def show_metrics_by_driver_id
    @metrics  = Metric.where(driver_id: params[:id]).select(:id, :lat, :lng)
    render json: @metrics
  end
end
