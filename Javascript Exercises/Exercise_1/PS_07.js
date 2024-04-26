//Write a program that takes a number and prints the multiplication table for that number.

function printMultiplicationTable(num)
{
    for(let i=1 ; i<=10 ; i++)
    {
        console.log(`${num}*${i} = ${num*i}`);
    }
}

printMultiplicationTable(8);