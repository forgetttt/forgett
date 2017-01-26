namespace :admin  do
  task :fake_drivers => :environment do
    Driver.create(:name => 'Johnny B. Goode', license_number => '12-234-45')
  end
end