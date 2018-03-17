module Jekyll
  module Junquiter
    def junquiter(text)
      text.sub(%r{Junquera}i, 'Junquito')
      @text = ' -' + text + '- '
    end
  end
end

Liquid::Template.register_filter(Jekyll::Junquiter)
