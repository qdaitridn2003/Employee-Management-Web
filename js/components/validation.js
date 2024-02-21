/**
 * task 4: validation
 * B1: checkEmpty(inputValue,spanID,message) .
 * nếu inputValue = '' => xuất message và trả ra giá trị false  ngược lại thì message = '' trả lại giá trị true
 * B2: checkAccount(inputValue,spanID,message,array)
 * tạo biến isAccount = false
 * isAccount =array.some(item => item.account == inputValue )
 * nếu isAccount =>  xuất message return false
 * B3: checkName(inputValue,spanID,message) .
 *  tạo biến regex= new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$")
 *  nếu inputValue.test(regex) => xuất message ,  trả ra giá trị false
 * -- ngược lại thì message = '' trả giá trị true
 * B4: checkEmail(inputValue,spanID,message) tương tự như checkName ,regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 * B5: checkPass(inputValue,spanID,message) tương tự như checkName , regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/
 * B6: checkDate: tương tự như checkPass, regex = mm/dd/yyyy: /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
 * B7: checkSalary,checkTimeJob(inputValue,spanID,message,value1,value2)
 * nếu lương (time) bé hơn value1 và lớn hơn value2 => message, false
 *  ngược lại thì message = '', true
 * B8: checkDrop(setID,spanID,message)
 * tạo biến optionIndex = DOM(setID).selectedIndex
 * kiểm tra optionIndex != 0 => true, message=''; ngược lại false, xuất message
 */


function Validation() {

  //kiểm tra trống
  this.checkEmpty = function (inputValue, spanID, message) {
    if (inputValue.trim() == '') {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    } else {
      return true
    }
  }
  // kiểm tra trùng account
  this.checkAccount = function (inputValue, spanID, message, array) {
    let isAccount = false
    isAccount = array.some((item) => {
      return item.account == inputValue.trim()
    })
    if (isAccount) {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    } else {
      return true
    }
  }
  //kiểm tra name
  this.checkName = function (inputValue, spanID, message) {
    let regex = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$")
    if (regex.test(inputValue)) {
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
  //kiểm tra email
  this.checkEmail = function (inputValue, spanID, message) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regex.test(inputValue)) {
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
  //kiểm tra passWord
  this.checkPass = function (inputValue, spanID, message) {
    let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/
    if (regex.test(inputValue)) {
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
  //kiểm tra ngày
  this.checkDate = function (inputValue, spanID, message) {
    let regex = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/
    if (regex.test(inputValue)) {
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
  //kiểm tra lương cơ bản, kiểm tra thời gian làm việc 
  this.checkSalaryAndTime = function (inputValue, spanID, message, value1, value2) {
    let regex = /^[0-9]+$/
    if (inputValue < value1 || inputValue > value2 && regex.test(inputValue)) {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    } else {
      return true
    }
  }
  //kiểm tra chức vụ
  this.checkPosition = function (setID, spanID, message) {
    let optionIndex = document.getElementById(setID).selectedIndex
    if (optionIndex != 0) {
      return true
    } else {
      document.getElementById(spanID).innerHTML = message
      document.getElementById(spanID).style.display = 'block'
      return false
    }
  }
}
