export function DataBinding() {
  var flipkartData = [
    {
      Title: "Apple iPhone 16 (Black, 128 GB)",
      Price: 57999,
      Rating: 4.6,
      Photo: "appleblack.png",
      Features: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "48MP + 12MP | 12MP Front Camera",
        "A18 Chip, 6 Core Processor Processor",
        "1 year warranty for phone and 1 year warranty for in Box Accessories",
      ],
    },
    {
      Title: "Apple iPhone 16 (Ultramarine, 128 GB)",
      Price: 57999,
      Rating: 4.6,
      Photo: "appleblue.png",
      Features: [
        "128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "48MP + 12MP | 12MP Front Camera",
        "A18 Chip, 6 Core Processor Processor",
        "1 year warranty for phone and 1 year warranty for in Box Accessories",
      ],
    },
  ];

  return (
    <>
      {flipkartData.map((item) => (
        <div key={item.Title} className="row mt-2">
          <div className="col-3">
            <img
              src={item.Photo}
              alt=""
              style={{ width: "100%", height: "75%" }}
            />
          </div>
          <div className="col-6">
            <div className="h4 text-primary mb-2">{item.Title}</div>
            <div
              className="bg-success p-1 text-white text-center rounded rounded-pill"
              style={{ width: "60px" }}
            >
              {item.Rating} <span className="bi bi-star-fill"></span>
            </div>
            <div>
              <ul>
                {item.Features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-3 h2">
            {item.Price.toLocaleString("en-in", {
              style: "currency",
              currency: "INR",
            })}
          </div>
        </div>
      ))}
    </>
  );
}
