var ranks = require('./jsonFiles/RankTitles.json');
var firstSyllables = require('./jsonFiles/FirstSyllables.json');
var secondSyllables = require('./jsonFiles/SecondSyllables.json');
var lastNames = require('./jsonFiles/LastNames.json');

var self = module.exports = {

  getORCName: function () {
    var rankIndex = Math.floor((Math.random() * ranks.length));
    var firstSyllableIndex = Math.floor((Math.random() * firstSyllables.length));
    var secondSyllableIndex = Math.floor((Math.random() * secondSyllables.length));
    var lastNameIndex = Math.floor((Math.random() * lastNames.length));
    return ranks[rankIndex] + ' ' + firstSyllables[firstSyllableIndex] + secondSyllables[secondSyllableIndex] + ' ' + lastNames[lastNameIndex];
  },

  getORCNames : function (amount) {

    var names = [];
    for (var cnt = 0; cnt < amount; cnt++) {
      names.push(self.getORCName());
    }

    return names;

  }


}








