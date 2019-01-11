for ( i = 0; i < 10; i++)
{
    if( i === 5 || i === 3)
    {
        console.log("misterious number :D");
        continue;
    }

    console.log(i + " ");
    
    if( i === 7 )
    {
        break;
    }
}

console.log("loop broken at " + i);