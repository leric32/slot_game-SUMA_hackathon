

export default class Checked {
    constructor(nextSymbols, sum) {
      this.nextSymbols = nextSymbols;
      this.sum = sum;
    }
    
    check_4row(matrix, row) {
      var first;
      first = matrix[0][row];
    
      for (var i = 1; i < matrix.length; i += 1) {
        if (first !== matrix[i][row]) {
          return false;
        }
      }

      if (first < 1 || first > 5) {
        return false;
      }
      return true;
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
    
      return false;
    }
    
    check_major_4d(matrix) {
      var first;
      first = matrix[0][0];
    
      for (var i = 1; i < matrix.length; i += 1) {
        if (first !== matrix[i][i]) {
          return false;
        }
      }
    
      if (first < 1 || first > 5) {
        return false;
      }
      return true;
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
    
      return false;
    }
    
    check_minor_4d(matrix) {
      var first, max_ind;
      max_ind = matrix.length - 1;
      first = matrix[0][max_ind];
    
      for (var i = 1; i <= max_ind; i += 1) {
        if (first !== matrix[i][max_ind - i]) {
          return false;
        }
      }
    
      if (first < 1 || first > 5) {
        return false;
      }
      return true;
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
    
      return false;
    }
    
    check_jackpot(matrix) {
      var count, flag;
      count = 0;
    
      for (var i = 0; i < matrix.length; i += 1) {
        flag = false;
    
        for (var j = 0; j < matrix.length; j += 1) {
          //treba da ovde vidimo da li je specijalan karakter
          if (matrix[j][i] !== 0) {
            flag = true;
            break;
          }
        }
    
        if (!flag) {
          count += 1;
        }
      }
    
      if (count === 2) {
        return true;
      }
    
      return false;
    }
    
    check_x2(matrix) {
      var flag;
    
      for (var i = 0; i < matrix.length; i += 1) {
        flag = false;
    
        for (var j = 0; j < matrix.length; j += 1) {
          //mora se proemniti u specijalni znak
          //PROMENI DA MORA DVA PUTA x2
          if (matrix[j][i] === "x2") {
            return true;
          }
        }
      }
    
      return false;
    }
    
    check_x5(matrix) {
      var flag;
    
      for (var i = 0; i < matrix.length; i += 1) {
        flag = false;
    
        for (var j = 0; j < matrix.length; j += 1) {
          //mora se promeniti u specijalni znak
          if (matrix[j][i] === "x5") {
            return true;
          }
        }
      }
    
      return false;
    }

    check_joker(matrix) {
      var count, flag;
      count = 0;
    
      for (var i = 0; i < matrix.length; i += 1) {
        flag = false;
    
        for (var j = 0; j < matrix.length; j += 1) {
          //mora se promeniti u specijalni znak za jokera
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
            return false;
          }
        } else {
          if (matrix[i][row + 1] !== value) {
            return false;
          }
        }
      }
    
      if (value < 1 || value > 5) {
        return false;
      }
      return true;
    }
    
    check_zig_zag_typeB(matrix, row) {
      var value;
      value = matrix[0][row];
    
      for (var i = 1; i < 4; i += 1) {
        if (i === 2) {
          if (matrix[i][row] !== value) {
            return false;
          }
        } else {
          if (matrix[i][row - 1] !== value) {
            return false;
          }
        }
      }
    
      if (value < 1 || value > 5) {
        return false;
      }
      return true;
    }
    
    check_trapeze_typeA(matrix, row) {
      var value;
      value = matrix[0][row];
    
      for (var i = 1; i < 4; i += 1) {
        if (i === 3) {
          if (matrix[i][row] !== value) {
            return false;
          }
        } else {
          if (matrix[i][row - 1] !== value) {
            return false;
          }
        }
      }
    
      if (value < 1 || value > 5) {
        return false;
      }
      return true;
    }
    
    check_trapeze_typeB(matrix, row) {
      var value;
      value = matrix[0][row];
    
      for (var i = 1; i < 4; i += 1) {
        if (i === 3) {
          if (matrix[i][row] !== value) {
            return false;
          }
        } else {
          if (matrix[i][row + 1] !== value) {
            return false;
          }
        }
      }
    
      if (value < 1 || value > 5) {
        return false;
      }
      return true;
    }
    

    checked(){
      this.sum = 0;
      //checked 4 or 3 in row
      for (var i = 0; i < 4; i += 1) {
        if (this.check_4row(this.nextSymbols, i) == true) {
          //treba promeniti vrednost
          this.sum += 1;
        }
      }
      
      //checked 4 or 3 on major diag
      if (this.check_major_4d(this.nextSymbols) == true) {
        //treba promeniti vrednost
        this.sum += 1;
      }

      //checked 4 or 3 on minor diag
      if (this.check_minor_4d(this.nextSymbols) == true) {
        //treba promeniti vrednost
        this.sum += 1;
      }

      //checked for jackpot
      if(this.check_jackpot(this.nextSymbols) == true){
        //treba da se promeni vrednost za jackpot
        this.sum += 1;
      }

      //checked for special elements for x2 or/and x5
      if(this.check_x2(this.nextSymbols) == true){
        this.sum *= 2;
      }
      if(this.check_x5(this.nextSymbols) == true){
        this.sum *= 5;
      }

      //checked for joker
      var joker_count = this.check_joker(this.nextSymbols);
      if(joker_count == 3){
        //izlaze kartice na pocetan ekran
      }else if(joker_count == 4){
        //izlazi poseban reel za cokera dok se prethodni hide-uje
      }

      //checked for zig_zagA and trapezeB
      for (var i = 0; i < 3; i += 1) {
        if (this.check_zig_zag_typeA(this.nextSymbols, i) == true) {
          //treba promeniti vrednost
          this.sum += 1;
        }else if(this.check_trapeze_typeB(this.nextSymbols, i) == true){
          //treba promeniti vrednost
          this.sum += 1;
        }
      }

      //checked for zig_zagB and trapezeA
      for (var i = 1; i < 4; i += 1) {
        if (this.check_zig_zag_typeB(this.nextSymbols, i) == true) {
          //treba promeniti vrednost
          this.sum += 1;
        }else if(this.check_trapeze_typeA(this.nextSymbols, i) == true){
          //treba promeniti vrednost
          this.sum += 1;
        }
      }
       
      return this.sum;
    }
     
}