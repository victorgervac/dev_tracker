class Api::JobsController < ApplicationController
  # before_action :authenticate_user!, :set_user, only: [:index]

  def index
    # render json: @user.jobs
    render json: User.find(1).jobs
  end

  def all_job
    render json: current_user.job.all
  end

  def create
    job = current_user.jobs.new(job_params)
    if job.save
      render json: job
    else
      render json: { errors: job.errors }, status: 420
    end
  end

  def update
    job = User.find(params[:user_id]).jobs.find(params[:id])
    # job = current_user.jobs.find(params[:id])

    # job.status
    if (job.update(job_params))
      render json: job
    else
      render json: job.errors
    end
  end

  def destroy
    Job.find(params[:id]).destroy
    render json: { message: "Job Deleted" }
  end

  # def drag_job
  #   job = Job.find(params[:id])
  #   if job

  private

  def job_params
    params.require(:job).permit(:company, :job_title, :salary, :location, :date_applied, :status)
  end

  def set_user
    @user = User.find(params[:user_id])
  end
end
