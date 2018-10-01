const movies = [
  { title: 'Frozen', rating: 4.5, hasWatched: true },
  { title: 'Shrek', rating: 5, hasWatched: false },
  { title: 'James Bond', rating: 3.5, hasWatched: true },
  { title: 'Black Swan', rating: 4, hasWatched: false },
  { title: 'Planet Earth', rating: 5, hasWatched: true },
  { title: 'les Misrables', rating: 2, hasWatched: false },
];

movies.forEach((e) => {
  console.log(buildString(e));
});

function buildString(e) {
  const str = `"${e.title}" - ${e.rating} stars`;
  if (e.hasWatched) {
    return `You have watched ${str}`;
  }
  return `You haven't seen ${str}`;
}
