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
 
  let mockData =[
        {
          title: 'Dr. Pedro Alves (07 - 13h) - HCA - Cirugia',
          medicoId: 1,
          medico: 'Dra. Fernanda Santos',
          responsavel: false, // Caso true, sinaliza que o médico é responsável no Plantão
          local: 'Hospital Espanhol - UTI',
          horario: '07:00 - 19:00',
          color: calendarConfig.colorTypes.warning,
          startsAt: moment().subtract(9, 'days').toDate(),
          endsAt: moment().subtract(9, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dra. Fernanda Santos (07 - 13h) - Hospital Aliança - UTI',
          medicoId: 2,
          medico: 'Dra. Fernanda Santos',
          responsavel: false,
          local: 'Hospital Espanhol - UTI',
          horario: '07:00 - 19:00',
          color: calendarConfig.colorTypes.warning,
          startsAt: moment().subtract(6, 'days').toDate(),
          endsAt: moment().subtract(6, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dra. Fernanda Santos (07 - 13h) - Hospital Aliança - UTI',
          medicoId: 2,
          medico: 'Dra. Fernanda Santos',
          responsavel: false,
          local: 'Hospital Espanhol - UTI',
          horario: '07:00 - 19:00',
          color: calendarConfig.colorTypes.warning,
          startsAt: moment().subtract(9, 'days').toDate(),
          endsAt: moment().subtract(9, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dr. José Herique (07 - 13h) - Hospital Espanhol - UTI',
          medicoId: 3,
          medico: 'Dra. Carla Silva',
          responsavel: false,
          local: 'Hospital Espanhol - UTI',
          horario: '07:00 - 19:00',
          color: calendarConfig.colorTypes.warning,
          startsAt: moment().subtract(1, 'days').toDate(),
          endsAt: moment().subtract(1, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dra. Carla Silva (07 - 13h) - HCA - Pediatria',
          medicoId: 4,
          medico: 'Dra. Carla Silva',
          responsavel: false,
          local: 'HCA - Pediatria',
          horario: '07:00 - 19:00',
          color: calendarConfig.colorTypes.warning,
          startsAt: new Date(),
          endsAt: new Date(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dr. João Fernandes (07 - 13h) - Hospital Porrtuguês - Unidade Móvel',
          medicoId: 5,
          medico: 'Dr. João Fernandes',
          responsavel: true,
          local: 'Hospital Porrtuguês - Unidade Móvel',
          horario: '07:00 - 19:00',
          color: calendarConfig.colorTypes.warning,
          startsAt: new Date(),
          endsAt: new Date(),
          draggable: false,
          resizable: true,
          actions: actions
        },
        {
          title: 'Dra. Bruna Werneck (07 - 13h) - HCA - UTI',
          medicoId: 6,
          medico: 'Dra. Bruna Werneck',
          responsavel: false,
          local: 'HCA - UTI',
          horario: '07:00 - 19:00',
          color: calendarConfig.colorTypes.warning,
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