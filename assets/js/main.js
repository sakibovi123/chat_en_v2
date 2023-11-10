$(document).ready(function() {
    function updateDateAndDay() {
        const currentDay = new Date()
        const dayOfWeek = currentDay.toLocaleString("en-us", {weekday: 'long'})
        const date = currentDay.toLocaleDateString()

        $("#day").text(dayOfWeek)
        $("#date").text(date)
    }

    updateDateAndDay()
})

console.log("script loaded")


var currentStep = 1
var buttonValue = ""
// step 1
if( currentStep === 1 ) {
    setTimeout(() => {
        $("#step-1 > p:first").removeClass("hidden")
        setTimeout(()=> {
            $("#step-1 > p").eq(1).removeClass("hidden")
        }, 1200)
        setTimeout(()=> {
            $("#step-1 > p").eq(2).removeClass("hidden")
        }, 1800)

        setTimeout(() => {
            $("#step-1 > div").removeClass("hidden")
        }, 2500)
    }, 800)

    $("#step-1 > div > button").click(function () {
        buttonValue = $(this).val()
        // console.log(buttonValue)
        if( buttonValue === "Yes" ) {
            $("#user-response-1 > p").eq(0).removeClass("hidden")
            $("#user-response-1 > p").eq(0).text(buttonValue)
        } else {
            $("#user-response-1 > p").eq(0).text("No")
        }
        
    })
    

    // $(document).ready(function() {
    //     $('#step-1 > div > button').click(function() {
    //         var buttonValue = $(this).val();
    //         console.log(buttonValue);
    //     });
    // });
    


}