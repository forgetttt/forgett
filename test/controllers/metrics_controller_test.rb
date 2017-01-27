require 'test_helper'

class MetricsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get metrics_new_url
    assert_response :success
  end

end
