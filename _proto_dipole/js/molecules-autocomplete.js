$(function(){
  var molecules = [
    { value: 'Ethanol', data: 'ethanol.pdb' },
    { value: 'Aspirin', data: 'aspirin.pdb' },
    { value: 'Caffeine', data: 'caffeine.pdb' },
    { value: 'Nicotine', data: 'nicotene.pdb' },
    { value: 'LSD', data: 'lsd.pdb' },
    { value: 'Cocaine', data: 'cocaine.pdb' },
    { value: 'Cholesterol', data: 'cholesterol.pdb' },
    { value: 'Lycopene', data: 'lycopene.pdb' },
    { value: 'Glucose', data: 'glucose.pdb' },
    { value: 'Aluminum oxide', data: 'AL203.pdb' },
    { value: 'Cubane', data: 'cubane.pdb' },
    { value: 'Copper', data: 'cu.pdb' },
    { value: 'Fluorite', data: 'caf2.pdb' },
    { value: 'Salt', data: 'nacl.pdb' },
    { value: 'YBCO superconductor', data: 'ybco.pdb' },
    { value: 'Buckyball', data: 'buckyball.pdb' },
    { value: 'Graphite', data: 'graphite.pdb' },
  ];
  /*
  $( "#SearchInput" ).autocomplete({ .... }).data( "autocomplete" )._renderItem = function( ul, item ) {
        return $( "<li></li>" )
            .data( "item.autocomplete", item )
            .append( "<a>" + "<img src='" + item.imgsrc + "' />" + item.id+ " - " + item.label+ "</a>" )
            .appendTo( ul );
    };
*/



  // setup autocomplete function pulling from molecules[] array
  $('#field-null').autocomplete({
    lookup: molecules,
    /*
    formatResult: function(response){
        console.log('formatResult response = ', response);   
        return true;
    },*/
    /*
    transformResult: function(response){
        console.log('transformResult response = ', response);   
    },*/
    onSearchComplete: function(response){
        console.log('onSearchComplete response = ', response);   
    },
    onSelect: function (suggestion) {
        var thehtml = '<strong>Molecule Name:</strong> ' + suggestion.value + ' <br> <strong>File:</strong> ' + suggestion.data;

        $('#outputcontent').html(thehtml);
        console.log('suggestion - ' + suggestion.value + '\tdata - ', suggestion.data);
        loadMolecule( "models/molecules/" + suggestion.data );

    }
  });
  

});