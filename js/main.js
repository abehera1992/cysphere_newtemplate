
$(function() {

	var scroll = new SmoothScroll('a[href*="#"]');

    $('#app-dev').click(function(event) {
        event.preventDefault();
        $('#applicationPlaceholder').show();
        $('#BusinessIntelligencePlaceholder').hide();
        $('#InfrastructureCommPlaceholder').hide();
        $('#ProjectManagementPlaceholder').hide();
        $('#BusinessAnalysisPlaceholder').hide();
        $('#QualityAssurancePlaceholder').hide();
        $('#RemoteOracleDBASupportServicesPlaceholder').hide();
        $('#TrainingEduServicesPlaceholders').hide();
        //dynamic CSS for click events:
        $(this).addClass('current');
        $('#bi-dw').removeClass('current');
        $('#infra-comm').removeClass('current');
        $('#pm').removeClass('current');
        $('#ba').removeClass('current');
        $('#qa').removeClass('current');
        $('#ora-db').removeClass('current');
        $('#train-edu').removeClass('current');
      });
      $('#bi-dw').click(function(event) {
          event.preventDefault();
          $('#applicationPlaceholder').hide();
          $('#BusinessIntelligencePlaceholder').show();
          $('#InfrastructureCommPlaceholder').hide();
          $('#ProjectManagementPlaceholder').hide();
          $('#BusinessAnalysisPlaceholder').hide();
          $('#QualityAssurancePlaceholder').hide();
          $('#RemoteOracleDBASupportServicesPlaceholder').hide();
          $('#TrainingEduServicesPlaceholders').hide();
          //dynamic CSS for click events:
          $(this).addClass('current');
          $('#app-dev').removeClass('current');
          $('#infra-comm').removeClass('current');
          $('#pm').removeClass('current');
          $('#ba').removeClass('current');
          $('#qa').removeClass('current');
          $('#ora-db').removeClass('current');
          $('#train-edu').removeClass('current');
        });
    
        $('#infra-comm').click(function(event) {
            event.preventDefault();
            $('#applicationPlaceholder').hide();
            $('#BusinessIntelligencePlaceholder').hide();
            $('#InfrastructureCommPlaceholder').show();
            $('#ProjectManagementPlaceholder').hide();
            $('#BusinessAnalysisPlaceholder').hide();
            $('#QualityAssurancePlaceholder').hide();
            $('#RemoteOracleDBASupportServicesPlaceholder').hide();
            $('#TrainingEduServicesPlaceholders').hide();
            //dynamic CSS for click events:
            $(this).addClass('current');
            $('#app-dev').removeClass('current');
            $('#bi-dw').removeClass('current');
            $('#pm').removeClass('current');
            $('#ba').removeClass('current');
            $('#qa').removeClass('current');
            $('#ora-db').removeClass('current');
            $('#train-edu').removeClass('current');
          });
    
          $('#pm').click(function(event) {
              event.preventDefault();
              $('#applicationPlaceholder').hide();
              $('#BusinessIntelligencePlaceholder').hide();
              $('#InfrastructureCommPlaceholder').hide();
              $('#ProjectManagementPlaceholder').show();
              $('#BusinessAnalysisPlaceholder').hide();
              $('#QualityAssurancePlaceholder').hide();
              $('#RemoteOracleDBASupportServicesPlaceholder').hide();
              $('#TrainingEduServicesPlaceholders').hide();
              //dynamic CSS for click events:
              $(this).addClass('current');
              $('#app-dev').removeClass('current');
              $('#bi-dw').removeClass('current');
              $('#infra-comm').removeClass('current');
              $('#ba').removeClass('current');
              $('#qa').removeClass('current');
              $('#ora-db').removeClass('current');
              $('#train-edu').removeClass('current');
            });
    
           $('#ba').click(function(event) {
              event.preventDefault();
              $('#applicationPlaceholder').hide();
              $('#BusinessIntelligencePlaceholder').hide();
              $('#InfrastructureCommPlaceholder').hide();
              $('#ProjectManagementPlaceholder').hide();
              $('#BusinessAnalysisPlaceholder').show();
              $('#QualityAssurancePlaceholder').hide();
              $('#RemoteOracleDBASupportServicesPlaceholder').hide();
              $('#TrainingEduServicesPlaceholders').hide();
              //dynamic CSS for click events:
              $(this).addClass('current');
              $('#app-dev').removeClass('current');
              $('#bi-dw').removeClass('current');
              $('#infra-comm').removeClass('current');
              $('#pm').removeClass('current');
              $('#qa').removeClass('current');
              $('#ora-db').removeClass('current');
              $('#train-edu').removeClass('current');
    
          });
          $('#qa').click(function(event) {
             event.preventDefault();
             $('#applicationPlaceholder').hide();
             $('#BusinessIntelligencePlaceholder').hide();
             $('#InfrastructureCommPlaceholder').hide();
             $('#ProjectManagementPlaceholder').hide();
             $('#BusinessAnalysisPlaceholder').hide();
             $('#QualityAssurancePlaceholder').show();
             $('#RemoteOracleDBASupportServicesPlaceholder').hide();
             $('#TrainingEduServicesPlaceholders').hide();
             //dynamic CSS for click events:
             $(this).addClass('current');
             $('#app-dev').removeClass('current');
             $('#bi-dw').removeClass('current');
             $('#infra-comm').removeClass('current');
             $('#pm').removeClass('current');
             $('#ba').removeClass('current');
             $('#ora-db').removeClass('current');
             $('#train-edu').removeClass('current');
         });
    
         $('#ora-db').click(function(event) {
            event.preventDefault();
            $('#applicationPlaceholder').hide();
            $('#BusinessIntelligencePlaceholder').hide();
            $('#InfrastructureCommPlaceholder').hide();
            $('#ProjectManagementPlaceholder').hide();
            $('#BusinessAnalysisPlaceholder').hide();
            $('#QualityAssurancePlaceholder').hide();
            $('#RemoteOracleDBASupportServicesPlaceholder').show();
            $('#TrainingEduServicesPlaceholders').hide();
            //dynamic CSS for click events:
            $(this).addClass('current');
            $('#app-dev').removeClass('current');
            $('#bi-dw').removeClass('current');
            $('#infra-comm').removeClass('current');
            $('#pm').removeClass('current');
            $('#ba').removeClass('current');
            $('#qa').removeClass('current');
            $('#train-edu').removeClass('current');
        });
        $('#train-edu').click(function(event) {
           event.preventDefault();
           $('#applicationPlaceholder').hide();
           $('#BusinessIntelligencePlaceholder').hide();
           $('#InfrastructureCommPlaceholder').hide();
           $('#ProjectManagementPlaceholder').hide();
           $('#BusinessAnalysisPlaceholder').hide();
           $('#QualityAssurancePlaceholder').hide();
           $('#RemoteOracleDBASupportServicesPlaceholder').hide();
           $('#TrainingEduServicesPlaceholders').show();
           //dynamic CSS for click events:
           $(this).addClass('current');
           $('#app-dev').removeClass('current');
           $('#bi-dw').removeClass('current');
           $('#infra-comm').removeClass('current');
           $('#pm').removeClass('current');
           $('#ba').removeClass('current');
           $('#qa').removeClass('current');
           $('#ora-db').removeClass('current');
       });
    
    });
    