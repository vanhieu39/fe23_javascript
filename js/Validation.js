function Validation() {
  this.kiemTraRong = function(input, spanId, message) {
    if (input === "") {
      getEle(spanId).innerHTML = message;
      getEle(spanId).style.display = "block";
      return false;
    } else {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
  };

  this.kiemTraChucVu = function(ele, spanId, message) {
    if (getEle(ele).selectedIndex != 0) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraDoDai = function(input, spanId, message, min, max) {
    if (input.length >= min && input.length <= max) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraChuoi = function(input, spanId, message) {
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );
    if (pattern.test(input)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };

  this.kiemTraEmail = function(input, spanId, message) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.match(mailformat)) {
      getEle(spanId).innerHTML = "";
      getEle(spanId).style.display = "none";
      return true;
    }
    getEle(spanId).innerHTML = message;
    getEle(spanId).style.display = "block";
    return false;
  };
}
