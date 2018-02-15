$(function(){
    console.log('heyyyyyyyyyyyyyyyyyy')
    $.extend(WorkoutLog, {
        sleep: {
            sleepies: [],
            create: function() {
                console.log("wooahh success")
                var itsSleep = {
                    result: $("#sleep-result").val(),
                  

                };
                var postData = {sleep: itsSleep };
                console.log(postData.sleep)
                var sleeper = $.ajax({
                    type:"POST",
                    url: WorkoutLog.API_BASE + "sleep",
                    data: JSON.stringify(postData),
                    contentType: "application/json"
                });
                sleeper.done(function(data){
                    console.log(data)
                    WorkoutLog.sleep.sleepies.push(data);
                    $("#sleep-result").val("");
                    $('a[href="#sleep"]').tab("show");
                });
            }
        }
    })
    $("#sleepbtn").on("click", WorkoutLog.sleep.create);
})