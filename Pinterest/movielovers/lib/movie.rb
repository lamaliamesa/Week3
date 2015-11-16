    def poster
      document.at("a[@name='poster'] img")['src'][/http:.+@@/] + '.jpg' rescue nil
    end