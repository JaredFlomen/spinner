process.stdout.write('hello from spinner2.js... \rheyyy\n');
const animation = ["\r|", "\r\\", "\r-", "\r/", "\r|"];
let x = 0;
for (const char of animation) {
  setTimeout(() => {process.stdout.write(char)}, x);
  x += 200;
}
setTimeout(() => {process.stdout.write("\n")}, x);
