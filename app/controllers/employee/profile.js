import Ember from 'ember';

/**
 * Generates some random integer data.
 */
var randomIntegers = function(size) {
  var arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor((Math.random() * 100) + 1);
  }
  return arr;
};


/**
 * Color themes.
 *
 * A hash that maps color palette's from http://www.color-hex.com/ to the
 * http://www.chartjs.org/ datasets specification.
 *
 */
var colorThemes = {
  redAndOrange: {
    0: {
      fillColor: "rgba(242,149,7,0.2)",
      strokeColor: "rgba(231,96,7,1.0)",
      pointColor: "rgba(231,96,7,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(231,96,7,1.0)",
    },
    1: {
      fillColor: "rgba(231,96,22,0.2)",
      strokeColor: "rgba(231,96,22,1.0)",
      pointColor: "rgba(231,96,22,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(231,96,22,1.0)",
    },
    2: {
      fillColor: "rgba(216,79,19,0.2)",
      strokeColor: "rgba(216,79,19,1.0)",
      pointColor: "rgba(216,79,19,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(216,79,19,1.0)",
    },
    3: {
      fillColor: "rgba(191,23,23,0.2)",
      strokeColor: "rgba(191,23,23,1.0)",
      pointColor: "rgba(191,23,23,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(191,23,23,1.0)",
    },
    4: {
      fillColor: "rgba(156,6,6,0.2)",
      strokeColor: "rgba(156,6,6,1.0)",
      pointColor: "rgba(156,6,6,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(156,6,6,1.0)",
    },
  },
  blueThePinup: {
    0: {
      fillColor: "rgba(24,35,92,0.2)",
      strokeColor: "rgba(24,35,92,1.0)",
      pointColor: "rgba(24,35,92,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(24,35,92,1.0)",
    },
    1: {
      fillColor: "rgba(115,128,197,0.2)",
      strokeColor: "rgba(115,128,197,1.0)",
      pointColor: "rgba(115,128,197,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(115,128,197,1.0)",
    },
    2: {
      fillColor: "rgba(134,208,214,0.2)",
      strokeColor: "rgba(134,208,214,1.0)",
      pointColor: "rgba(134,208,214,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(134,208,214,1.0)",
    },
    3: {
      fillColor: "rgba(195,228,238,0.2)",
      strokeColor: "rgba(195,228,238,1.0)",
      pointColor: "rgba(195,228,238,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(195,228,238,1.0)",
    },
    4: {
      fillColor: "rgba(223,228,236,0.2)",
      strokeColor: "rgba(223,228,236,1.0)",
      pointColor: "rgba(223,228,236,1.0)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(223,228,236,1.0)",
    },
  },
};


export default Ember.Controller.extend({

  numberData: Ember.computed('model', function() {
    return {
      labels: ["January", "February", "March",
               "April", "May", "June",
               "July", "August", "September",
               "October", "November", "December"],
      datasets: [
        {
          label: "First dataset",
          fillColor: colorThemes.blueThePinup[0].fillColor,
          strokeColor: colorThemes.blueThePinup[0].strokeColor,
          pointColor: colorThemes.blueThePinup[0].pointColor,
          pointStrokeColor: colorThemes.blueThePinup[0].pointStrokeColor,
          pointHighlightFill: colorThemes.blueThePinup[0].pointHighlightFill,
          pointHighlightStroke: colorThemes.blueThePinup[0].pointHighlightStroke,
          data: randomIntegers(12),
        },
        {
          label: "Second dataset",
          fillColor: colorThemes.blueThePinup[1].fillColor,
          strokeColor: colorThemes.blueThePinup[1].strokeColor,
          pointColor: colorThemes.blueThePinup[1].pointColor,
          pointStrokeColor: colorThemes.blueThePinup[1].pointStrokeColor,
          pointHighlightFill: colorThemes.blueThePinup[1].pointHighlightFill,
          pointHighlightStroke: colorThemes.blueThePinup[1].pointHighlightStroke,
          data: randomIntegers(12),
        },
        {
          label: "Third dataset",
          fillColor: colorThemes.blueThePinup[2].fillColor,
          strokeColor: colorThemes.blueThePinup[2].strokeColor,
          pointColor: colorThemes.blueThePinup[2].pointColor,
          pointStrokeColor: colorThemes.blueThePinup[2].pointStrokeColor,
          pointHighlightFill: colorThemes.blueThePinup[2].pointHighlightFill,
          pointHighlightStroke: colorThemes.blueThePinup[2].pointHighlightStroke,
          data: randomIntegers(12),
        }
      ]
    };
  }),

  optionData: function() {
    return {
      responsive: true,
      bezierCurve: false,
      pointDotRadius: 4,
    };
  }.property()
});
