class MeetingsController < ApplicationController
  def index
    render "index.html.erb"
  end

  def new
    @meeting = Meeting.new
    render "new.html.erb"
  end

  def create
    @meeting = Meeting.new(
      name: params[:name],
      address: params[:address],
      start_time: params[:start_time],
      end_time: params[:end_time],
      notes: params[:notes],
    )
    if @meeting.save
      flash[:success] = "Meeting successfully created!"
      redirect_to "/meetings/#{@meeting.id}"
    else
      render "new.html.erb"
    end
  end

  def show
    @meeting = Meeting.find_by(id: params[:id])
    render "show.html.erb"
  end

  def edit
    @meeting = Meeting.find_by(id: params[:id])
    render "edit.html.erb"
  end

  def update
    @meeting = Meeting.find_by(id: params[:id])
    @meeting.name = params[:name]
    @meeting.address = params[:address]
    @meeting.start_time = params[:start_time]
    @meeting.end_time = params[:end_time]
    @meeting.notes = params[:notes]
    if @meeting.save
      flash[:success] = "Meeting successfully updated!"
      redirect_to "/meetings/#{@meeting.id}"
    else
      render "edit.html.erb"
    end
  end
end
