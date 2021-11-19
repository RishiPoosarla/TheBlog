var name_of_students = [];

function submit(){
    var name_1 = document.getElementById("name_1").value;
    var name_2 = document.getElementById("name_2").value;
    var name_3 = document.getElementById("name_3").value;
    var name_4 = document.getElementById("name_4").value;

    name_of_students.push(name_1);
    name_of_students.push(name_2);
    name_of_students.push(name_3);
    name_of_students.push(name_4);

    document.getElementById("display_name").innerHTML = name_of_students;

    document.getElementById("submit_button").style.display= "none";
    document.getElementById("sort_button").style.display= "inline-block";

}

function sort(){
    name_of_students.sort();
    document.getElementById("display_name").innerHTML = name_of_students;
    console.log(name_of_students);
}