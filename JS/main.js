function patientForm(event)
    {
        event.preventDefault();
        let fName = document.getElementById("fName").value;
        let mName = document.getElementById("mName").value;
        let lName = document.getElementById("lName").value;
        let bDate = document.getElementById("date").value;
        let cNum = document.getElementById("cNumber").value;
        let address = document.getElementById("address").value;
        if(fName=="")
            {
                document.getElementById("span1").innerHTML += "This field is required";

            }
        else
            {
                document.getElementById("span1").innerHTML = "*";
            }
        if(lName=="")
            {
                document.getElementById("span3").innerHTML += "This field is required";

            }
        else
            {
                document.getElementById("span1").innerHTML = "*";
            }
        if(bDate=="")
            {
                document.getElementById("span4").innerHTML += "This field is required";

            }
        else
            {
                document.getElementById("span1").innerHTML = "*";
            }
        if(cNum=="")
            {
                document.getElementById("span5").innerHTML += "This field is required";

            }
        else
            {
                document.getElementById("span1").innerHTML = "*";
            }
        if(address=="")
            {
                document.getElementById("span7").innerHTML += "This field is required";

            }
        else
            {
                document.getElementById("span1").innerHTML = "*";
            }
        let gender = document.querySelector('input[name="gender"]:checked');
        if(gender !=null)
            {
                gender = gender.value;
            }
        else
            {
                document.getElementById("span6").innerHTML += "This field is required";   
            }
        let medHistory = document.querySelectorAll('input[type="checkbox"]');
        let result = [];
        medHistory.forEach(item => 
            {
                if(item.checked)
                    {
                        result.push(item.value);
                    }
            });
        let currentSymptoms = document.getElementById("symptoms").value
        if(currentSymptoms=="Select Symptoms")
            {
                document.getElementById("span8").innerHTML += "This field is required";

            }
        let takingMeds = document.querySelector('input[name="med"]:checked');
        if(takingMeds!=null && takingMeds.value=="Yes")
            {
                let takingMedsInput = document.getElementById("med").value;
                takingMeds = takingMeds.value+ " : " + takingMedsInput
            }
        else if(takingMeds!=null && takingMeds.value=="No")
            {
                takingMeds = takingMeds.value
            }
        else
            {
                document.getElementById("span9").innerHTML += "This field is required";
            }
        let patient = {
            fName: fName,
            mName: mName,
            lName: lName,
            bDate: bDate,
            cNum: cNum,
            gender: gender,
            address: address,
            medHistory: result,
            currentSymptoms: currentSymptoms,
            takingMeds: takingMeds
        }
        let answer = prompt("Are you sure you fillout the form correctly?\n Type \"yes\" if you wish to continue\n Type \"no\" if not");
        if (answer=="yes")
            {
                alert("Your information was successfully addedd!");
                localStorage.setItem("Patients",JSON.stringify(patient));
            }
        else if (answer=="no")
            {
                alert("Please verify your input");
            }
        else
            {
                alert("Please choose from yer or no");
            }
                

    }
function medInputEnable()
    {
        document.getElementById("med").disabled = false;
        
    }
function medInputDisable()
    {
        document.getElementById("med").disabled = true;
        
    }
window.onload = function()
    {
        let today = new Date().toISOString().split('T')[0];
        document.getElementById("date").setAttribute('max',today)
        let btnSubmit = document.getElementById("submit");
        btnSubmit.onclick = patientForm;
    }