cc_validation.js

let cc = '0000-0000-0000-0000';

function validate_cc(string) {
  let clean_cc = cc.replace(/-/g,'');
  
  console.log(clean_cc);
};