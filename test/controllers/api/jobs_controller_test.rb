require 'test_helper'

class Api::JobsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_jobs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_jobs_show_url
    assert_response :success
  end

  test "should get new" do
    get api_jobs_new_url
    assert_response :success
  end

  test "should get update" do
    get api_jobs_update_url
    assert_response :success
  end

end
