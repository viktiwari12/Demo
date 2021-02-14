const time = document.getElementById('stopwatch');
var sec = 0;
var min = 0;
var hr = 0;
var stopTime = true;

function startTimer()
{
    if(stopTime == true)
    {
        stopTime = false;
        timer();
    }
}
function stopTimer()
{
    if(stopTime == false)
    {
        stopTime = true;
    }
}
function timer()
{
    if(stopTime == false)
    {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec++;
        if (sec == 60)
        {
            min++;
            sec = 0;
        }
        if (min == 60)
        {
            hr++;
            min = 0;
            sec = 0;
        }
        if (sec < 10 || sec == 0) 
        {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) 
        {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }
        time.innerHTML = hr + ':' + min + ':' + sec;
        window.setTimeout("timer()", 1000);
    }
    
}
function resetTimer()
{
    time.innerHTML = "00:00:00";

    sec = 0;
    min = 0;
    hr = 0;

}