app.controller('AfterLoginController', function($scope) {
 //
});

app.controller('AfterHomeController', function($scope) {
 //
});

app.controller('AfterPageController', function($scope) {
 //
});

app.controller('CalendarCtrl', function($scope, moment, alert, calendarConfig) {
      calendarConfig.dateFormatter = 'moment';
      var vm = this;
  
      //These variables MUST be set as a minimum for the calendar to work
      vm.calendarView = 'month';
      vm.viewDate = new Date();
      console.log(vm.calendarView);
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
      vm.week = {};
      vm.week.colors = [
        '#CCCCCC',
        '#b3e2b0',
        '#b8e2ff',
        '#f17878',
        '#b8e2ff'
        ];
      
      vm.setColor = function(event){
        console.log(event);
      }
      
     
      // MODEL Calendário:
      
      vm.events = [
        {
          title: 'Dr. Pedro Alves (07 - 13h) - HCA - Cirugia',
          medico: 'Dra. Fernanda Santos',
          responsavel: false, // Caso true, sinaliza que o médico é responsável no Plantão
          local: 'Hospital Espanhol - UTI',
          color: calendarConfig.colorTypes.warning,
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
          color: calendarConfig.colorTypes.warning,
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
          color: calendarConfig.colorTypes.warning,
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
          color: calendarConfig.colorTypes.warning,
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
          color: calendarConfig.colorTypes.warning,
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
          color: calendarConfig.colorTypes.warning,
          startsAt: moment().add(1, 'days').toDate(),
          endsAt: moment().add(1, 'days').toDate(),
          draggable: false,
          resizable: true,
          actions: actions
        },
      ];
  
      vm.cellIsOpen = true;
  
      vm.updateWeekCollors = function(){
        console.log(vm.semanas);
      }
  
      vm.addEvent = function() {
        vm.events.push({
          title: 'New event',
          startsAt: moment().startOf('day').toDate(),
          endsAt: moment().endOf('day').toDate(),
          color: calendarConfig.colorTypes.important,
          draggable: true,
          resizable: true
        });
      };
  
      vm.eventClicked = function(event) {
        vm.currentEvent = event;
        
        let convertDate = {
          inicio: new Date(vm.currentEvent.startsAt),
          final: new Date(vm.currentEvent.endsAt),
        };
        
        vm.currentEvent.convertDates  = {
          inicio: moment(convertDate.inicio).format('DD/MM/YYYY'),
          final: moment(convertDate.final).format('DD/MM/YYYY')
        };
        
        angular.element('#plantaoModal').modal('show');
      };
  
      vm.eventEdited = function(event) {
        alert.show('Edited', event);
      };
  
      vm.eventDeleted = function(event) {
        alert.show('Deleted', event);
      };
  
      vm.eventTimesChanged = function(event) {
        alert.show('Dropped or resized', event);
      };
  
      vm.toggle = function($event, field, event) {
        $event.preventDefault();
        $event.stopPropagation();
        event[field] = !event[field];
      };
  
      vm.timespanClicked = function(date, cell) {
  
        if (vm.calendarView === 'month') {
          if ((vm.cellIsOpen && moment(date).startOf('day').isSame(moment(vm.viewDate).startOf('day'))) || cell.events.length === 0 || !cell.inMonth) {
            vm.cellIsOpen = false;
          } else {
            vm.cellIsOpen = true;
            vm.viewDate = date;
          }
        } else if (vm.calendarView === 'year') {
          if ((vm.cellIsOpen && moment(date).startOf('month').isSame(moment(vm.viewDate).startOf('month'))) || cell.events.length === 0) {
            vm.cellIsOpen = false;
          } else {
            vm.cellIsOpen = true;
            vm.viewDate = date;
          }
        }
  
      };
    });
    
  app.factory('alert', function($modal) {

    function show(action, event) {
      return $modal.open({
        templateUrl: './modalContent.html',
        controller: function() {
          var vm = this;
          vm.action = action;
          vm.event = event;
          vm.medico = "Dr. Pablo Mendes"
        },
        controllerAs: 'vm'
      });
    }

    return {
      show: show
    };

  });
  