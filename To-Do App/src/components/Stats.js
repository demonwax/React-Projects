export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>You do not have anything in the list!</em>
      </p>
    );

  const numPacked = items.filter((items) => items.packed).length;
  const percent = Math.round((numPacked / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You have completed all your tasks 😊 !"
          : `📝 You have ${items.length} tasks on your list, and you already done
        ${numPacked}(${percent}%)`}
      </em>
    </footer>
  );
}
