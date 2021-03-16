let multer = require("multer");
let path = require("path");

// Khởi tạo biến cấu hình cho việc lưu trữ file upload
let diskStorage = multer.diskStorage({
    destination: (req, file, callback) => {
      // Định nghĩa nơi file upload sẽ được lưu lại
      console.log(path.dirname(path.dirname(__filename))+ "/public/images/");
      callback(null, path.dirname(path.dirname(__filename))+ "/public/images/");
    },
    filename: (req, file, callback) => {
      // ở đây các bạn có thể làm bất kỳ điều gì với cái file nhé.
      // Mình ví dụ chỉ cho phép tải lên các loại ảnh png & jpg
      let math = ["image/png", "image/jpeg"];
      if (math.indexOf(file.mimetype) === -1) {
        let errorMess = `The file <strong>${file.originalname}</strong> is invalid. Only allowed to upload image jpeg or png.`;
        return callback(errorMess, null);
      }
   
      // Tên của file thì mình nối thêm một cái nhãn thời gian để đảm bảo không bị trùng.
      let filename = `${Date.now()}-trungquandev-${file.originalname}`;
      callback(null, filename);
    }
});

// Khởi tạo middleware uploadFile với cấu hình như ở trên,
// Bên trong hàm .single() truyền vào name của thẻ input, ở đây là "file"
let uploadFile = multer({storage: diskStorage}).single("icon");

module.exports = {
    uploadFile
}