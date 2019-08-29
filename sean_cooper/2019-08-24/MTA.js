MTA.js

const N_line = [
  'Times Square',
  '34th',
  '28th',
  '23rd',
  'Union Square',
  '8th'
];

const L_line = [
  '8th',
  '6th',
  'Union Square',
  '3rd',
  '1st'
];

const six_line = [
  'Grand Central',
  '33rd',
  '28th',
  '23rd',
  'Union Square',
  'Astor Place'
];

function travel_plan (start_line, start_stop, dest_line, dest_stop) {
  let start_index = start_line.indexOf(start_stop);
  let dest_index = dest_line.indexOf(dest_stop);
  let first_line_stops = [];
  let second_line_stops = [];

  // same line logic
  if(start_line === dest_line) {

    //go backwards on the line
    if(start_index > dest_index) {
      for(let i = start_index - 1; i > dest_index - 1; i--) {
        first_line_stops.push(start_line[i])
      };
      console.log(`You must travel through the following stops: ${first_line_stops}`);
      return console.log(`${first_line_stops.length} stops total.`);
    };

    //go forwards on the line
    if(start_index < dest_index) {
      for(let i = start_index + 1; i < dest_index + 1; i++) {
        first_line_stops.push(start_line[i])
      };
      console.log(`You must travel through the following stops: ${first_line_stops}`);
      return console.log(`${first_line_stops.length} stops total.`);
    };
  };

  //start to line.timesquare
  if(start_line !== dest_line) {
    let start_to_ts = start_line.indexOf('Union Square');
    let dest_ts = dest_line.indexOf('Union Square');
    //go backwards to timequare
    if(start_index > start_to_ts) {
      for(let i = start_index; i > start_to_ts - 1; i--) {
        first_line_stops.push(start_line[i])
      };
      console.log(`You must travel through the following stops: ${first_line_stops}`);
    };
    //go forwards to timequare
    if(start_index < start_to_ts) {
      for(let i = start_index; i < start_to_ts + 1; i++) {
        first_line_stops.push(start_line[i])
      };
      console.log(`You must travel through the following stops: ${first_line_stops}`);
    };
    console.log('change at Union Square')
    //dest.timesquare to dest.dest backward
    if(dest_index < dest_ts) {
      for(let i = dest_ts; i > dest_index - 1; i--) {
        second_line_stops.push(dest_line[i])
      };
      console.log(`Your journey continues through the following stops: ${second_line_stops}`);
      return console.log(`${first_line_stops.length + second_line_stops.length} stops total.`);
    };
    //dest.timesquare to dest.dest forward
    if(dest_index > dest_ts) {
      for(let i = dest_ts; i < dest_index + 1; i++) {
        second_line_stops.push(dest_line[i])
      };
      console.log(`Your journey continues through the following stops: ${second_line_stops}`);
      return console.log(`${first_line_stops.length + second_line_stops.length} stops total.`);
    };
  };
};