var danhSachNhanVien = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorage();

getEle("btnThem").addEventListener("click", function() {
  getEle("btnCapNhat").style.display = "none";
});

getEle("btnThemNV").addEventListener("click", function() {
  
  var msNV = getEle("msnv").value;
  var tenNV = getEle("name").value;
  var email = getEle("email").value;
  var pass = getEle("password").value;
  var date = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  var isValid = true;

  isValid &=
    validation.kiemTraRong(msNV, "tbMaNV", "(*) Vui lòng nhập MSNV") &&
    validation.kiemTraDoDai(
      msNV,
      "tbMaNV",
      "(*) Vui lòng ký tự từ 6-12",
      6,
      12
    );
  isValid &=
    validation.kiemTraRong(tenNV, "tbTen", "(*) Vui lòng nhập tên NV") &&
    validation.kiemTraChuoi(tenNV, "tbTen", "(*) Vui lòng nhập vào ký tự");
  isValid &=
    validation.kiemTraRong(email, "tbEmail", "(*) Vui lòng nhập email") &&
    validation.kiemTraEmail(
      email,
      "tbEmail",
      "(*) Vui lòng nhập email đúng định dạng"
    );
  isValid &= validation.kiemTraRong(
    pass,
    "tbMatKhau",
    "(*) Vui lòng nhập pass"
  );
  isValid &= validation.kiemTraChucVu(
    "chucvu",
    "tbChucVu",
    "(*) Vui lòng chọn chức vụ"
  );

  if (isValid) {
       var nhanVien = new NhanVien(msNV, tenNV, email, pass, date, chucVu);
      danhSachNhanVien.themNhanVien(nhanVien);
      taoBang();
      setLocalStorage();
  };
});


function getEle(id) {
  return document.getElementById(id);
}

function taoBang(){
  var tblBody = getEle("tableDanhSach");
  var content = "";

  /*
  //String template => ES6;

  var name ="Cybersoft";
  // var result = "hello"+name;
  var result = `hello ${name}`;
  */

  //Duyệt mảng bằng map;
  danhSachNhanVien.mangNhanVien.map(function(item){
    content += `
      <tr>
        <td>${item.maNV}</td>
        <td>${item.tenNV}</td>
        <td>${item.email}</td>
        <td>${item.date}</td>
        <td>${item.chucVu}</td>
        <td>
          <button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="sua('${item.maNV}')" >Sửa</button>
          <button class="btn btn-danger" onclick="xoa('${item.maNV}')" >Xóa</button>
        </td>
      </tr>
    `;
  });
   //tạo bảng cách 2, cách mới.

  
 
  // ///cái này cũ rồi, giờ làm cách mới.
  // function taoBang(){
  //   var tblBody = getEle("tableDanhSach");
  //   tblBody.innerHTML = "";
  //   for(var i = 0;i<danhSachNhanVien.mangNhanVien.length;i++){
  //     var tagTR = document.createElement("tr");

  //     var tgTDMa = document.createElement("td");
  //     var tgTDHoTen = document.createElement("td");
  //     var tgTDEmail = document.createElement("td");
  //     var tgTDNgaySinh = document.createElement("td");
  //     var tgTDChucVu = document.createElement("td");


  //     tgTDMa.innerHTML = danhSachNhanVien.mangNhanVien[i].maNV;
  //     tgTDHoTen.innerHTML = danhSachNhanVien.mangNhanVien[i].tenNV;
  //     tgTDEmail.innerHTML = danhSachNhanVien.mangNhanVien[i].email;
  //     tgTDNgaySinh.innerHTML = danhSachNhanVien.mangNhanVien[i].date;
  //     tgTDChucVu.innerHTML = danhSachNhanVien.mangNhanVien[i].chucVu;

  //     tagTR.appendChild(tgTDMa);
  //     tagTR.appendChild(tgTDHoTen);
  //     tagTR.appendChild(tgTDEmail);
  //     tagTR.appendChild(tgTDNgaySinh);
  //     tagTR.appendChild(tgTDChucVu);

  //     tblBody.appendChild(tagTR);

  //   }
  // };
  tblBody.innerHTML = content;
};
function sua(maNV){
  getEle("btnThemNV").style.display = "none";
  getEle("btnCapNhat").style.display = "block";

  var nv = danhSachNhanVien.LayThongTinNhanVien(maNV);

  
  getEle("msnv").value = nv.maNV;
  getEle("name").value = nv.tenNV;
  getEle("email").value = nv.email;
  getEle("password").value = nv.pass;
  getEle("datepicker").value = nv.date;
  getEle("chucvu").value = nv.chucVu;
  // Console.log(nv);
};
function xoa(maNV){
    danhSachNhanVien.xoaNhanVien(maNV);
    taoBang();
    setLocalStorage();
}
getEle("btnCapNhat").addEventListener("click", function(){
  var msNV = getEle("msnv").value;
  var tenNV = getEle("name").value;
  var email = getEle("email").value;
  var pass = getEle("password").value;
  var date = getEle("datepicker").value;
  var chucVu = getEle("chucvu").value;

  var nhanVien = new NhanVien(msNV,tenNV,email,pass,date,chucVu);

  danhSachNhanVien.capNhatNhanVien(nhanVien);
  taoBang();
  setLocalStorage();
});
function setLocalStorage(){
  return  localStorage.setItem("DSNV",JSON.stringify(danhSachNhanVien.mangNhanVien));
};
function getLocalStorage(){
  if(localStorage.getItem("DSNV") != null){
    danhSachNhanVien.mangNhanVien = JSON.parse(localStorage.getItem("DSNV"));
    taoBang();   
  }
};

