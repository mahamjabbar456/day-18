// Question 52
type smartphone = {
    brand : string;
    model : string;
    feature :{
        storage : string;
        size : string;
    }
}

let xamoi:smartphone = {
    brand : "Xiaomi Redmi 12 5G",
    model : "23076RN4BI",
    feature : {
        storage : "128 GB" ,
        size : "6.79 inches"
    }
}
console.log(xamoi.feature.size);

// Question 53
type computerProgrammer = {
    language:string[],
    tool:string[],
    framework : string[]
}

let programmer1:computerProgrammer = {
    language : ["HTML","CSS","Javascript","Typescript","Nodejs"],
    tool:["Sublime","VS Code","Notepad"],
    framework : ["Angular","React Js","Express"]
};

// Get specific skill from the list
let {language:lang,tool:tool,framework:frame} = programmer1;
console.log(`Language : ${lang[0]} , Tool : ${tool[0]} , framework : ${frame[0]}`);

// Question 54

type dynamicobject = {
    [key:string] : string;
}
function CreateObjectWithDynamic(key:string,value:string){
    let dynamicobject:dynamicobject = {};
    dynamicobject[key] = value;
    // dynamicobject = value;
    return dynamicobject;
}

let userpreference = CreateObjectWithDynamic("name","Sabar");
console.log(userpreference);