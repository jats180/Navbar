var btn=document.getElementById("btn");
btn.addEventListener('click',function()
{
    var input=document.getElementById("input");
    if(input.value=="home" || input.value=="contact")
    {
        $("#modal-title").text("Success");
        $("#str").text("Success");
        $("#alert").removeClass("alert-danger");
        $("#alert").addClass("alert-success");
    }
    else
    {
        document.getElementById("modal-title").innerHTML="Warning";
        $("#str").text("Warning");
        $("#alert").removeClass("alert-success");
        $("#alert").addClass("alert-danger");
    }
}
)