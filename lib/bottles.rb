class Bottles

  # () -> string
  def song
    File.read('lib/song.txt')
  end

  # num -> num -> string
  def verses(num1, num2)
    [*num2..num1].reverse.map{ |el| verse(el) }.join("\n")
  end

  # num -> string
  def verse(num)
    song.split(/^\n/)[99-num]
  end

end
