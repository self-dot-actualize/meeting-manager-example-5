/* global Vue, $ */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      meetings: [],
      nameFilter: ''
    },
    mounted: function() {
      $.get('/api/v1/meetings', function(responseData) {
        this.meetings = responseData;
      }.bind(this));
    },
    computed: {
      modifiedMeetings: function() {
        return this.meetings.filter(function(meeting) {
          return meeting.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
        }.bind(this));
      }
    }
  });
});
