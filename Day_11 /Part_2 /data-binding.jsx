export function DataBinding() {
  var Menu = [
    { Category: "Electronics", Products: ["Television", "Mobile", "Watches"] },
    {
      Category: "Fashion",
      Products: ["Men's Fashion", "Kids Fashion", "Women Fashion"],
    },
  ];
  return (
    <>
      <ol>
        {Menu.map((item) => (
          <li key={item.Category}>
            {item.Category}
            <ul>
              {item.Products.map((product) => (
                <li key={product}>{product}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </>
  );
}

