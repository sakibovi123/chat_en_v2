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
        
        $("#step-1 > div > p:first").removeClass("hidden")
        $("#step-1 > div > img").removeClass("hidden")
        setTimeout(()=> {
            $("#step-1 > div > img").addClass("hidden")
            $("#step-1 > p").eq(1).removeClass("hidden")
        }, 1200)
        setTimeout(()=> {
            $("#step-1 > div > img").addClass("hidden")
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
            
            $("#step-1 > div").addClass("hidden")
            setTimeout(() => {
                $("#step-1-yes-response > p").eq(0).removeClass("hidden")
            }, 1200)

            setTimeout(() => {
                $("#step-1-yes-response > p").eq(1).removeClass("hidden")
            }, 1500)

            setTimeout(() => {
                $("#step-1-yes-response > p").eq(2).removeClass("hidden")
            }, 2000)
            
            setTimeout(()=> {
                $("#chat-close").removeClass("hidden")
            }, 2500)

        } else {
            $("#user-response-1 > p").eq(0).removeClass("hidden")
            $("#user-response-1 > p").eq(0).text("No")
            

            $("#step-1 > div").addClass("hidden")

            currentStep += 1

            setTimeout(()=> {
                $("#step-1-no-response > p").eq(0).removeClass("hidden")
                setTimeout(()=> {
                    $("#step-1-no-response > p").eq(1).removeClass("hidden")
                }, 1300)
                setTimeout(()=> {
                    $("#step-1-no-response > div").removeClass("hidden")
                }, 1400)
            }, 1200)



           
        }

        $("#step-1-no-response > div > button").click(function () {
            buttonValue2 = $(this).val()

            if( buttonValue2 == "Yes" )
            {
                $("#user-response-2 > p").eq(0).removeClass("hidden")
                $("#user-response-2 > p").eq(0).text("Yes")

                $("#step-1-no-response > div").addClass("hidden")

                setTimeout(() => {
                    $("#step-2-yes-response > p").removeClass("hidden")
                    setTimeout(()=>{
                        $("#step-2-yes-response > div").removeClass("hidden")
                    }, 1200)
                }, 800)
            }

            else {
                $("#user-response-2 > p").eq(0).removeClass("hidden")
                $("#user-response-2 > p").eq(0).text("No")

                $("#step-1-no-response > div").addClass("hidden")
                setTimeout(()=>{
                    $("#user-choose-50-no > p").eq(0).removeClass("hidden")
                        setTimeout(()=>{
                            $("#user-choose-50-no > p").eq(1).removeClass("hidden")
                        }, 1200)
                        setTimeout(()=> {
                            $("#chat-close").removeClass("hidden")
                        }, 2000)
                }, 800)
                
                
            }
        })

        $("#step-2-yes-response > div > button").click(function() {
            buttonVal3 = $(this).val()

            if( buttonVal3 === "Yes" ) {
                $("#step-2-yes-response > div").addClass("hidden")

                $("#user-response-3 > p").removeClass("hidden")
                $("#user-response-3 > p").text("Yes")

                setTimeout(()=>{
                    $("#step-3-yes-response > p").eq(0).removeClass("hidden")
                    setTimeout(()=>{
                        $("#step-3-yes-response > p").eq(1).removeClass("hidden")
                        setTimeout(()=>{
                            $("#step-3-yes-response > p").eq(2).removeClass("hidden")
                        }, 1200)
                        setTimeout(()=>{
                            $("#chat-close").removeClass("hidden")
                        }, 1500)
                    }, 1000)
                }, 800)
            }
            else {
                $("#step-2-yes-response > div").addClass("hidden")
                $("#user-response-3 > p").removeClass("hidden")
                $("#user-response-3 > p").text("No")

                setTimeout(()=>{
                    $("#step-3-no-response > p").eq(0).removeClass("hidden")
                    setTimeout(()=> {
                        $("#step-3-no-response > p").eq(1).removeClass("hidden")
                        setTimeout(()=> {
                            $("#step-3-no-response > p").eq(2).removeClass("hidden")
                        }, 1200)
                        setTimeout(()=> {
                            $("#chat-close").removeClass("hidden")
                        }, 1500)
                    }, 1000)
                }, 800)
            }
        })
        
    })
}