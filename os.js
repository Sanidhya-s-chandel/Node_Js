// OS Module for os required task's

const os = require("os")

// EOL returns the end line feature of the programing (simply return \n)

console.log('Hello',os.EOL,'World!!')

// returns the number of Parallelism (numbers of cores) always return a value > 0

console.log(os.availableParallelism());

// returns the numbers of CPUS and their status/information, The array will be empty if no CPU information is available

console.log(os.cpus());

// Returns the amount of free system memory in bytes as an integer.

console.log(os.freemem() / (1024 * 1024 * 1024)); // this is to convert the menory from bytes to GB's

// Returns the string path of the current user's home directory.

console.log(os.homedir())

// Returns the host name of the operating system (Laptop Name) as a string.

console.log(os.hostname());

// Returns the machine type as a string, such as arm, arm64, aarch64, mips, mips64, ppc64, ppc64le, s390, s390x, i386, i686, x86_64
// inshort it returns the info of the chip set.

console.log(os.machine());

// Returns the system uptime in number of seconds.

console.log(os.uptime() / (60  * 60)); // Converts uptime to hours