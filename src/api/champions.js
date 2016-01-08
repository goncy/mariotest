//ng-data
module.exports = new Backbone.Collection([
  {name: "Ahri", linea: "mid", sexo:"femenino", dificultad:"80", strongAgains:['Orianna'], weakAgainst:['Diana', 'Akali']},
  {name: "Diana", linea: "mid", sexo:"femenino", dificultad:"90", strongAgains:['Ahri', 'Akali'], weakAgainst:['Orianna']},
  {name: "Akali", linea: "mid", sexo:"femenino", dificultad:"60", strongAgains:['Orianna'], weakAgainst:['Diana', 'Ahri']},
  {name: "Orianna", linea: "mid", sexo:"femenino", dificultad:"100", strongAgains:['Diana', 'Akali'], weakAgainst:['Ahri']}
]);