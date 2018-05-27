class TutorsController < ApplicationController
  def index
  	@tutors = Profile.where(is_tutor: true)
  end

  def show
  end
end
