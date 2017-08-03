class ResearchAnswersController < ApplicationController

  # GET /research_answers/new
  def new
    @research_answer = ResearchAnswer.new
  end

  # POST /research_answers
  # POST /research_answers.json
  def create
    if params[:research_answer].blank?
      flash[:error] = 'Please select at least one answer'
      redirect_to :back
    else
      @research_answer = ResearchAnswer.new(research_answer_params)

      respond_to do |format|
        if @research_answer.save
          format.html { redirect_to :answers_submitted, notice: 'Research answer was successfully created.' }
          # format.json { render :show, status: :created, location: @research_answer }
        else
          format.html { render :new }
          # format.json { render json: @research_answer.errors, status: :unprocessable_entity }
        end
      end
    end
  end


  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def research_answer_params
      params.require(:research_answer).permit(:q1_value, :q2_value)
    end
end
