1. in js template literals starts and ends with ``, not "" , ''
  !!!!!!!

2. comparing or executing conditional operators on object properties are done without curly braces:
  const personToShow = showAll ? persons : persons.filter((person)=>person.name === newSearch)
