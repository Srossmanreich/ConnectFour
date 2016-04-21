get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
	if request.xhr?
  		@die = Die.new(params["sides"].to_i)
  		@die.roll.to_s
  	end
end
