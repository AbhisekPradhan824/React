export function MouseClick2() {
  function handleDoubleClick(e) {
    window.open(e.target.src, "Mobile", "width:400 height:400");
  }
  return (
    <div className="container-fluid">
      <h1>preview Image</h1>
      <img
        src="m1.png"
        alt="m1"
        height={300}
        width={300}
        onDoubleClick={handleDoubleClick}
      />
      <p>Double Click to open in large</p>
    </div>
  );
}
