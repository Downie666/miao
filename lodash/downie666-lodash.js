var downie666 = {
    isNull: function(val) {
        if (val === null) {
            return true
        } else {
            return false
        }
    },
    isNaN: function(val) {
        if (val !== val) {
            return true
        } else {
            return false
        }
    }
}

chunk,compact
concat
difference
drop
fill
find
first/head
flatten
indexOf
initial
intersection
join
last
lastIndexOf
nth
pull
pullAll
pullAt
remove
reverse
slice
sortedIndex
sortedIndexOf
tail
take
takeRight
union
uniq
unzip
without
xor
zip
zipObject
includes
sample
sampleSize
shuffle
size
eq,gt,gte
lt,lte
add,ceil
divide
floor
max
mean
min
multiply
round
substract
sum
at
defaults
get
set
has
hasIn
invert
keys
assign
omit
pick
values
camelCase
capitalize
deburr
endsWith
escape
kebabCase
lowerCase
lowerFirst
pad
padEnd
padStart
parseInt
repeat
replace
snakeCase
split
startCase
startsWith
trim
trimEnd
trimStart
truncate
unescape
upperCase
upperFirst
words
range


after:
function before(n ,func) {
    return function(...args) {
        //调用func
        func(...args)
    }
}