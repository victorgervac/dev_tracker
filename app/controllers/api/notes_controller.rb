class Api::NotesController < ApplicationController
  before_action :set_job
  before_action :set_note, only: [:update, :destroy]
  def index
    render json: @job.notes
  end

  def all_note
    render json: Note.all
  end


  def create 
    note = @job.note.new(note_params)
    if (note.save)
      render json: note
    else
      render json: { errors: note.errors }, status: :unprocessable_entity 
    end
  end

  def update
    if(@note.update(note_params))
      render json: note
    else
      render json: {error:note.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    note = @note.destroy
    render json: note
  end

  private

  def set_job
    @job = Job.find(params[:id])
  end

  def set_note
    @note = @job.note.find(params[:id])
  end

  # def job_params
  #   params.require(:job).permit(:company, :job_title, :salary, :location, :date_applied, :status)
  # end

  def note_params
    params.require(:note).permit(:description)
  end

end
