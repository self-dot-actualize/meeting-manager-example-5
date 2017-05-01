/* global Vue, $ */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      meetings: [],
      nameFilter: '',
      sortAttribute: 'address',
      sortAscending: false
    },
    mounted: function() {
      $.get('/api/v1/meetings', function(responseData) {
        this.meetings = responseData;
      }.bind(this));
    },
    computed: {
      modifiedMeetings: function() {
        var filteredMeetings = this.meetings.filter(function(meeting) {
          return meeting.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
        }.bind(this));
        var sortedMeetings = filteredMeetings.sort(function(m1, m2) {
          console.log(m1[this.sortAttribute], m2[this.sortAttribute]);
          if (this.sortAscending) {
            return m1[this.sortAttribute].localeCompare(m2[this.sortAttribute]);
          } else {
            return m2[this.sortAttribute].localeCompare(m1[this.sortAttribute]);
          }
        }.bind(this));
        return sortedMeetings;
      }
    },
    methods: {
      changeSortAttribute: function(inputAttribute) {
        if (inputAttribute !== this.sortAttribute) {
          this.sortAscending = true;
        } else {
          this.sortAscending = !this.sortAscending;
        }
        this.sortAttribute = inputAttribute;
      }
    }
  });
});
