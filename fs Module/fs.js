// fs Module using callbacks..

const fs = require("fs");

// Writing a file

fs.writeFile("./fs Module/message.txt","This file was writtern with the help of fs Module.",(err)=>{
    if(err){
        console.log('This file cannot be created due to an error that occured..!!');      
    }else{
        console.log('The file has been created.. Successfully...')
    }
})


// Reading a file

fs.readFile("./fs Module/message.txt",(err,data)=>{
    console.log(data.toString());
}) // metod-1 using toString() method else use UTF 8 for better results.


fs.readFile("./fs Module/message.txt",'UTF8',(err,data) => {
    if(err){
        console.log('The data cannot be shown due to the error occured..');
    }else{
        console.log(data);
    }
})  // method-2 using UTF8 for string conversion


// Append File

fs.appendFile("./fs Module/message.txt","\nThis Data was added later by appendFile function.",(err) => {
    if(err){
        console.log('Data not appended');
    }else{
        console.log("data appended");
        fs.readFile("./fs Module/message.txt",(err,data) => {
            if(err) console.log(err);
            else{
                console.log("The data has appended new data is",data.toString());
            }
        })
    }
})  // example of callback-hell and append file function use.


// Copy File with fs

fs.copyFile("./fs Module/message.txt","./fs Module/message2.txt",(err) =>{
    if(err) console.log('The file can not be copied..');
    else console.log('File Copied Successfully....');
})

// Deleting a file with fs

fs.unlink("./fs Module/message2.txt",(err) =>{
    if (err) console.log("The file can't be deleted..");
    else console.log("Deleted Sucessfully...");
})