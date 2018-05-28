class TutorsController < ApplicationController
  def index
  	@tutors = Profile.where(is_tutor: true)
  end

  def show
  	@tutor = Profile.find(params[:id])
  end
end
