
export default class Data {

    constructor() {

    }


}

Data.candidates;
Data.firstPreferenceVotes;

Data.getCandidates = () => {
  let promise = new Promise((resolve, reject) => {
    if(!Data.candidates) {
      // load from server
      $.get('https://elec-960cb.firebaseio.com/housecandidates.json', (data) => {
        Data.candidates = data;
        resolve(Data.candidates);
      });
    } else {
      // serve local
      resolve(Data.candidates);
    }
  });

  return promise;
};

Data.getFirstPreferenceVotes = () => {
  let promise = new Promise((resolve, reject) => {
    if(!Data.firstPreferenceVotes) {
      $.get('https://elec-960cb.firebaseio.com/housefirstprefresults.json', (data) => {
        Data.firstPreferenceVotes = data;
        resolve(Data.firstPreferenceVotes);
      });
    } else {
      resolve(Data.firstPreferenceVotes);
    }

  });

  return promise;
};
 
