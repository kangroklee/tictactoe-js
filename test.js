const Test = (function() {
    const boxes = document.querySelectorAll('.test');

    boxes.forEach(element => {
        element.addEventListener('click', testFunc);
    });

    function testFunc() { //if testFunc was an arrow func, wouldn't work
        console.log(".this is", this);
        this.textContent = "Event Listener Active";
         //일단 된다!!
        this.removeEventListener('click', testFunc);
    }
})();