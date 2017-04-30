/* global Vue, $ */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      meetings: []
    },
    mounted: function() {
      $.get('/api/v1/meetings', function(responseData) {
        this.meetings = responseData;
      }.bind(this));
    }
  });
});
