/**
 * Task 7: xóa nhân viên
 * B1: func findEmploy(account), tạo biến vị tri i =-1, lặp qua mảng tìm kiếm mã Account, => i = index,
 * B2: func delete(account), tạo biến vị trí  index = findEmploy() , lặp qua mang xóa 1 phần tử splice(index,1)
 */
/**
 * Task 8 : cập nhập nhân viên
 * B1: func update(employee){}, tạo biến index = hàm tìm vị trí nhân viên
 * B2: nếu index < 0 thì return, mảng arrayEmployee[index] = employee
 */
/**
 * Task 9 : tìm kiếm nhân viên
 * B1: func search(key){}, tạo biến newArrayEmploy =  1 mảng mới, tạo biến loweKey : đưa giá trị key về chữ thường
 * B2: lặp qua arrayEmployee(item) =>tạo 1 biến valueLower =   item.ratingEmployee.trim().toLowerCase()
 * B3: tạo biến result = valueLower.indexOf(loweKey)
 * B4: nếu result < 0 return, newArrayEmploy.push(item)
 */
function ListEmployee() {
  this.arrayEmployees = []
  // thêm các giá trị thuộc tính vào mảng arrayEmployees
  this.addListTableEmployee = function (infoEmployee) {
    this.arrayEmployees.push(infoEmployee)
  }
  //tìm vị trí nhân viên
  this.findEmploy = function (account) {
    let i = -1
    this.arrayEmployees.map((item, index) => item.account == account ? i = index : i)
    return i
  }

  //xóa nhân viên
  this.delete = function (account) {
    let index = this.findEmploy(account)
    if (index < 0) return
    this.arrayEmployees.splice(index, 1)
  }
  // cập nhập nhân viên
  this.update = function (employee) {
    let index = this.findEmploy(employee.account)
    if (index < 0) return
    this.arrayEmployees[index] = employee
  }
  // tìm nhân viên
  this.search = function (key) {
    let newArrayEmploy = []
    //từ khóa search về chữ thường
    let lowerKey = key.trim().toLowerCase()
    this.arrayEmployees.map((item) => {
      // giá trị trong form thành chữ thường
      let valueLower = item.ratingEmployee.trim().toLowerCase()
      let result = valueLower.indexOf(lowerKey)
      if (result < 0) return
      newArrayEmploy.push(item)
    })
    return newArrayEmploy
  }

}