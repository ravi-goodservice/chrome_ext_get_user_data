// Inject the payload.js script into the current tab after the popout has loaded
// Now we can access it through typed array wo/ canvas



window.addEventListener('load', function (evt) {
  chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
    chrome.tabs.executeScript(null, { file: "content_script.js" });
  });
  // chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
  //   file: 'content_script.js'
  // });;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
  alert(message.name)
  alert(message.skills_array)
  alert(message.summary)
  alert(message.image)
  alert(message.educations)
  alert(message.experiene_aray)
  alert(message.email)
  document.getElementById('name').innerHTML = message.name;
});




// document.addEventListener('DOMContentLoaded', function() {
//   var checkPageButton = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {

//     chrome.tabs.getSelected(null, function(tab) {

    

               





//     });
//   }, false);
// }, false);