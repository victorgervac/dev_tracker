require 'test_helper'

class Api::NotesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_notes_index_url
    assert_response :success
  end

  test "should get show" do
    get api_notes_show_url
    assert_response :success
  end

  test "should get new" do
    get api_notes_new_url
    assert_response :success
  end

  test "should get update" do
    get api_notes_update_url
    assert_response :success
  end

end
