namespace :import  do
  desc 'import metrics from metrics.json'
  task :metrics => :drivers do
    File.open(Rails.root+'lib/assets/metrics.json', 'r') do |file|
      file.each do |line|
        next if line.blank?
        metric_json = JSON.parse(line)
=begin
        if Driver.exists?(:id => line['driver_id'].to_i)
=end
          Metric.create(metric_name: metric_json['metric_name'],
                        value: metric_json['value'],
                        lat: metric_json['lat'],
                        lng: metric_json['lon'],
                        driver_id: metric_json['driver_id'].to_i,
                        timestamp: Time.at(metric_json['timestamp']))
=begin
        end
=end
      end
    end
  end
end