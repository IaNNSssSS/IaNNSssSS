var sha = true;
function changedisplay()
{
    sha = !sha;
    if(sha)
    {
        document.querySelector('.share').style.display="block";
    }
    else
    {
        document.querySelector('.share').style.display="none";
    }
}
function corpo()
{
    document.querySelector('.share').style.display="none";
}
function imagem()
{
    document.querySelector('.share').style.display="none";
}