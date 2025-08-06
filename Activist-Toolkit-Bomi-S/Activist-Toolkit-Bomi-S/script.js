// List of facts
var factList = [
  "About 6 to 10% of female inmates in US correctional facilities are pregnant and many lack access to the necessary prenatal care, screenings, and social support required for a safe, healthy, and comfortable pregnancy and delivery (American College of Obstetricians and Gynecologists, 2011).",
  "Currently, the most basic health needs and human rights of women prisoners are not being met. This violation of rights, coupled with inhumane prison conditions, makes an already vulnerable population even more at risk for poor health outcomes.",
  "Women are at an extreme risk of experiencing trauma while involved in the justice system, particularly while incarcerated. Jails are not equipped to meet the needs of trauma survivors.  For women struggling with mental health disorders and trauma, any specialized treatment can be especially scarce, leaving many issues unaddressed, which can exacerbate the destabilization a jail stay often causes.",
  "Compared with men, women experience higher rates of chronic medical and psychiatric conditions and higher mortality rates in jails, increasingly by suicide.",
  "Many women lack sufficient menstrual products during incarceration and report needing to barter for these basic supplies."];

var i = 0;

// Wait for the DOM to load before accessing elements
// Making sure the button works
document.addEventListener("DOMContentLoaded", function() {
  var fact = document.getElementById("fact");
  var factButton = document.getElementById("myButton");

  if (factButton) {
    factButton.addEventListener("click", showFact);
  }

  function showFact() {
    fact.innerHTML = factList[i];
    i++;
    if (i == factList.length) {
      i = 0;
    }
  }
});

// Making sure the button works
document.addEventListener("DOMContentLoaded", function() {
  var message2 = document.getElementById("message");
  var textButton2 = document.getElementById("textButton");

  if (textButton2) {
    textButton2.addEventListener("click", showText);
  }
  function showText(){
    var name2 = document.getElementById("myName").value;
    var issue2 = document.getElementById("myIssue").value;
    var recipient2 = document.getElementById("myRecipient").value;
    // Message script
    message2.innerHTML = "Hello, \n My name is " + name2 + " and I hope this message finds you well. I am writing to express my deep concern about the current state of healthcare for incarcerated women and to urge " + recipient2 + " to take meaningful steps toward improving the conditions and access to " + issue2 + " within correctional facilities. \n Women in incarceration face unique health challenges, including reproductive care, mental health support, and treatment for substance use disorders. Unfortunately, many facilities lack adequate medical resources, resulting in delayed or insufficient care that can have long-term consequences on their well-being and dignity. \n Ensuring that incarcerated women receive proper and timely healthcare is not only a matter of public health, but also of basic human rights. I respectfully ask you to review current policies and practices and consider increased funding, oversight, and training to address these pressing issues. \n Your leadership can make a real difference in the lives of some of the most vulnerable members of our society. Thank you for your attention to this matter, and I hope you will take meaningful action to protect and improve the health of incarcerated women. \n Sincerely, " + name2;
  }
});