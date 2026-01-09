export function EventBinding() {
  function Database(e) {
    console.log(`
      X position: ${e.clientX} \n
      Button Name: ${e.target.name}
      `);
  }

  return (
    <div>
      <h2>Event Binding</h2>
      <button name="Insert" onClick={Database}>
        Insert
      </button>
      <button name="Update" onClick={Database}>
        Update
      </button>
      <button name="Delete" onClick={Database}>
        Delete
      </button>
    </div>
  );
}
