var Downie = {
    isNaN: function(val) {
        if (val !== val) {
            return true
        } else {
            return false
        }
    },
    isNull: function(val) {
        if (val === null) {
            return true
        } else {
            return false
        }
    }
}