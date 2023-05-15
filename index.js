function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }

  function matchName(drivers, str) {
    return drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase());
  }
  