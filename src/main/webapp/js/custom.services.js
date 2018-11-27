app.factory('PlantaoAPIService', function($http, calendarConfig){

  var actions = [{
    label: '<i class=\'glyphicon glyphicon-pencil\'></i>',
    onClick: function(args) {
      alert.show('Edited', args.calendarEvent);
    }
  }, {
    label: '<i class=\'glyphicon glyphicon-remove\'></i>',
    onClick: function(args) {
      alert.show('Deleted', args.calendarEvent);
    }
  }];
 
  let mockData = [{
          title: 'Dr. Pedro Alves (07 - 13h) - HCA - Cirugia',
          medico: 'Dra. Fernanda Santos',
          responsavel: false, // Caso true, sinaliza que o médico é responsável no Plantão
          local: 'Hospital Espanhol - UTI',
          color: '#CCC',
          startsAt: moment().subtract(9, 'days').toDate(),
          endsAt: moment().subtract(9, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dra. Fernanda Santos (07 - 13h) - Hospital Aliança - UTI',
          medico: 'Dra. Fernanda Santos',
          responsavel: true,
          local: 'Hospital Espanhol - UTI',
          color: '#CCC',
          startsAt: moment().subtract(6, 'days').toDate(),
          endsAt: moment().subtract(6, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dr. José Herique (07 - 13h) - Hospital Espanhol - UTI',
          medico: 'Dra. Carla Silva',
          responsavel: false,
          local: 'Hospital Espanhol - UTI',
          color: '#CCC',
          startsAt: moment().subtract(1, 'days').toDate(),
          endsAt: moment().subtract(1, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dra. Carla Silva (07 - 13h) - HCA - Pediatria',
          medico: 'Dra. Carla Silva',
          responsavel: false,
          local: 'HCA - Pediatria',
          color: '#CCC',
          startsAt: new Date(),
          endsAt: new Date(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dr. João Fernandes (07 - 13h) - Hospital Porrtuguês - Unidade Móvel',
          medico: 'Dr. João Fernandes',
          responsavel: true,
          local: 'Hospital Porrtuguês - Unidade Móvel',
          color: '#CCC',
          startsAt: new Date(),
          endsAt: new Date(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dra. Bruna Werneck (07 - 13h) - HCA - UTI',
          medico: 'Dra. Bruna Werneck',
          responsavel: false,
          local: 'HCA - UTI',
          color: '#CCC',
          startsAt: moment().add(1, 'days').toDate(),
          endsAt: moment().add(1, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
      ];
  
      return {
        getData: function(){
          return mockData
        },
        getRealData: function(){
          return $http.get('https://jsonplaceholder.typicode.com/todos/')
        }
      }
    
});   