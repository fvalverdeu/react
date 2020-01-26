var students = [
  {
    name: "Jon Snow",
    background: "Nothing"
  },
  {
    name: "Robb",
    background: "kind of king"
  },
  {
    name: "Sansa",
    background: "Queen"
  },
  {
    name: "Arya",
    background: "Killer"
  },
  {
    name: "Rickon",
    background: "useless"
  }
]
const getPerformance = function(callback) {
  const starts = performance.now();
  callback();
  const ends = performance.now();
  console.log(ends - starts);
}
getPerformance(function() {
  for (let s = 0; s < students.length; s++) {
    const student = students[s];
    console.log(student);
  }
})
getPerformance(function() {
  for (const s in students) {
    const student = students[s]
    console.log(student);
  }
})