  
    /* create timeline */
    var timeline = [];

    var repo_site = "https://mcd710.github.io/blocks/BlocksExperimentFINAL/"

    // /* preload images */
    // var preload = {
    //   type: jsPsychPreload,
    //   images: [repo_site + 'images/easy-411-ss.png', repo_site + 'images/easy-538-sf.png', repo_site + 'images/easy-590-ss.png', repo_site + 'images/easy-vcom=1-87-fs.png', repo_site + 'images/easy-vcom=2-20-ff.png', repo_site + 'images/easy-vcom=2-94-fs.png', repo_site + 'images/easy-vcom=3-38-ff.png', repo_site + 'images/easy-vcom=3-142-fs.png',
    //   repo_site + 'images/easy-vcom=4-19-ff.png', repo_site + 'images/easy-vcom=4-126-fs.png', repo_site + 'images/hard-2-sf.png', repo_site + 'images/hard-40-ss.png', repo_site + 'images/hard-49-sf.png', repo_site + 'images/hard-82-ss.png', repo_site + 'images/hard-177-sf.png', repo_site + 'images/hard-214-ss.png', repo_site + 'images/hard-316-sf.png',
    //   repo_site + 'images/hard-321-ss.png', repo_site + 'images/hard-334-sf.png', repo_site + 'images/hard-345-ss.png', repo_site + 'images/hard-367-sf.png', repo_site + 'images/hard-402-ss.png', repo_site + 'images/hard-492-sf.png', repo_site + 'images/hard-549-ss.png', repo_site + 'images/hard-570-sf.png', repo_site + 'images/hard-600-ss.png',
    //   repo_site + 'images/hard-vcom=1-50-ff.png', repo_site + 'images/hard-vcom=1-95-fs.png', repo_site + 'images/hard-vcom=1-95-ff.png', repo_site + 'images/hard-vcom=1-130-fs.png', repo_site + 'images/hard-vcom=2-16-ff.png', repo_site + 'images/hard-vcom=2-20-fs.png', repo_site + 'images/hard-vcom=2-110-ff.png', repo_site + 'images/hard-vcom=3-7-fs.png', repo_site + 'images/hard-vcom=3-82-ff.png',
    //   repo_site + 'images/hard-vcom=3-110-fs.png', repo_site + 'images/hard-vcom=4-80-ff.png', repo_site + 'images/hard-vcom=4-92-fs.png', repo_site + 'images/hard-vcom=4-142-ff.png']
    // };
    // timeline.push(preload);
    
    



    
    // PHASE 1: WILL IT FALL? //
    /* define welcome message trial */
    var welcome = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
      <p>Welcome to the experiment! Thank you for accepting this task.</p>
      <p>The experiment will take you less than 30 minutes. We ask that you complete the experiment in one sitting.</p>
      <p>You will be paid <strong>2 dollars</strong> for your time, and a bonus of <strong>up to 4 dollars</strong> based on your performance in the task.</p>
      <p style="font-size:18px;color:red;">Press the space bar to continue.</p>
      `,
      choices: " ",
      post_trial_gap: 500
    };
    timeline.push(welcome);
    
    /* define instructions trial */
    var instructions_a = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>In this experiment, we are interested in physical intuitions about images.</p> 
        <p>Throughout the experiment, you will see stable and unstable images of block towers.</p>
        <p>You will be asked to determine whether the tower in the image will 
            <strong>fall</strong> or <strong>stand</strong> under the influence of gravity.</p>  
        <p style="font-size:18px;color:red;">Press the space bar to continue.</p>
        `,
      choices: " ",
      post_trial_gap: 500
    };
    timeline.push(instructions_a);

    /* define test trials */
    var instructions_c = {
        type: jsPsychImageButtonResponse2,
        stimulus: repo_site + 'images/easy-538-sf.png',
        header:  `
        <p>Your task is to decide whether the stack of blocks will fall or stand for each image.</p>
        <p>You will recieve a <strong>bonus of 5 cents</strong> for each correct classification. Try to be as accurate as possible to earn the maximum amount of money.</p>
        <p><strong>Try with this example for practice:</strong></p>
        <p>       </p>
        `,
        prompt: `
        <p>If you think that the tower in this image will <strong>fall</strong>,
        select the <strong>"fall"</strong> option by clicking the <strong>left arrow (◄)</strong> button on your keyboard.</p>
        <p>If you think that the tower in the image will <strong>stand</strong>,
        select the <strong>"stand"</strong> option by clicking the <strong>right arrow (►)</strong> button on your keyboard.</p>
        `,
        choices: ['fall ◄', 'stand ►'],
        post_trial_gap: 500
    };
    timeline.push(instructions_c);

    /* attention check 1 */
    var attention1 = {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
              prompt: "How much money will you earn for each correct classification?",
              options: ['1 cents', '3 cents', '5 cents', '7 cents'],
              required: true,
            }
        ],
        preamble: 'ATTENTION CHECK',
        post_trial_gap: 500,
    };

    /* attention check for incorrect answer */ 
    var attention1_conditional = {
      type: jsPsychSurveyMultiChoice,
      questions: [
        {
          prompt: "How much money will you earn for each correct classification?",
          options: ['1 cents', '3 cents', '5 cents', '7 cents'],
          required: true,
        }
      ],
      preamble: 'INCORRECT! PLEASE TRY AGAIN.',
      post_trial_gap: 500,
    };

    /* instructions trial */
    var instructions_d = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>You are ready to start!</p>
        <p>There are a total of 120 images, and there will be a break with additional instructions after 40 images.</p> 
        <p>You will have <strong>five seconds</strong> to make a choice for each image, so go as quickly as you can. Good luck!</p>
        <p style="font-size:18px;color:red;">Press the space bar to begin.</p>
      `,
      choices: " ",
      post_trial_gap: 500
    };

    /* conditional function */
    var if_attention_fails = {
        timeline: [attention1_conditional],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether response was incorrect
            // NOT GETTING AT DATA... FIGURE OUT HOW TO DO THIS
            var Q0 = jsPsych.data.get().last(1).values()[0].response.Q0;
            return Q0 == '1 cents' || Q0 == '3 cents' || Q0 == '7 cents';
        }
    };

    /* test procedure */
    var test_procedure_attention = {
        timeline: [attention1, if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails,
            if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails,
            if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails,
            if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails,
            if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails,
            if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails, if_attention_fails, instructions_d],
    };
    timeline.push(test_procedure_attention);

    /* define trial stimuli array for timeline variables */
    var test_stimuli = [
        {stimulus: repo_site + 'images/easy-411-ss.png'},
        {stimulus: repo_site + 'images/easy-538-sf.png'},
        {stimulus: repo_site + 'images/easy-590-ss.png'},
        {stimulus: repo_site + 'images/easy-vcom=1-87-fs.png'},
        {stimulus: repo_site + 'images/easy-vcom=2-20-ff.png'},
        {stimulus: repo_site + 'images/easy-vcom=2-94-fs.png'},
        {stimulus: repo_site + 'images/easy-vcom=3-38-ff.png'},
        {stimulus: repo_site + 'images/easy-vcom=3-142-fs.png'},
        {stimulus: repo_site + 'images/easy-vcom=4-19-ff.png'},
        {stimulus: repo_site + 'images/easy-vcom=4-126-fs.png'},
        {stimulus: repo_site + 'images/hard-2-sf.png'},
        {stimulus: repo_site + 'images/hard-40-ss.png'},
        {stimulus: repo_site + 'images/hard-49-sf.png'},
        {stimulus: repo_site + 'images/hard-82-ss.png'},
        {stimulus: repo_site + 'images/hard-177-sf.png'},
        {stimulus: repo_site + 'images/hard-214-ss.png'},
        {stimulus: repo_site + 'images/hard-316-sf.png'},
        {stimulus: repo_site + 'images/hard-321-ss.png'},
        {stimulus: repo_site + 'images/hard-334-sf.png'},
        {stimulus: repo_site + 'images/hard-345-ss.png'},
        {stimulus: repo_site + 'images/hard-367-sf.png'},
        {stimulus: repo_site + 'images/hard-402-ss.png'},
        {stimulus: repo_site + 'images/hard-492-sf.png'},
        {stimulus: repo_site + 'images/hard-549-ss.png'},
        {stimulus: repo_site + 'images/hard-570-sf.png'},
        {stimulus: repo_site + 'images/hard-600-ss.png'},
        {stimulus: repo_site + 'images/hard-vcom=1-50-ff.png'},
        {stimulus: repo_site + 'images/hard-vcom=1-95-fs.png'},
        {stimulus: repo_site + 'images/hard-vcom=1-95-ff.png'},
        {stimulus: repo_site + 'images/hard-vcom=1-130-fs.png'},
        {stimulus: repo_site + 'images/hard-vcom=2-16-ff.png'},
        {stimulus: repo_site + 'images/hard-vcom=2-20-fs.png'},
        {stimulus: repo_site + 'images/hard-vcom=2-110-ff.png'},
        {stimulus: repo_site + 'images/hard-vcom=3-7-fs.png'},
        {stimulus: repo_site + 'images/hard-vcom=3-82-ff.png'},
        {stimulus: repo_site + 'images/hard-vcom=3-110-fs.png'},
        {stimulus: repo_site + 'images/hard-vcom=4-80-ff.png'},
        {stimulus: repo_site + 'images/hard-vcom=4-92-fs.png'},
        {stimulus: repo_site + 'images/hard-vcom=4-142-ff.png'},

    ];


    /* define test trials */
    var test = {
        type: jsPsychImageButtonResponse,
        stimulus: jsPsych.timelineVariable('stimulus'),
        choices: ['fall ◄', 'stand ►'],
        randomize_order: true,
        trial_duration: 5000,
        post_trial_gap: 500
    };

    /* if time runs out, show this trial screen */
    var outoftime_conditional = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
       choices: " ",
       post_trial_gap: 500
    };

    /* conditional function */
    var if_node = {
        timeline: [outoftime_conditional],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var last_timed_data = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (last_timed_data) {
                return false;
            } else {
                return true;
            }
        }
    };

    /* test procedure */
    var test_procedure = {
        timeline: [test, if_node],
        timeline_variables: test_stimuli,
        randomize_order: true
    };
    timeline.push(test_procedure);





   
    // PHASE 2 - MOTIVATION - COOPERATION CONDITION //
    /* function to sample and splice pictures randomly */
    function getRandomWithoutReplacement(array){
        index = Math.floor(Math.random()*array.length);
        pic = array[index];
        array.splice(index, 1);
        return pic
    }

    /* welcome message trial */
    var welcome2 = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
      <p>You are done with the first part of the task!</p>
      <p style="font-size:18px;color:red;">Press the space bar to continue.</p>
      `,
      choices: " "
    };
    timeline.push(welcome2)

    /* define second instructions trial */
    var instructions2_a = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>In the second part, you will be performing the same classification task.</p> 
        <p>However, you will also be working with another participant to earn money.</p>
        <p>Before you see each image, your teammate makes a bet on whether each stack will "stand" or "fall".</p>
        <p>Each time, your teammate makes a bet of <strong>15 cents</strong>.</p>
        <p style="font-size:18px;color:red;">Press the space bar to continue.</p>
      `,
      choices: " ",
    };
    timeline.push(instructions2_a);

    var instructions2_b = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>If your teammate's bet is correct, you BOTH WIN <strong>15 cents</strong>.</p> 
        <p>If your teammate's bet is wrong, you BOTH LOSE <strong>15 cents</strong>.</p>
        <p>After they place their bet, the image will be shown and you will make your classification.</p>
        <p>As before, you will receive a bonus of <strong>5 cents</strong> for each correct classification.</p>
        <p>In other words, if your teammate makes a correct bet and you make a correct classification, you will earn 15 + 5 = <strong>20 CENTS</strong> for that image.</p>
        <p style="font-size:18px;color:red;">Press the space bar to continue.</p>
      `,
      choices: " "
    };
    timeline.push(instructions2_b);

    // attention check 2 //
    var attention2 = {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
                prompt: "How much money will you <strong>win</strong> if your partner makes a correct bet?",
                options: ['7 cents', '10 cents', '15 cents', '20 cents'],
                required: true,
            },
            {
                prompt: "How much money will you <strong>lose</strong> if your partner makes a wrong bet?",
                options: ['7 cents', '10 cents', '15 cents', '20 cents'],
                required: true,
            },
            {
                prompt: "How much money will you <strong>win</strong> if you classify correctly <em>and</em> your partner makes a correct bet?",
                options: ['10 cents', '12 cents', '15 cents', '20 cents'],
                required: true,
            }
        ],
        preamble: 'ATTENTION CHECK',
        post_trial_gap: 500
    };


    // conditional attention check 2 //
    var attention2_conditional = {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
                prompt: "How much money will you <strong>win</strong> if your partner makes a correct bet?",
                options: ['7 cents', '10 cents', '15 cents', '20 cents'],
                required: true,
            },
            {
                prompt: "How much money will you <strong>lose</strong> if your partner makes a wrong bet?",
                options: ['7 cents', '10 cents', '15 cents', '20 cents'],
                required: true,
            },
            {
                prompt: "How much money will you <strong>win</strong> if you classify correctly <em>and</em> your partner makes a correct bet?",
                options: ['10 cents', '12 cents', '15 cents', '20 cents'],
                required: true,
            }
        ],
        preamble: 'ONE OF YOUR ANSWERS WAS INCORRECT!',
        post_trial_gap: 500
    };

    /* Conditional function */
    var if_attention_fails_2 = {
        timeline: [attention2_conditional],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether response was incorrect
            // NOT GETTING AT DATA... FIGURE OUT HOW TO DO THIS
            var Q0 = jsPsych.data.get().last(1).values()[0].response.Q0;
            var Q1 = jsPsych.data.get().last(1).values()[0].response.Q1;
            var Q2 = jsPsych.data.get().last(1).values()[0].response.Q2;
            return Q0 == '7 cents' || Q0 == '10 cents' || Q0 == '20 cents' || Q1 == '7 cents' || Q1 == '10 cents' || Q1 == '20 cents' || Q2 == '10 cents' || Q2 == '12 cents' || Q2 == '15 cents'
            ;
        }
    };

    /* define test run instructions */
    var practicetrial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>When you are ready, here is a practice trial.</p> 
        <p style="font-size:18px;color:red;">Press the space bar to begin.</p>
      `,
      choices: " ",
      post_trial_gap: 500
    };

    /* test procedure */
    var test_procedure_attention2 = {
        timeline: [attention2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2,
            if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2,
            if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2,
            if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2,
            if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2,
            if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, if_attention_fails_2, practicetrial],
    };
    timeline.push(test_procedure_attention2);

    /* waiting for teammate */
    var waiting_testrun_ff = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for teammate...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define bet statement for test run - fall/fall */
    var waitingforbet_testrun_ff = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    }; 
    
    /* define teammate bet image for test run - fall/fall */
    var bet_testrun_ff = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>FALL</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000
    }; 

    /* define trial stimuli array for timeline variables */
    var test_stimuli_testrun_ff = [
        // RANDOM STACK
        repo_site + 'images/easy-538-sf.png'
    ];

    /* define test trials */
    var participant_bet_testrun_ff = {
        type: jsPsychImageButtonResponse,
        stimulus: getRandomWithoutReplacement(test_stimuli_testrun_ff),
        choices: ['fall ◄', 'stand ►'],
        trial_duration: 5000
    };


    // IF TIME RUNS OUT, SHOW THIS TRIAL SCREEN //
    var outoftime_conditional_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };


    /* define test procedure */
    var if_node_2 = {
        timeline: [outoftime_conditional_2],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var last_timed_data_2 = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (last_timed_data_2) {
                return false;
            } else {
                return true;
            }
        }
    };

    /* define instructions trial for REAL TEST PROCEDURE */
    var instructions3 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>You are ready to start!</p> 
        <p>Remember, you will have <strong>five seconds</strong> to make a choice for each image, so go as quickly as you can.</p>
        <p style="font-size:18px;color:red;">Ready? Press the space bar to begin the second part.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };

    /* define test procedure */
    var test_procedure_testrun_ff = {
        timeline: [waiting_testrun_ff, waitingforbet_testrun_ff, bet_testrun_ff, participant_bet_testrun_ff, if_node_2, instructions3],
        randomize_order: false,
        post_trial_gap: 500
    };
    timeline.push(test_procedure_testrun_ff)




    /* REAL TEST PROCEDURE FOR FALL/FALL (test_procedure_ff)
    /* define waiting for teammate... trial - FALL/FALL */
    var waiting_ff = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for teammate...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define bet statement... trial - FALL/FALL */
    var waitingforbet_ff = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    };

    /* define teammate bet image for FALL/FALL */
    var bet_ff = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>FALL</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000
    }; 

    /* define trial stimuli array for timeline variables */
    let test_stimuli_ff = [
        // STACKS THAT FALL AND TEAMMATE PREDICTS FALL
        repo_site + 'images/easy-vcom=2-20-ff.png', repo_site + 'images/easy-vcom=4-19-ff.png', repo_site + 'images/easy-vcom=3-38-ff.png', repo_site + 'images/hard-vcom=3-82-ff.png', repo_site + 'images/hard-vcom=2-110-ff.png', 
        repo_site + 'images/hard-vcom=2-16-ff.png', repo_site + 'images/hard-vcom=1-95-ff.png', repo_site + 'images/hard-vcom=4-80-ff.png', repo_site + 'images/hard-vcom=1-50-ff.png', repo_site + 'images/hard-vcom=4-142-ff.png'
    ];

    /* define test trials */
    function participant_bet_ff(){
        return {
            type: jsPsychImageButtonResponse,
            stimulus: getRandomWithoutReplacement(test_stimuli_ff),
            choices: ['fall ◄', 'stand ►'],
            trial_duration: 5000
        };
    }

    // IF TIME RUNS OUT, SHOW THIS TRIAL SCREEN //
        var outoftime_conditional_3 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };


    /* define test procedure */
    var if_node_3 = {
        timeline: [outoftime_conditional_3],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var last_timed_data_3 = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (last_timed_data_3) {
                return false;
            } else {
                return true;
            }
        }
    };


    /* define waiting for teammate trial - FALL/STAND */
    var waiting_fs = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for teammate...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define test procedure */
    function test_procedure_ff(){
        return {
            timeline: [waitingforbet_ff, bet_ff, participant_bet_ff(), if_node_3, waiting_fs],
            randomize_order: false,
            post_trial_gap: 500
        };
    }
    






    /* TEST PROCEDURE FOR FALL/STAND (test_procedure_fs)
    /* define bet statement... trial - FALL/STAND */
    var waitingforbet_fs = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    };

    /* define teammate bet image for FALL/STAND */
    var bet_fs = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>STAND</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000,
    }; 

    /* define trial stimuli array for timeline variables */
    var test_stimuli_fs = [
        // STACKS THAT FALL AND TEAMMATE PREDICTS STAND
        repo_site + 'images/easy-vcom=1-87-fs.png', repo_site + 'images/easy-vcom=2-94-fs.png', repo_site + 'images/easy-vcom=3-142-fs.png', repo_site + 'images/easy-vcom=4-126-fs.png', repo_site + 'images/hard-vcom=1-95-fs.png',
        repo_site + 'images/hard-vcom=1-130-fs.png', repo_site + 'images/hard-vcom=2-20-fs.png', repo_site + 'images/hard-vcom=3-7-fs.png', repo_site + 'images/hard-vcom=3-110-fs.png', repo_site + 'images/hard-vcom=4-92-fs.png'
    ];

    /* define test trials */
    function participant_bet_fs(){
        return {
            type: jsPsychImageButtonResponse,
            stimulus: getRandomWithoutReplacement(test_stimuli_fs),
            choices: ['fall ◄', 'stand ►'],
            trial_duration: 5000
        };
    }

    /* if time runs out, show this trial screen */
        var outoftime_conditional_4 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };


    /* define test procedure */
    var if_node_4 = {
        timeline: [outoftime_conditional_4],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var last_timed_data_4 = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (last_timed_data_4) {
                return false;
            } else {
                return true;
            }
        }
    };

    /* define waiting for teammate trial - STAND/STAND */
    var waiting_ss = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for teammate...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define test procedure */
    function test_procedure_fs(){
        return {
            timeline: [waitingforbet_fs, bet_fs, participant_bet_fs(), if_node_4, waiting_ss],
            randomize_order: true,
            post_trial_gap: 500
        };
    }




    /* TEST PROCEDURE FOR STAND/STAND (test_procedure_ss)
    /* define bet statement... trial - STAND/STAND */
    var waitingforbet_ss = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    };

    /* define teammate bet image for STAND/STAND */
    var bet_ss = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>STAND</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000
    }; 

    /* define trial stimuli array for timeline variables */
    var test_stimuli_ss = [
        // STACKS THAT STAND AND TEAMMATE PREDICTS STAND
        repo_site + 'images/easy-411-ss.png', repo_site + 'images/easy-590-ss.png', repo_site + 'images/hard-40-ss.png', repo_site + 'images/hard-82-ss.png', repo_site + 'images/hard-214-ss.png', 
        repo_site + 'images/hard-321-ss.png', repo_site + 'images/hard-345-ss.png', repo_site + 'images/hard-402-ss.png', repo_site + 'images/hard-549-ss.png',  repo_site + 'images/hard-600-ss.png'
    ];

    /* define test trials */
    function participant_bet_ss(){
        return {
            type: jsPsychImageButtonResponse,
            stimulus: getRandomWithoutReplacement(test_stimuli_ss),
            choices: ['fall ◄', 'stand ►'],
            trial_duration: 5000
        };
    }

    // IF TIME RUNS OUT, SHOW THIS TRIAL SCREEN //
        var outoftime_conditional_5 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };


    /* define test procedure */
    var if_node_5 = {
        timeline: [outoftime_conditional_5],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var last_timed_data_5 = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (last_timed_data_5) {
                return false;
            } else {
                return true;
            }
        }
    };

    /* define waiting for teammate trial - STAND/FALL */
    var waiting_sf = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for teammate...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define test procedure */
    function test_procedure_ss(){
        return {
            timeline: [waitingforbet_ss, bet_ss, participant_bet_ss(), if_node_5, waiting_sf],
            randomize_order: false,
            post_trial_gap: 500
        };
    }





    /* TEST PROCEDURE FOR STAND/FALL (test_procedure_sf)
    /* define bet statement... trial - STAND/FALL */
    var waitingforbet_sf = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    };

    /* define teammate bet image for STAND/FALL */
    var bet_sf = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your teammate bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>STAND</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000
    }; 

    /* define trial stimuli array for timeline variables */
    var test_stimuli_sf = [
        // STACKS THAT STAND AND TEAMMATE PREDICTS FALL
        repo_site + 'images/easy-538-sf.png', repo_site + 'images/hard-2-sf.png', repo_site + 'images/hard-49-sf.png', repo_site + 'images/hard-177-sf.png', repo_site + 'images/hard-316-sf.png',
        repo_site + 'images/hard-334-sf.png', repo_site + 'images/hard-367-sf.png', repo_site + 'images/hard-492-sf.png', repo_site + 'images/hard-570-sf.png'
    ];

    /* define test trials */
    function participant_bet_sf(){
        return {
            type: jsPsychImageButtonResponse,
            stimulus: getRandomWithoutReplacement(test_stimuli_sf),
            choices: ['fall ◄', 'stand ►'],
            trial_duration: 5000
        }
    };

    // IF TIME RUNS OUT, SHOW THIS TRIAL SCREEN //
        var outoftime_conditional_6 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };

    /* define test procedure */
    var if_node_6 = {
        timeline: [outoftime_conditional_6],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var last_timed_data_6 = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (last_timed_data_6) {
                return false;
            } else {
                return true;
            }
        }
    };

    /* define test procedure */
    function test_procedure_sf(){
        return {
            timeline: [waitingforbet_sf, bet_sf, participant_bet_sf(), if_node_6],
            randomize_order: false,
            post_trial_gap: 500
        };
    }
    



    /* compiled test procedure with pictures */
    const timelinearray = [test_procedure_ff(), test_procedure_fs(), test_procedure_ss(), test_procedure_sf()];
    const shuffledArray = timelinearray.sort((a, b) => 0.5 - Math.random());
    /* define test procedure */
    function test_procedure_compiled(){
        return {
            timeline: shuffledArray
        };
    }
    for(let i = 0; i < test_stimuli_ff.length; i++) {
        timeline.push(test_procedure_compiled());
    }





    // PHASE 2 - MOTIVATION - COMPETITION CONDITION //
    /* welcome message trial */
    var welcome3 = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
      <p>You are done with the second part of the task!</p>
      <p style="font-size:18px;color:red;">Press the space bar to continue.</p>
      `,
      choices: " "
    };
    timeline.push(welcome3)

    /* define instructions trial */
    var instructions3_a = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>In the third part, you will be performing the same classification task.</p> 
        <p>However, you will also be <strong>competing</strong> against another participant to earn money.</p>
        <p>Before you see each image, your opponent makes a bet on whether each stack will "stand" or "fall".</p>
        <p>Each time, your opponent makes a bet of <strong>15 cents</strong>.</p>
        <p style="font-size:18px;color:red;">Press the space bar to continue.</p>
      `,
      choices: " ",
    };
    timeline.push(instructions3_a);

    var instructions3_b = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>If your opponent's bet is correct, you <strong>lose 15 cents</strong> while they <strong>win 15 cents</strong>.</p> 
        <p>If your opponent's bet is wrong, you <strong>win 15 cents</strong> while they <strong>lose 15 cents</strong>.</p>
        <p>After they place their bet, the image will be shown and you will make your classification.</p>
        <p>As before, you will receive a bonus of <strong>5 cents</strong> for each correct classification.</p>
        <p>In other words, if your opponent loses their bet and you make a correct classification, you will earn 15 + 5 = <strong>20 CENTS</strong> for that image.</p>
        <p style="font-size:18px;color:red;">Press the space bar to continue.</p>
      `,
      choices: " "
    };
    timeline.push(instructions3_b);

    // attention check 3 //
    var attention3 = {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
                prompt: "How much money will you <strong>lose</strong> if your opponent makes a correct bet?",
                options: ['7 cents', '10 cents', '15 cents', '20 cents'],
                required: true,
            },
            {
                prompt: "How much money will you <strong>win</strong> if your opponent makes a wrong bet?",
                options: ['7 cents', '10 cents', '15 cents', '20 cents'],
                required: true,
            },
            {
                prompt: "How much money will you <strong>win</strong> if you classify correctly <em>and</em> your opponent makes a correct bet?",
                options: ['10 cents', '12 cents', '15 cents', '20 cents'],
                required: true,
            }
        ],
        preamble: 'ATTENTION CHECK',
        post_trial_gap: 500
    };


    // conditional attention check 3 //
    var attention3_conditional = {
        type: jsPsychSurveyMultiChoice,
        questions: [
            {
                prompt: "How much money will you <strong>lose</strong> if your opponent makes a correct bet?",
                options: ['7 cents', '10 cents', '15 cents', '20 cents'],
                required: true,
            },
            {
                prompt: "How much money will you <strong>win</strong> if your opponent makes a wrong bet?",
                options: ['7 cents', '10 cents', '15 cents', '20 cents'],
                required: true,
            },
            {
                prompt: "How much money will you <strong>win</strong> if you classify correctly <em>and</em> your opponent makes a correct bet?",
                options: ['10 cents', '12 cents', '15 cents', '20 cents'],
                required: true,
            }
        ],
        preamble: 'ONE OF YOUR ANSWERS WAS INCORRECT!',
        post_trial_gap: 500
    };

    /* conditional function */
    var if_attention_fails_3 = {
        timeline: [attention3_conditional],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether response was incorrect
            // NOT GETTING AT DATA... FIGURE OUT HOW TO DO THIS
            var Q0_a = jsPsych.data.get().last(1).values()[0].response.Q0;
            var Q1_a = jsPsych.data.get().last(1).values()[0].response.Q1;
            var Q2_a = jsPsych.data.get().last(1).values()[0].response.Q2;
            return Q0_a == '7 cents' || Q0_a == '10 cents' || Q0_a == '20 cents' || Q1_a == '7 cents' || Q1_a == '10 cents' || Q1_a == '20 cents' || Q2_a == '10 cents' || Q2_a == '12 cents' || Q2_a == '15 cents'
            ;
        }
    };

    /* define test run instructions */
    var instructions_lasttrial = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>The betting will work in the same way as before, where you will have</p>
        <p><strong>five seconds</strong> to choose either <strong>fall</strong> or <strong>stand</strong> after your opponent makes their bet.</p> 
        <p>Warning: there is no practice trial this time.</p>
        <p style="font-size:18px;color:red;">When you are ready to start the third part, press the space bar to begin. Good luck!</p>
      `,
      choices: " ",
      post_trial_gap: 500
    };

    /* test procedure */
    var test_procedure_attention3 = {
        timeline: [attention3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3,
            if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3,
            if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3,
            if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3,
            if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3,
            if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, if_attention_fails_3, instructions_lasttrial],
    };
    timeline.push(test_procedure_attention3);



    /* REAL TEST PROCEDURE FOR FALL/FALL (test_procedure_ff)
    /* define waiting for teammate... trial - FALL/FALL */
    var waiting_ff_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for opponent...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define bet statement... trial - FALL/FALL */
    var waitingforbet_ff_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your opponent bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    };

    /* define teammate bet image for FALL/FALL */
    var bet_ff_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your opponent bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>FALL</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000
    }; 

    /* define trial stimuli array for timeline variables */
    let test_stimuli_ff_2 = [
        // STACKS THAT FALL AND TEAMMATE PREDICTS FALL
        repo_site + 'images/easy-vcom=2-20-ff.png', repo_site + 'images/easy-vcom=4-19-ff.png', repo_site + 'images/easy-vcom=3-38-ff.png', repo_site + 'images/hard-vcom=3-82-ff.png', repo_site + 'images/hard-vcom=2-110-ff.png', 
        repo_site + 'images/hard-vcom=2-16-ff.png', repo_site + 'images/hard-vcom=1-95-ff.png', repo_site + 'images/hard-vcom=4-80-ff.png', repo_site + 'images/hard-vcom=1-50-ff.png', repo_site + 'images/hard-vcom=4-142-ff.png'
    ];

    /* define test trials */
    function participant_bet_ff_2(){
        return {
            type: jsPsychImageButtonResponse,
            stimulus: getRandomWithoutReplacement(test_stimuli_ff_2),
            choices: ['fall ◄', 'stand ►'],
            trial_duration: 5000
        };
    }

    // IF TIME RUNS OUT, SHOW THIS TRIAL SCREEN //
        var outoftimeConditional_a = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };


    /* define test procedure */
    var ifNode_a = {
        timeline: [outoftimeConditional_a],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var lastTimedData_a = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (lastTimedData_a) {
                return false;
            } else {
                return true;
            }
        }
    };


    /* define waiting for teammate trial - FALL/STAND */
    var waiting_fs_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for opponent...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define test procedure */
    function test_procedure_ff_2(){
        return {
            timeline: [waiting_ff_2, waitingforbet_ff_2, bet_ff_2, participant_bet_ff_2(), ifNode_a, waiting_fs_2],
            randomize_order: false,
            post_trial_gap: 500
        };
    }
    







    /* TEST PROCEDURE FOR FALL/STAND (test_procedure_fs)
    /* define bet statement... trial - FALL/FALL */
    var waitingforbet_fs_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your opponent bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    };

    /* define teammate bet image for FALL/STAND */
    var bet_fs_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your opponent bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>STAND</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000,
    }; 

    /* define trial stimuli array for timeline variables */
    var test_stimuli_fs_2 = [
        // STACKS THAT FALL AND TEAMMATE PREDICTS STAND
        repo_site + 'images/easy-vcom=1-87-fs.png', repo_site + 'images/easy-vcom=2-94-fs.png', repo_site + 'images/easy-vcom=3-142-fs.png', repo_site + 'images/easy-vcom=4-126-fs.png', repo_site + 'images/hard-vcom=1-95-fs.png',
        repo_site + 'images/hard-vcom=1-130-fs.png', repo_site + 'images/hard-vcom=2-20-fs.png', repo_site + 'images/hard-vcom=3-7-fs.png', repo_site + 'images/hard-vcom=3-110-fs.png', repo_site + 'images/hard-vcom=4-92-fs.png'
    ];

    /* define test trials */
    function participant_bet_fs_2(){
        return {
            type: jsPsychImageButtonResponse,
            stimulus: getRandomWithoutReplacement(test_stimuli_fs_2),
            choices: ['fall ◄', 'stand ►'],
            trial_duration: 5000
        };
    }

    /* if time runs out, show this trial screen */
        var outoftimeConditional_b = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };


    /* define test procedure */
    var ifNode_b = {
        timeline: [outoftimeConditional_b],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var lastTimedData_b = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (lastTimedData_b) {
                return false;
            } else {
                return true;
            }
        }
    };

    /* define waiting for teammate trial - STAND/STAND */
    var waiting_ss_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for opponent...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define test procedure */
    function test_procedure_fs_2(){
        return {
            timeline: [waitingforbet_fs_2, bet_fs_2, participant_bet_fs_2(), ifNode_b, waiting_ss_2],
            randomize_order: true,
            post_trial_gap: 500
        };
    }




    /* TEST PROCEDURE FOR STAND/STAND (test_procedure_ss)
    /* define bet statement... trial - STAND/STAND */
    var waitingforbet_ss_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your opponent bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    };

    /* define teammate bet image for STAND/STAND */
    var bet_ss_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your opponent bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>STAND</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000
    }; 

    /* define trial stimuli array for timeline variables */
    var test_stimuli_ss_2 = [
        // STACKS THAT STAND AND TEAMMATE PREDICTS STAND
        repo_site + 'images/easy-411-ss.png', repo_site + 'images/easy-590-ss.png', repo_site + 'images/hard-40-ss.png', repo_site + 'images/hard-82-ss.png', repo_site + 'images/hard-214-ss.png', 
        repo_site + 'images/hard-321-ss.png', repo_site + 'images/hard-345-ss.png', repo_site + 'images/hard-402-ss.png', repo_site + 'images/hard-549-ss.png',  repo_site + 'images/hard-600-ss.png'
    ];

    /* define test trials */
    function participant_bet_ss_2(){
        return {
            type: jsPsychImageButtonResponse,
            stimulus: getRandomWithoutReplacement(test_stimuli_ss_2),
            choices: ['fall ◄', 'stand ►'],
            trial_duration: 5000
        };
    }

    // IF TIME RUNS OUT, SHOW THIS TRIAL SCREEN //
        var outoftimeConditional_c = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };


    /* define test procedure */
    var ifNode_c = {
        timeline: [outoftimeConditional_c],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var lastTimedData_c = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (lastTimedData_c) {
                return false;
            } else {
                return true;
            }
        }
    };

    /* define waiting for teammate trial - STAND/FALL */
    var waiting_sf_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: '<p style="font-size: 20px;">Waiting for opponent...</p>',
        choices: "NO_KEYS",
        trial_duration: 2000,
    };

    /* define test procedure */
    function test_procedure_ss_2(){
        return {
            timeline: [waitingforbet_ss_2, bet_ss_2, participant_bet_ss_2(), ifNode_c, waiting_sf_2],
            randomize_order: false,
            post_trial_gap: 500
        };
    }





    /* TEST PROCEDURE FOR STAND/FALL (test_procedure_sf)
    /* define bet statement... trial - STAND/FALL */
    var waitingforbet_sf_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your opponent bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;">&nbsp</p>
      `,
        choices: "NO_KEYS",
        trial_duration: 2000,
        post_trial_gap: 0
    };

    /* define teammate bet image for STAND/FALL */
    var bet_sf_2 = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus:  `
        <p style="font-size: 20px;">Your opponent bets 15 cents that the next tower will</p> 
        <p style="font-size:20px;"><strong>STAND</strong></p>
      `,
        choices: "NO_KEYS",
        trial_duration: 4000
    }; 

    /* define trial stimuli array for timeline variables */
    var test_stimuli_sf_2 = [
        // STACKS THAT STAND AND TEAMMATE PREDICTS FALL
        repo_site + 'images/easy-538-sf.png', repo_site + 'images/hard-2-sf.png', repo_site + 'images/hard-49-sf.png', repo_site + 'images/hard-177-sf.png', repo_site + 'images/hard-316-sf.png',
        repo_site + 'images/hard-334-sf.png', repo_site + 'images/hard-367-sf.png', repo_site + 'images/hard-492-sf.png', repo_site + 'images/hard-570-sf.png'
    ];

    /* define test trials */
    function participant_bet_sf_2(){
        return {
            type: jsPsychImageButtonResponse,
            stimulus: getRandomWithoutReplacement(test_stimuli_sf_2),
            choices: ['fall ◄', 'stand ►'],
            trial_duration: 5000
        }
    };

    // IF TIME RUNS OUT, SHOW THIS TRIAL SCREEN //
        var outoftimeConditional_d = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `
        <p>Sorry, too slow!</p>
        <p style="font-size:18px;color:red;">Please press the space bar to continue.</p>
      `,
        choices: " ",
        post_trial_gap: 500
    };

    /* define test procedure */
    var ifNode_d = {
        timeline: [outoftimeConditional_d],
        conditional_function: function(){
            // get the data from the previous trial,
            // and check whether about 5000 seconds
            var lastTimedData_d = jsPsych.data.getLastTrialData().select('rt').subset(function(x){ return x < 5000; }).max();
            if (lastTimedData_d) {
                return false;
            } else {
                return true;
            }
        }
    };

    /* define test procedure */
    function test_procedure_sf_2(){
        return {
            timeline: [waitingforbet_sf_2, bet_sf_2, participant_bet_sf_2(), ifNode_d],
            randomize_order: false,
            post_trial_gap: 500
        };
    }
    



    /* compiled test procedure with pictures */
    const timelinearray2 = [test_procedure_ff_2(), test_procedure_fs_2(), test_procedure_ss_2(), test_procedure_sf_2()];
    const shuffledArray2 = timelinearray2.sort((a, b) => 0.5 - Math.random());
    /* define test procedure */
    function test_procedure_compiled_2(){
        return {
            timeline: shuffledArray2
        };
    }
    for(let i = 0; i < test_stimuli_ff_2.length; i++) {
        timeline.push(test_procedure_compiled_2());
    }
