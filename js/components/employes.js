
function Employee(account, name, email, pass, date, salary, position, time) {
  this.account = account;
  this.name = name;
  this.email = email;
  this.password = pass;
  this.date = date;
  this.basicSalary = salary;
  this.position = position;
  this.timeJob = time;
  this.totalSalary = 0;
  this.ratingEmployee = ''
  //xếp loại nhân viên
  this.rating = function () {
    if (this.timeJob >= 192) {
      return this.ratingEmployee = "Xuất sắc"
    } else if (this.timeJob >= 176 && this.timeJob < 192) {
      return this.ratingEmployee = "Giỏi"
    } else if (this.timeJob >= 160 && this.timeJob < 176) {
      return this.ratingEmployee = "Khá"
    } else {
      return this.ratingEmployee = "Trung Bình"
    }
  }

}