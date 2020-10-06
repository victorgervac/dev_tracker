class Api::NotesController < ApplicationController
  def index
    render json: Note.all
  end

  def create 
    note = Note.new(note_params)
    if note.save
      render json: note
    else
      render json: { errors: note.errors }, status: :unprocessable_entity 
    end
  end

  def update
    note = Note.find(params[:id])
    note.update(complete: !note.complete)
    render json: note
  end

  def destroy
    Note.find(params[:id]).destroy
    render json: { message: 'Note deleted' }
  end

  private

  def note_params
    params.require(:note).permit(:description)
  end
  
end
