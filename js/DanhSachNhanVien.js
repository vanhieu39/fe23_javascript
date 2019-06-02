function DanhSachNhanVien() {
  this.mangNhanVien = [];

  //Thêm nhân viên
  this.themNhanVien = function(nhanVien) {
    this.mangNhanVien.push(nhanVien);
  };

  //layTHongTinNhanVienCanSua
  this.LayThongTinNhanVien = function(maNV){
  //   /* 
  //     1. duyệt mảng.
  //     2. kiểm tra nếu maNV có === item.maNV
  //     3. Nếu có mã => trả về item.
  //   */
  //   var nhanvien;
  //   this.mangNhanVien.map(function(item){
  //     if(maNV === item.maNV){
  //       nhanvien = item;
  //       return nhanvien;
  //     }
  //     return nhanvien;
  //   });

    return this.mangNhanVien.find(function(item){
      return maNV === item.maNV;
    });
  }

  //suaNhanVien
  this.capNhatNhanVien = function(nhanVien){
    this.mangNhanVien.map(function(item){
      if(nhanVien.maNV === item.maNV){
        item.tenNV = nhanVien.tenNV;
        item.email = nhanVien.email;
        item.passs = nhanVien.passs;
        item.date = nhanVien.date;
        item.chucvu = nhanVien.chucvu;
      }
    });
  };
  //Xoa
}

DanhSachNhanVien.prototype.xoaNhanVien = function(maNV){

  let vitri = this.mangNhanVien.findIndex(function(item){
    return maNV === item.maNV;
  })

  // let vitri = -1;
  // this.mangNhanVien.map(function(item,index){
  //   if(maNV === item.maNV){
  //     vitri = index;
  //   }
  // });
  this.mangNhanVien.splice(vitri,1);
}
