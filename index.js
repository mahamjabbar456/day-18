let xamoi = {
    brand: "Xiaomi Redmi 12 5G",
    model: "23076RN4BI",
    feature: {
        storage: "128 GB",
        size: "6.79 inches"
    }
};
console.log(xamoi.feature.size);
let programmer1 = {
    language: ["HTML", "CSS", "Javascript", "Typescript", "Nodejs"],
    tool: ["Sublime", "VS Code", "Notepad"],
    framework: ["Angular", "React Js", "Express"]
};
// Get specific skill from the list
let { language: lang, tool: tool, framework: frame } = programmer1;
console.log(`Language : ${lang[0]} , Tool : ${tool[0]} , framework : ${frame[0]}`);
function CreateObjectWithDynamic(key, value) {
    let dynamicobject = {};
    dynamicobject[key] = value;
    // dynamicobject = value;
    return dynamicobject;
}
let userpreference = CreateObjectWithDynamic("name", "Sabar");
console.log(userpreference);
export {};
