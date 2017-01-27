namespace :db  do
  task :import_drivers => :environment do
    File.open(Rails.root+'lib/assets/drivers.json', 'r') do |file|
      json = file.read
      parsed_drivers = JSON.parse(json)
      Driver.create parsed_drivers
    end
  end
end