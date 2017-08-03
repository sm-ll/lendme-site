require 'test_helper'

class ResearchAnswersControllerTest < ActionController::TestCase
  setup do
    @research_answer = research_answers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:research_answers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create research_answer" do
    assert_difference('ResearchAnswer.count') do
      post :create, research_answer: { value: @research_answer.value }
    end

    assert_redirected_to research_answer_path(assigns(:research_answer))
  end

  test "should show research_answer" do
    get :show, id: @research_answer
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @research_answer
    assert_response :success
  end

  test "should update research_answer" do
    patch :update, id: @research_answer, research_answer: { value: @research_answer.value }
    assert_redirected_to research_answer_path(assigns(:research_answer))
  end

  test "should destroy research_answer" do
    assert_difference('ResearchAnswer.count', -1) do
      delete :destroy, id: @research_answer
    end

    assert_redirected_to research_answers_path
  end
end
