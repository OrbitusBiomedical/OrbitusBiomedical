(function() {
 
	// Get some required handles
	//var video = document.getElementById('v');
	var recStatus = document.getElementById('recStatus');
	//var startRecBtn = document.getElementById('startRecBtn');
	//var stopRecBtn = document.getElementById('stopRecBtn');

 
	// Define a new speech recognition instance
	var speechRecognizer = null;

    try {
    	console.log('Obtaining Recognizer');
		speechRecognizer = new webkitSpeechRecognition();
		console.log('Success');		
	} 
	catch(e) {
    	document.querySelector('.msg').setAttribute('data-state', 'show');
    	startRecBtn.setAttribute('disabled', 'true');
    	stopRecBtn.setAttribute('disabled', 'true');
    }
 
 
    if (speechRecognizer) {
		speechRecognizer.continuous = true;
		speechRecognizer.interimResults = false;
		speechRecognizer.lang = 'en';

 
		// Define a threshold above which we are confident(!) that the recognition results are worth looking at 
		var confidenceThreshold = 0.5;

 
		// Simple function that checks existence of s in str
		var userSaid = function(str, s)
        {
			return str.indexOf(s) > -1;
		}

 /*
		// Highlights the relevant command that was recognised in the command list for display purposes
		var highlightCommand = function(cmd)
        {
			var releventCommand = document.getElementById(cmd);
			releventCommand.setAttribute('data-state', 'highlight');
			setTimeout(function() {
				releventCommand.setAttribute('data-state', '');
			}, 3000);
		}

 */
		// Process the results when they are returned from the recogniser
		speechRecognizer.onresult = function(userResponse)
        {
   			console.log('OnResult');

			// Check each result starting from the last one
			for (var i = userResponse.resultIndex; i < userResponse.results.length; ++i)
            {
				// If this is a final result
	       		if (userResponse.results[i].isFinal)
                {
	       			// If the result is equal to or greater than the required threshold
	       			if (parseFloat(userResponse.results[i][0].confidence) >= parseFloat(confidenceThreshold))
                    {
		       			var str = userResponse.results[i][0].transcript;
		       			console.log('Recognised: ' + str);
 
 						console.log('Showme ' + str);
 						var path = "models/molecules/" + str.trim() + ".pdb";
                        loadMolecule( path );
		       			/*
	       				if (userSaid(str, 'ethanol'))                    
                        {
                        	console.log('Showme Ethanol');
                        	loadMolecule( "models/molecules/ethanol.pdb" );
	       					//video.currentTime = 0;
	       					//video.play();
	       					//highlightCommand('vidReplay');
	       				}
	       				else if (userSaid(str, 'aspirin'))                
                        {
                        	console.log('Showme Aspirin');
							loadMolecule( "models/molecules/aspirin.pdb" );                        	
	       					//video.play();
	       					//highlightCommand('vidPlay');
	       				}
	       				// Stop the video
	       				else if (userSaid(str, 'caffeine'))                 //Stop
                        {
                        	console.log('Showme Caffeine');
							loadMolecule( "models/molecules/caffeine.pdb" );                        	                        	
	       					//video.pause();
	       					//highlightCommand('vidStop');
	       				}*/
	       			}
	        	}
	    	}
		};

		//speechRecognizer.start();
		//recStatus.innerHTML = 'recognising';
		console.log('Start recognition');
		speechRecognizer.start();
		//recStatus.innerHTML = 'recognising';
		/*
		// Start speech recognition
		var startRec = function()
        {
        	console.log('Start recognition');
			speechRecognizer.start();
			recStatus.innerHTML = 'recognising';
		}
		// Stop speech recognition
		var stopRec = function()
        {
			console.log('Stop recognition');        	
			speechRecognizer.stop();
			recStatus.innerHTML = 'not recognising';
		}

        // Setup listeners for the start and stop recognition buttons
		startRecBtn.addEventListener('click', startRec, false);
		stopRecBtn.addEventListener('click', stopRec, false);
		*/ 
 
	}
})();