class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter the Number....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question=createElement("h4");
    this.option1=createElement("h4");
    this.option2=createElement("h4");
    this.option3=createElement("h4");
    this.option4=createElement("h4");



    this.message = createElement("h3");
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    this.Question.position(100,100);
    this.option1.position(100,160);
    this.option2.position(100,170);
    this.option3.position(100,180);
    this.option4.position(100,190);
    this.Question.html("What is the date?");
    this.option1.html("Hot and Cold");
    this.option2.html("November 19");
    this.option3.html("October 0");
    this.option4.html("Keyboard");
    

    //Create html() and position() for each question, input and answers.




    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.message.html("Your answer has been submitted");
    })


  }
}
