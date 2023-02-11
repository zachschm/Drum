// JS is extremely similar to c++, in my opinion which allows for me to adapt very quickly.
// function definition syntax, just like c++ besides the return type is replaced by simply stating function
function check_sound(event)
{
    let a;

    // switch statements are also the same as within c++
    switch (event)
    {
        case 'w':
            a = new Audio("sounds/tom-1.mp3");
            a.play();
            break;

        case 'a':
            a = new Audio("sounds/crash.mp3");
            a.play();
            break;

        case 's':
            a = new Audio("sounds/tom-4.mp3");
            a.play();
            break;

        case 'd':
            a = new Audio("sounds/kick-bass.mp3");
            a.play();
            break;

        case 'j':
            a = new Audio("sounds/tom-3.mp3");
            a.play();
            break;

        case 'k':
            a = new Audio("sounds/snare.mp3");
            a.play();
            break;

        case 'l':
            a = new Audio("sounds/tom-2.mp3");
            a.play();
            break;

    }
}

function button_animation(key)
{
    // Our querySelector in this case searches the document for the specific class desired
    // This is why . and the key are added together to target the specific class.
    let btn = document.querySelector("." + key);
    // classList can access the list of classes directly which is super valuable
    // the .add() function will add any additional class directly into our specified query
    btn.classList.add("pressed");

    // This is the timeout built-in function for JS to create a specified delay before
    // performing the specified function.
    // It takes two arguments, in this case we add our own function to be called, and the
    // amount of time to be delayed before calling that function
    setTimeout(function ()
    {
        btn.classList.remove("pressed");
    }, 100);
}

// In this for loop, we use the .length built-in function to be able to obtain the size of
// our "array" of how many items will be selected. This length can first be assessed outside
// the for loop and assigned to a variable to clean up the for loop.
// we then have to perform another query selectorALL function within the for loop which is
// a bit repetitive and annoying but at least for now, it has to be done.
for (let i = 0; i < (document.querySelectorAll(".drum")).length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        let btn = this.innerHTML;
        // function calls are also self-explanatory and simple
        check_sound(btn);
        button_animation(btn);
    });
}

// Higher order functions allow functions to be passed as arguments, which seems like a key part of JS
// as there are many built-in functions which require additional functionality to build upon
// keydown is the proper listener type to be able to track the pressing of keys
// events are passed as an object with lots of data connected with them
// in this case we want to access the key associated with the event so we use event.key
// to pull that data from the event object.
document.addEventListener("keydown", function (event)
{
    check_sound(event.key);
    button_animation(event.key);
});
