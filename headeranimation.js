var wordspace=document.querySelector("#targetrole");
var cursor=document.querySelector("#cursor");
var wordbank=["Web Designer","UI Designer"];
var counter=0;
var wordswitch=0;

function write()
{
    if (wordswitch==0)
    {
        if (counter<wordbank[0].length)
        {   
             wordspace.innerHTML+=wordbank[0][counter];
             counter++;
             if (counter%2==0)
             {
                 cursor.innerHTML=" |";
             }
             else
             {
                 cursor.innerHTML="";
             }
             setTimeout(write,200);
        }
        else if (counter==wordbank[0].length)
        {
            setTimeout(erase,1000);
        }
    }
    if (wordswitch==1)
    {
        if (counter<wordbank[1].length)
        {
            wordspace.innerHTML+=wordbank[1][counter];
            counter++;
            if (counter%3==0)
             {
                 cursor.innerHTML="";
             }
             else
             {
                 cursor.innerHTML=" |";
             }
            setTimeout(write,200);
        }
        else if (counter==wordbank[1].length)
        {
            setTimeout(erase,1000);
        }
    }
    
    
}

function erase()
{   if (wordswitch==0)
    {
          if (counter>0)
     {
           counter--;
            wordspace.innerHTML=wordbank[0].substr(0,counter);
            setTimeout(erase,100);
        }
        else if (counter==0)
        {
            wordswitch=1;
            write();
        }
    }
    else if (wordswitch==1)
    {
        if (counter>0)
        {
            counter--;
            wordspace.innerHTML=wordbank[1].substr(0,counter);
            setTimeout(erase,100);
        }
        else if (counter==0)
        {
            wordswitch=0;
            write();
        }
    }
    
}

setTimeout(write,1000);