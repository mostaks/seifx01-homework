require 'test_helper'

class MountainsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mountains_index_url
    assert_response :success
  end

  test "should get show" do
    get mountains_show_url
    assert_response :success
  end

  test "should get edit" do
    get mountains_edit_url
    assert_response :success
  end

  test "should get delete" do
    get mountains_delete_url
    assert_response :success
  end

  test "should get new" do
    get mountains_new_url
    assert_response :success
  end

end
