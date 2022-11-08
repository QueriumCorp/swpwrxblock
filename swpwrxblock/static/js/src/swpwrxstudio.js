/* Javascript for SWPWRXStudio. */
function SWPWRXStudio(runtime, element, question) {
    // Stub notify so xblock doesnt crash in dev
    if( typeof runtime.notify === "undefined" ){
        runtime.notify = function(){ console.info(arguments); }
    }
 
    var handlerUrl = runtime.handlerUrl(element, 'save_question');

    $('.save-button', element).click(function(eventObject) {
        var data = {

            q_weight : $('#q_weight', element).val(),
            q_max_attempts : $('#q_max_attempts', element).val(),
            q_option_showme : $('#q_option_showme', element).val(),
            q_option_hint : $('#q_option_hint', element).val(),
            q_grade_showme_ded : $('#q_grade_showme_ded', element).val(),
            q_grade_hints_count : $('#q_grade_hints_count', element).val(),
            q_grade_hints_ded : $('#q_grade_hints_ded', element).val(),
            q_grade_errors_count : $('#q_grade_errors_count', element).val(),
            q_grade_errors_ded : $('#q_grade_errors_ded', element).val(),
            q_grade_min_steps_count : $('#q_grade_min_steps_count', element).val(),
            q_grade_min_steps_ded : $('#q_grade_min_steps_ded', element).val(),

            id : $('#id', element).val(),
            label : $('#label', element).val(),
            stimulus : $('#stimulus', element).val(),
            definition : $('#definition', element).val(),
            qtype : $('#qtype', element).val(),
            display_math : $('#display_math', element).val(),
            hint1 : $('#hint1', element).val(),
            hint2 : $('#hint2', element).val(),
            hint3 : $('#hint3', element).val(),
            swpwr_id : $('#swpwr_id', element).val(),
            swpwr_problem : $('#swpwr_problem', element).val(),
            swpwr_prepare_2_correct : $('#swpwr_prepare_2_correct', element).val(),
            swpwr_prepare_3_correct : $('#swpwr_prepare_3_correct', element).val(),
            swpwr_organize_1_schema_name : $('#swpwr_organize_1_schema_name', element).val(),
            swpwr_explain_2_correct : $('#swpwr_explain_2_correct', element).val(),
            swpwr_review_1_correct : $('#swpwr_review_1_correct', element).val(),

        }

        runtime.notify('save', {state:'start'});
        $.ajax({
            type: "POST",
            url: handlerUrl,
            data: JSON.stringify(data),
            success: null
        }).done( function(response){
            runtime.notify('save', {state:'end'});
        });
    });

    $('.cancel-button', element).click(function(eventObject) {
        runtime.notify('cancel', {});
    });
 
    /* PAGE LOAD EVENT */
    $(function ($) {
    });

}

