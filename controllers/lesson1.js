const charlesRoute = (req, res) => {
    res.send('Charles Hemedi');
  };
  
  const estherRoute = (req, res) => {
    res.send('Esther Grace');
  };

  const gedeonRoute = (req, res) => {
    res.send('Gedeon Noe');
  };
  
  module.exports = {
    gedeonRoute,
    charlesRoute,
    estherRoute,
  };