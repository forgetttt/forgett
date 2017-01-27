class MetricsController < ApplicationController
  def show_metric_names
    @names = Metric.distinct.pluck(:metric_name)
    render json: @names
  end

  def show_by_name
    @data = Metric.where(metric_name: params[:metric_name]).select(:id, :lat, :lng)
    render json: @data
  end
end
