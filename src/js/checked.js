

export default class Checked {
    constructor(nextSymbols, sum) {
      this.nextSymbols = nextSymbols;
      this.sum =this.sum;
    }
    
    check_4row(matrix, row) {
      var first;
      first = matrix[0][row];
    
      for (var i = 1; i < matrix.length; i += 1) {
        if (first !== matrix[i][row]) {
          return null;
        }
      }

      if (first !== "donut" && first !== "cupcake" && first !== "pancakes" && first !== "icecream" && first !== "cookie") {
        return null;
      }
      return first;
    }

    check_3row(matrix, row) {
      if (matrix[1][row] === matrix[2][row]) {
        if (matrix[0][row] === matrix[1][row]) {
          return true;
        } else {
          if (matrix[2][row] === matrix[3][row]) {
            return true;
          }
        }
      }
    
      return null;
    }
    
    check_major_4d(matrix) {
      var first;
      first = matrix[0][0];
    
      for (var i = 1; i < matrix.length; i += 1) {
        if (first !== matrix[i][i]) {
          return null;
        }
      }
    
      if (first !== "donut" && first !== "cupcake" && first !== "pancakes" && first !== "icecream" && first !== "cookie") {
        return null;
      }
      return first;
    }
    
    check_major_3d(matrix) {
      if (matrix[1][1] === matrix[2][2]) {
        if (matrix[0][0] === matrix[1][1]) {
          return true;
        } else {
          if (matrix[2][2] === matrix[3][3]) {
            return true;
          }
        }
      }
    
      return null;
    }
    
    check_minor_4d(matrix) {
      var first, max_ind;
      max_ind = matrix.length - 1;
      first = matrix[0][max_ind];
    
      for (var i = 1; i <= max_ind; i += 1) {
        if (first !== matrix[i][max_ind - i]) {
          return null;
        }
      }
    
      if (first !== "donut" && first !== "cupcake" && first !== "pancakes" && first !== "icecream" && first !== "cookie") {
        return null;
      }
      return first;
    }
    
    check_minor_3d(matrix) {
      var max_ind;
      max_ind = matrix.length - 1;
    
      if (matrix[1][max_ind - 1] === matrix[2][max_ind - 2]) {
        if (matrix[0][max_ind - 0] === matrix[1][max_ind - 1]) {
          return true;
        } else {
          if (matrix[2][max_ind - 2] === matrix[3][max_ind - 3]) {
            return true;
          }
        }
      }
    
      return null;
    }
    
    check_jackpot(matrix) {
      
      if(matrix[0][0] == "J" && matrix[1][0] == "A" && matrix[2][0] == "C" && matrix[3][0] == "K")
        return true;
      else if(matrix[0][1] == "J" && matrix[1][1] == "A" && matrix[2][1] == "C" && matrix[3][1] == "K")
        return true;
      else if(matrix[0][2] == "J" && matrix[1][2] == "A" && matrix[2][2] == "C" && matrix[3][2] == "K")
        return true;
      else{
        return null;
      }
      
    }
    
    check_x2(matrix) {
      var count = 0;
    
      for (var i = 0; i < matrix.length; i += 1) {
        for (var j = 0; j < matrix.length; j += 1) {
          //mora se proemniti u specijalni znak
          //PROMENI DA MORA DVA PUTA x2
          if (matrix[j][i] === "x2") {
            count += 1;
          }
        }
      }
    
      return count === 2;
    }
    
    check_x5(matrix) {
      var count = 0;
    
      for (var i = 0; i < matrix.length; i += 1) {
        for (var j = 0; j < matrix.length; j += 1) {
          //mora se promeniti u specijalni znak
          if (matrix[j][i] === "x5") {
            count += 1;
          }
        }
      }
    
      return count === 2;
    }

    check_joker(matrix) {
      var count, flag;
      count = 0;
    
      for (var i = 0; i < matrix.length; i += 1) {
        flag = null;
    
        for (var j = 0; j < matrix.length; j += 1) {
          if (matrix[j][i] === "joker") {
            count += 1;
          }
        }
      }
    
      return count;
    }
    
    check_zig_zag_typeA(matrix, row) {
      var value;
      value = matrix[0][row];
    
      for (var i = 1; i < 4; i += 1) {
        if (i === 2) {
          if (matrix[i][row] !== value) {
            return null;
          }
        } else {
          if (matrix[i][row + 1] !== value) {
            return null;
          }
        }
      }
    
      if (value !== "donut" && value !== "cupcake" && value !== "pancakes" && value !== "icecream" && value !== "cookie") {
        return null;
      }
      return value;
    }
    
    check_zig_zag_typeB(matrix, row) {
      var value;
      value = matrix[0][row];
    
      for (var i = 1; i < 4; i += 1) {
        if (i === 2) {
          if (matrix[i][row] !== value) {
            return null;
          }
        } else {
          if (matrix[i][row - 1] !== value) {
            return null;
          }
        }
      }
    
      if (value !== "donut" && value !== "cupcake" && value !== "pancakes" && value !== "icecream" && value !== "cookie") {
        return null;
      }
      return value;
    }
    
    check_trapeze_typeA(matrix, row) {
      var value;
      value = matrix[0][row];
    
      for (var i = 1; i < 4; i += 1) {
        if (i === 3) {
          if (matrix[i][row] !== value) {
            return null;
          }
        } else {
          if (matrix[i][row - 1] !== value) {
            return null;
          }
        }
      }
    
      if (value !== "donut" && value !== "cupcake" && value !== "pancakes" && value !== "icecream" && value !== "cookie") {
        return null;
      }
      return value;
    }
    
    check_trapeze_typeB(matrix, row) {
      var value;
      value = matrix[0][row];
    
      for (var i = 1; i < 4; i += 1) {
        if (i === 3) {
          if (matrix[i][row] !== value) {
            return null;
          }
        } else {
          if (matrix[i][row + 1] !== value) {
            return null;
          }
        }
      }
    
      if (value !== "donut" && value !== "cupcake" && value !== "pancakes" && value !== "icecream" && value !== "cookie") {
        return null;
      }
      return value;
    } 
    

    checked(){
      this.sum = 0;
      //checked 4 in row
      for (var i = 0; i < 4; i += 1) {
        if (this.check_4row(this.nextSymbols, i) != null) {
          var val = this.check_4row(this.nextSymbols, i);
          if(val == "donut"){
            this.sum += 10000;
          }else if(val == "cupcake"){
            this.sum += 2500;
          }else if(val == "pancakes"){
            this.sum += 1000;
          }else if(val == "icecream"){
            this.sum += 500;
          }else if(val == "cookie"){
            this.sum += 300;
          }
        }
      }
      
      //checked 4 on major diag
      if (this.check_major_4d(this.nextSymbols) != null) {
        var val = this.check_major_4d(this.nextSymbols);
          if(val == "donut"){
            this.sum += 10000;
          }else if(val == "cupcake"){
            this.sum += 2500;
          }else if(val == "pancakes"){
            this.sum += 1000;
          }else if(val == "icecream"){
            this.sum += 500;
          }else if(val == "cookie"){
            this.sum += 300;
          }
      }

      //checked 4 on minor diag
      if (this.check_minor_4d(this.nextSymbols) != null) {
        var val = this.check_minor_4d(this.nextSymbols);
          if(val == "donut"){
            this.sum += 10000;
          }else if(val == "cupcake"){
            this.sum += 2500;
          }else if(val == "pancakes"){
            this.sum += 1000;
          }else if(val == "icecream"){
            this.sum += 500;
          }else if(val == "cookie"){
            this.sum += 300;
          }
      }

      //checked for jackpot
      if(this.check_jackpot(this.nextSymbols) != null){
        this.sum += 50000;
      }

      //checked for zig_zag and trapeze
      for (var i = 0; i < 3; i += 1) {
        if (this.check_zig_zag_typeA(this.nextSymbols, i) != null) {
          var val = this.check_zig_zag_typeA(this.nextSymbols, i);
          if(val == "donut"){
            this.sum += 10000;
          }else if(val == "cupcake"){
            this.sum += 2500;
          }else if(val == "pancakes"){
           this.sum += 1000;
          }else if(val == "icecream"){
           this.sum += 500;
          }else if(val == "cookie"){
           this.sum += 300;
          }
        }
        if(this.check_trapeze_typeB(this.nextSymbols, i) != null){
          var val = this.check_trapeze_typeB(this.nextSymbols, i);
          if(val == "donut"){
           this.sum += 10000;
          }else if(val == "cupcake"){
           this.sum += 2500;
          }else if(val == "pancakes"){
           this.sum += 1000;
          }else if(val == "icecream"){
           this.sum += 500;
          }else if(val == "cookie"){
           this.sum += 300;
          }
        }
        if (this.check_zig_zag_typeB(this.nextSymbols, i + 1) != null) {
          var val = this.check_zig_zag_typeB(this.nextSymbols, i + 1);
          if(val == "donut"){
           this.sum += 10000;
          }else if(val == "cupcake"){
           this.sum += 2500;
          }else if(val == "pancakes"){
           this.sum += 1000;
          }else if(val == "icecream"){
           this.sum += 500;
          }else if(val == "cookie"){
           this.sum += 300;
          }
        }
        if(this.check_trapeze_typeA(this.nextSymbols, i + 1) != null){
          var val = this.check_trapeze_typeA(this.nextSymbols, i + 1);
          if(val == "donut"){
           this.sum += 10000;
          }else if(val == "cupcake"){
           this.sum += 2500;
          }else if(val == "pancakes"){
           this.sum += 1000;
          }else if(val == "icecream"){
           this.sum += 500;
          }else if(val == "cookie"){
           this.sum += 300;
          }
        }
      }

      //checked for special elements for x2 or/and x5
      if(this.check_x2(this.nextSymbols) == true){
        this.sum *= 2;
      }
      if(this.check_x5(this.nextSymbols) == true){
        this.sum *= 5;
      }
       
      return this.sum;
    }

    checkedJoker(){

      //checked for joker
      var joker_count = this.check_joker(this.nextSymbols);
      if(joker_count == 3){
        //izlaze kartice na pocetan ekran
        return -1;
      }else if(joker_count == 4){
        //izlazi poseban reel za cokera dok se prethodni hide-uje
        return -2;
      }
      return 0;

    }
     
}