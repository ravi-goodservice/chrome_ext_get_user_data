// send the page title as a chrome message


      //expand all information of user linkdin page

      try{
          var see_more = document.getElementsByClassName("pv-profile-section__see-more-inline")
          j=see_more.length
          i=0
          while(i<j){
            if(!(see_more[i].tagName == 'A')){
            see_more[i].click();
          }
            j = document.getElementsByClassName("pv-profile-section__see-more-inline").length
          }
      }
      catch(err){
        console.log(err.message)
      }

      var skills_array = new Array();    //array to store skills 
      var educations = new Array();     // array to store education
      var experiene_aray = new Array();  // array to store experience
      var name = document.getElementsByClassName("pv-top-card-section__name")[0].innerHTML  // storing name 

      var image_url = document.getElementsByClassName('presence-entity__image')[0].style.backgroundImage
      var image = image_url.substring(4, image_url.length-1)   // storing image url
      try{
        var summary =document.getElementsByClassName('pv-top-card-section__summary-text')[0].innerText // storing summary 
      }
      catch(err){
      	console.log(err.message)
      	summary = ''
      }

      // looping skills to store skills in skills array variable
      try{
        var skills=document.getElementById("featured-skills-expanded").getElementsByTagName("ul")[0].getElementsByTagName("li")
      
      for(i=0;i<skills.length;i++){
        skills_array.push(skills[i].innerText)
      }
      // storing extra skills in skills_array
      var extra_skill=document.getElementsByClassName("pv-featured-skills-list")[0].getElementsByClassName("pv-skill-entity__skill-name")
      for(i=0;i<extra_skill.length;i++){
          skills_array.push(extra_skill[i].innerText)
        }
      }catch(err){
    	   console.log(err.message)
    	   skills_array = ''
    }
    // storing education in education variable

      var educt = document.getElementsByClassName("education-section")[0].getElementsByTagName("li")
      for(i=0;i<educt.length;i++){   
        temp_array = new Array();
        try{
        	college_name = educt[i].getElementsByTagName("h3")[0].innerText
        }
        catch(err){
        	console.log(err.message)
          college_name =''
        }
        try{
        ending_year = educt[i].getElementsByTagName("time")[1].innerText
        }
        catch(err){
          console.log(err.message)
          ending_year =''
        }
        try{
        	degree_type =educt[i].getElementsByClassName("pv-entity__degree-name")[0].getElementsByClassName('pv-entity__comma-item')[0].innerHTML
        }
        catch(err){
        	console.log(err.message)
        	degree_type = ''
        }
         try{
        	specialisation = educt[i].getElementsByClassName("pv-entity__secondary-title")[1].getElementsByClassName('pv-entity__comma-item')[0].innerHTML
        }
        catch(err){
        	console.log(err.message)
        	specialisation = ''
        }
         try{
        	specialisation = educt[i].getElementsByClassName("pv-entity__secondary-title")[1].getElementsByClassName('pv-entity__comma-item')[0].innerHTML
        }
        catch(err){
        	console.log(err.message)
        	specialisation = ''
        }
        temp_array.push(college_name,ending_year,degree_type,specialisation)
        educations.push(temp_array)
      }


      var exp_details = document.getElementsByClassName("experience-section")[0].getElementsByTagName("li")
      for(i=0;i<exp_details.length;i++){
        temp_array = new Array();
        var current =0 
        try{
        var company = exp_details[i].getElementsByClassName("pv-entity__secondary-title")[0].innerHTML
        }catch(err){
        	console.log(err.message)
        	company = ''
        }
        try{
        var start_end = exp_details[i].getElementsByClassName("pv-entity__date-range")[0].getElementsByTagName("span")[1].innerHTML
        }catch(err){
        	console.log(err.message)
        	start_end =''
        }
        if(start_end){
        	var is_current =start_end.search("Present");
        	if(is_current!=-1){current = 1 }else{current = 0}
    	}
    	try{
        	var designation = exp_details[i].getElementsByTagName("h3")[0].innerHTML
        }catch(err){
        	console.log(err.message)
        	designation = ''
        }
        try{
        var work_description = exp_details[i].getElementsByClassName("pv-entity__description")[0].innerHTML
        }catch(err){
        	console.log(err.message)
        	work_description =''
        }
        temp_array.push(company,start_end,current,designation,work_description)
       experiene_aray.push(temp_array)
      }

      //getting email
      try{
      var email =document.getElementsByClassName("ci-email")[0].getElementsByTagName("a")[0].innerText 
  	}
  	catch(err){
  		console.log(err.message)
  		email = ''
  	}
      // dictionary to send data to the popup.js
      var dict = {};
      dict.experiene_aray=experiene_aray
      dict.educations=educations
      dict.image =image
      dict.summary = summary
      dict.skills_array =skills_array
      dict.name = name
      dict.email = email

      // sendMessage function to send data to the pop up js 
	chrome.runtime.sendMessage(dict);