var uname: string | null = prompt("Enter Name");

if (uname == "") {
  document.write("Name Can't be empty");
} else if (uname == null) {
  document.write("You cancelled..");
} else {
  document.write(`Hello !  ${uname}`);
}
