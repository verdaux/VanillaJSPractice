function fizzBuzz(inputNum)
{
    if(typeof(inputNum) !== 'number')
    {
        return NaN;
    }
    else if((inputNum % 3 === 0) && (inputNum % 5 === 0))
    {
        return 'FizzBuzz';
    }
    else if(inputNum % 3 === 0)
    {
        return 'fizz';
    }
    else if(inputNum % 5 === 0)
    {
        return 'buzz';
    }
    else
    {
        return 'No fizz or buzz';
    }
}

console.log(fizzBuzz(15));