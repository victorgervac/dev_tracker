class Api::ContactController < ApplicationController
    before_action :set_job
    before_action :set_contact, only: [:update, :destroy]
    
    def index
       render json: @job.contacts
    end 

    def all_contact
        render json: Contact.all
    end

    def create 
        contact = @job.contact.new(contact_params)
        if (contact.save)
           render json: contact
        else 
            render json: {error:contact.errors},status:400
        end
    end
    
    def update
        if(@contact.update(contact_params))
            render json: contact
        else
            render json: {error:contact.errors},status:400
        end
    end

    def destroy
        contact = @contact.destroy
        render json: contact
    end 

    private
    def set_job
        @job = Job.find(params[:job_id])
    end
    def set_contact
        @contact = @job.contact.find(params[:id])
    end

    def contact_params
        params.require(:contact).permit(:first_name, :last_name, :phone, :email)
    end
end
