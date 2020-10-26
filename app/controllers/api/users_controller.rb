class Api::UsersController < ApplicationController
  before_action :authenticate_user!

  def update
    user = User.find(params[:id])

    if user.update(user_params)
      render json: user
    else
      render json: {error:user.errors}, status: :unprocessable_entity
    end
  end
  
  private 

 def user_params
  params.require(:user).permit(:email, :password, :first_name, :last_name)
 end
end
