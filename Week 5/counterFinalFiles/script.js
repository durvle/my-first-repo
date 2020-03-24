




// Interval, DeviceInfo
// if count is equal to the goal, show the alert

$(document).ready(( )=>{
    console.log('it works!')
// create count variable
// create goal variable
    let counter = 0;
    let goal;
    // show count next to the `Count:`
// when user clicks + , add 1 to the count
    $('#add').on('click', () => {
        counter = counter + 1;
        $('.counter').text(counter);
        checkGoal();
    })
    
    // when the user clicks - , subtract 1 from the count
    $('#subtract').on('click', ()=>{
        counter = counter - 1;
        $('.counter').text(counter);
        checkGoal();
    });
    
    
    // when the user clicks set
    $('form').on('submit', (event)=>{
        event.preventDefault();
        // save the value of the Input
        // $('input[type=text]')
        goal = parseInt($('#goal').val());
        $('#goal').val('');
    });
    const checkGoal = () =>{
        // if count is equal to the goal, show the alert
        if(counter === goal) {
        // when we hit the goal, show alert
        alert(`You hit your goal of ${goal}!`);
        }
    }
})