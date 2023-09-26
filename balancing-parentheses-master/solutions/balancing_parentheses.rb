# The `balancing_parentheses` function counts the number of unbalanced parentheses in a given
# string.
# 
# Args:
#   string: The parameter "string" is a string that contains parentheses. The function
#   "balancing_parentheses" counts the number of unbalanced parentheses in the string.
#
# Returns:
#   The number of unbalanced parentheses in the string.

def balancing_parentheses(string)
  count = 0
  stack = []

  string.each_char do |char|
    if char == '('
      stack.push(char)
    elsif char == ')'
      if stack.empty?
        count += 1
      else
        stack.pop
      end
    end
  end

  count
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end
# Please add your pseudocode to this file
# And a written explanation of your solution

  def balancing_parentheses(string)
  count = 0
  stack = []

  string.each_char do |char|
    if char == '('
      stack.push(char)
    elsif char == ')'
      if stack.empty?
        count += 1
      else
        stack.pop
      end
    end
  end

  count
  end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts balancing_parentheses('(()())')

  puts

  puts "Expecting: 2"
  puts balancing_parentheses('()))')

  puts

  puts "Expecting: 1"
  puts balancing_parentheses(')')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
####
   # The `balancing_parentheses` function counts the number of unbalanced parentheses in a given
   # string.
   # 
   # Args:
   #   string: The parameter "string" is a string that contains parentheses. The function
   # "balancing_parentheses" counts the number of unbalanced parentheses in the string.
# And a written explanation of your solution
# The code is defining a method called `balancing_parentheses` that takes a string as an argument.
 # Inside the method, it initializes a variable `count` to "0" and creates an empty array called
 # `stack`. It then iterates over each character in the string using the `each_char` method.

  ##
  # The `balancing_parentheses` function counts the number of unbalanced parentheses in a given
  # string.
  # 
  # Args:
  #   string: The parameter "string" is a string that contains parentheses.
  