require 'slim'

File.open 'index.html', 'w' do |file|
  file.write Slim::Template.new('index.slim').render(self)
end
