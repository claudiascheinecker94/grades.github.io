function grades(){
    var subjects = prompt("How many subjects did you take?");
    var sum =0;
    var avg =0;
    var grade ='';
    for(i=0;i<subjects;i++){
        var results = prompt("Please enter results for subject " + (i+1));
        var num = parseInt(results);
        sum+=num;
    }
    avg = sum/subjects;
    if(avg>=85){
        grade = 'A';
    } else if (avg>=70){
        grade = 'B';
    } else if (avg>=55){
        grade = 'C';
    } else if (avg>=40){
        grade = 'D';
    } else if (avg>=25){
        grade = 'E';
    } else if (avg>=10){
        grade = 'F';
    } else {
        grade = 'N';
    }
    document.getElementById("main").innerHTML+="<br />You achieved a total of " + avg + "%. Your grade is: " + grade + ".";
}