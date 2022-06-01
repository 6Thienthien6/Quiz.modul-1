//*câu 1 

// function ptbac2(a, b, c) {

//     a = Number(prompt("nhập số a"));
//     b = Number(prompt("nhập số b"));
//     c = Number(prompt("nhập số c"));
//     let delta = b * b - 4 * a * c;
//     if (a == 0) {
//         return `Phương trình có nghiệm x =${-c / b}`;
//     } else {
//         if (delta < 0) {
//             return `Phương trình vô nghiệm`;
//         }
//         if (delta > 0) {
//             return `Phương trình có 2 nghiệm phân biệt là x1 = ${(-b + Math.sqrt(delta)) / (2 * a)} và x   2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`;
//         }
//         if (delta == 0) {
//             return `Phương trình có một nghiệm kép x = ${-b / (2 * a)}`;
//         }
//     }
// }
// alert(ptbac2(8, 12, -20));

// *câu 2

// let arr = [5, 9, 3, 6, 7, 2, -4, 15];

// function form(number, arr) {
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] == number) {
//             return i;
//         }
//     }
//     alert("phần tử không có trong mảng");
// }
// alert(form(6, arr));

//*câu 4
class Staff {
    constructor(Fullname, Email) {
        this.Fullname = Fullname;
        this.Email = Email;
        this.setFullname = function(Value) {
            return this.Fullname = Value;
        };
        this.getFullname = function() {
            return this.Fullname;
        };
        this.setEmail = function(Value) {
            return this.Email = Value;
        };
        this.getEmail = function() {
            return this.Email;
        };
        this.toString = function() {
            return `Fullname: ${this.Fullname}<br>Email: ${this.Email}<br>`;
        };
    };
};
let david = new Staff("David", "david@gmail.com");
david.setFullname("David Do");
david.setEmail("david.do@gmail.com");
document.write(david.toString());
const staffs = [
    david,
    new Staff("Thiên", "Thiennn@gmail.com"),
    new Staff("Huy", "Huyyy@gmail.com"),
    new Staff("Linh", "Linhhh@gmail.com"),
];
for (let i = 0; i < staffs.length; i++) {
    document.write(staffs[i].toString());
};