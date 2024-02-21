/**
 * task 1 ,task 3, task 6: tạo danh sách sv và xếp loại nhân viên
 * B1: tạo class component (employee) 
 * thuộc tính , phương thức xếp loại nhân viên
 * B2: gán các giá trị lấy được từ form user nhập gán vào các thuộc tính của component employee, xếp loại nhân viên
 * handleAddUser()
 * B3: tạo class component (listEmployee) (xử lý thêm, xóa,sửa,cập nhập,)
 * B4: render ListTableEmployee ra giao diện
 * renderTableEmployees()
 */

/**
 * task 2: thêm nhân viên mới (sử dụng localStorage)
 * B1: viết hàm set localStorage (func setLocal)
 * localStorage.setItem("ADD_EMPLOY",json.stringify(item))
 * B2: viết hàm get localStorage
 * ---gán lại mảng danh sách = json.parse(localStorage.getItem("ADD_EMPLOY"))
 * ---render lại giao diện
 */
/**
 * Tak5: xử lý tính tổng lương cho từng loại nhân viên
 * func Sum(salary) {
 * opIndex = getELE('chucvu').selectedIndex
 * case '1': salary * 3
 *  case '2': salary * 2
 *  case '3': salary * 1
 * }
 */


//class component dùng chung
let listTableEmployee = new ListEmployee()
let valid = new Validation()
//biến text thành công khi thêm nhân viên/cập nhập nhân viên
function successResult(text) {
  setTimeout(() => {
    alert(text)
  }, 1000);
  getELE('btnDong').click()
}
document.querySelector('body').style.overflowX = "hidden"
// hàm lấy lấy các element trong html
function getELE(value) {
  return document.getElementById(value)
}
//hàm render các thông tin của nhân viên
function renderTableEmployees(array) {
  let html = array.map((item) => {
    return `<tr>
      <td>${item.account}</td>
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.date}</td>
      <td>${item.position}</td>
      <td>${item.totalSalary}</td>
      <td>${item.ratingEmployee}</td>
      <td class="d-flex" style="gap:0 5px" >
      <button class="btn btn-danger  " onclick="handleDelete('${item.account}')">Xóa</button>
      <button class="btn btn-info  " onclick="handleSee('${item.account}')"  data-toggle="modal"
                    data-target="#myModal" >Xem</button>
      </td>
    </tr>`
  })
  getELE('tableDanhSach').innerHTML = html.join('')
}
//hàm setLocal
function setLocal() {
  localStorage.setItem('ADD_EMPLOYEE', JSON.stringify(listTableEmployee.arrayEmployees))
}
//hàm getLocal
function getLocal() {
  if (localStorage.getItem('ADD_EMPLOYEE') != null) {
    listTableEmployee.arrayEmployees = JSON.parse(localStorage.getItem('ADD_EMPLOYEE'))
    renderTableEmployees(listTableEmployee.arrayEmployees)
  }
}
getLocal()
//hàm tính tổng lương cho từng loại nhân viên
function sum(salary) {
  let totalSalary = 0
  let opIndex = getELE('chucvu').selectedIndex
  switch (opIndex) {
    case 1: totalSalary = salary * 3
      break
    case 2: totalSalary = salary * 2
      break
    case 3: totalSalary = salary * 1
      break
    default: totalSalary
  }
  return totalSalary
}
//validation
function isValid() {

  let inputName = getELE('name').value
  let inputEmail = getELE('email').value
  let inputPass = getELE('password').value
  let inputDate = getELE('datepicker').value
  let inputSalary = getELE('luongCB').value
  let inputTimeJob = getELE('gioLam').value
  var isValue = true
  //validation-account

  //validation-name
  isValue &= valid.checkEmpty(inputName, 'tbTen', 'Trường này không được để trống!!') && valid.checkName(inputName, 'tbTen', 'Sai kí tự tên nhân viên!!');
  //validation-email
  isValue &= valid.checkEmpty(inputEmail, 'tbEmail', 'Trường này không được để trống!!') && valid.checkEmail(inputEmail, 'tbEmail', 'Email không đúng định dạng');
  //validation-password
  isValue &= valid.checkEmpty(inputPass, 'tbMatKhau', 'Trường này không được để trống!!') && valid.checkPass(inputPass, 'tbMatKhau', 'mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)');
  //validation-date
  isValue &= valid.checkEmpty(inputDate, 'tbNgay', 'Trường này không được để trống!!') && valid.checkDate(inputDate, 'tbNgay', 'Định dạng ngày chưa đúng!!');
  //validation-salary
  isValue &= valid.checkEmpty(inputSalary, 'tbLuongCB', 'Trường này không được để trống!!') && valid.checkSalaryAndTime(inputSalary, 'tbLuongCB', 'Lương nhân viên chưa đúng!!', 1e6, 20e6);
  //validation-position
  isValue &= valid.checkPosition('chucvu', 'tbChucVu', 'Vui lòng chọn chức vụ!!');
  isValue &= valid.checkEmpty(inputTimeJob, 'tbGiolam', 'Trường này không được để trống!!') && valid.checkSalaryAndTime(inputTimeJob, 'tbGiolam', 'Giờ làm chưa đúng!!', 80, 200);
  return isValue
}
// validation account
function isValidAccount() {
  let inputAccount = getELE('tknv').value
  var isValue = true
  isValue = valid.checkEmpty(inputAccount, 'tbTKNV', 'Trường này không được để trống!!') && valid.checkAccount(inputAccount, 'tbTKNV', 'Mã tài khoản bị trùng!!', listTableEmployee.arrayEmployees)
  return isValue
}



// hàm xử lý thêm nhân viên
function handleAddUser() {
  //tạo biến lấy các giá trị người dùng nhập vao khi click
  let inputAccount = getELE('tknv').value
  let inputName = getELE('name').value
  let inputEmail = getELE('email').value
  let inputPass = getELE('password').value
  let inputDate = getELE('datepicker').value
  let inputSalary = getELE('luongCB').value
  let inputPosition = getELE('chucvu').value
  let inputTimeJob = getELE('gioLam').value

  let isNewValid2 = isValid()
  let isNewValid1 = isValidAccount()
  if (isNewValid1 && isNewValid2) {
    let employment = new Employee(inputAccount, inputName, inputEmail, inputPass, inputDate, inputSalary, inputPosition, inputTimeJob)
    employment.ratingEmployee = employment.rating()
    //tính lương
    employment.totalSalary = sum(employment.basicSalary).toLocaleString()
    //đẩy các giá trị trong class component vào trong mảng
    listTableEmployee.addListTableEmployee(employment)
    setLocal()
    //render ra giao diện ui
    renderTableEmployees(listTableEmployee.arrayEmployees)
    document.querySelector('form[role="form"]').reset()
    successResult('Thêm nhân viên thành công')
    getELE('btnDong').click()
  }

}
getELE('btnThemNV').addEventListener('click', handleAddUser)

//hàm reset các giá trị
function resetForm() {
  let inputReset = document.querySelector('form[role="form"]').reset()
  getELE('tknv').disabled = false
  getELE('btnCapNhat').style.display = "none"
  getELE('btnThemNV').style.display = "block"
  let spanIDs = document.querySelectorAll('.sp-thongbao')
  spanIDs.forEach(spanID => spanID.innerHTML = '')
  if (!inputReset) return
}
getELE('btnThem').addEventListener('click', resetForm)
// xóa nhân viên

function handleDelete(account) {
  listTableEmployee.delete(account)
  renderTableEmployees(listTableEmployee.arrayEmployees)
  setLocal()
}


// xem nhân viên
function handleSee(account) {
  let index = listTableEmployee.findEmploy(account)
  let listTable = listTableEmployee.arrayEmployees[index]
  getELE('btnCapNhat').style.display = "block"
  getELE('tknv').disabled = true
  getELE('btnThemNV').style.display = "none"
  getELE('tknv').value = listTable.account
  getELE('name').value = listTable.name
  getELE('email').value = listTable.email
  getELE('password').value = listTable.password
  getELE('datepicker').value = listTable.date
  getELE('luongCB').value = listTable.basicSalary
  getELE('chucvu').value = listTable.position
  getELE('gioLam').value = listTable.timeJob
  let spanIDs = document.querySelectorAll('.sp-thongbao')
  spanIDs.forEach(spanID => spanID.innerHTML = '')

}
//cập nhập nhân viên
function handleUpdate() {
  let inputAccount = getELE('tknv').value
  let inputName = getELE('name').value
  let inputEmail = getELE('email').value
  let inputPass = getELE('password').value
  let inputDate = getELE('datepicker').value
  let inputSalary = getELE('luongCB').value
  let inputPosition = getELE('chucvu').value
  let inputTimeJob = getELE('gioLam').value
  getELE('tknv').disabled = true
  let isNewValid = isValid()
  if (isNewValid) {
    let employment = new Employee(inputAccount, inputName, inputEmail, inputPass, inputDate, inputSalary, inputPosition, inputTimeJob)
    employment.ratingEmployee = employment.rating()
    //tính lương
    employment.totalSalary = sum(employment.basicSalary).toLocaleString()
    //đẩy các giá trị trong class component vào trong mảng
    listTableEmployee.update(employment)
    //render ra giao diện ui
    renderTableEmployees(listTableEmployee.arrayEmployees)
    setLocal()
    successResult("Cập nhập thành công")
  }

}
getELE('btnCapNhat').addEventListener('click', handleUpdate)
// tìm kiếm nhân viên

function searchFromRating() {
  let key = getELE('searchName').value
  let result = listTableEmployee.search(key)
  renderTableEmployees(result)
}
getELE('btnTimNV').onclick = searchFromRating

//hàm oninput
function handleOn() {
  let messages = document.querySelectorAll('.sp-thongbao')
  messages.forEach(message => {
    let forms = document.querySelectorAll('.form-control')
    forms.forEach((form) => {
      if (message) {
        form.addEventListener('input', function () {
          message.innerHTML = ''
        })
      }
    }
    )
  })
}
handleOn()