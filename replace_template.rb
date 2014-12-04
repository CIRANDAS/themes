#!/usr/bin/env ruby
require 'fileutils'

Dir.glob "*" do |theme|
  next unless File.directory? theme

  Dir.glob "#{theme}/*" do |file|
    next unless File.symlink? file
    to = File.readlink file
    next unless to.index 'template'
    puts "FOUND file #{file} linked to #{to}"

    dest_file = File.basename to
    if %w[header.html.erb navigation.html.erb site_title.html.erb].include? dest_file
      dest_file = "small_#{dest_file}"
    else
      dest_file.gsub 'template', 'cirandas'
    end

    new_to = "../cirandas/#{dest_file}"
    puts "CHANGE TO #{new_to}"
    Dir.chdir File.dirname(file) do
      FileUtils.ln_sf new_to, File.basename(file)
    end
  end
end
