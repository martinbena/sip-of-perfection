import { formatCurrency } from "../utilities/helpers";

function PreOrderSummary({ preorder, fetcher, forwardedRef }) {
  if (preorder.length > 0)
    return (
      <div ref={forwardedRef} className="mx-auto max-w-4xl space-y-8">
        <div className="bg-commontexttintdark py-3.5 text-center text-white">
          <h3 className="font-heading text-lg font-semibold capitalize">
            Pre-order summary
          </h3>
        </div>
        <div>
          <ul className="divide-y divide-commontext border-b border-t border-commontext">
            {preorder.map((item) => (
              <li key={item.id} className="space-y-1.5 py-3">
                <div className="flex items-center justify-between gap-4 text-sm">
                  <p>
                    <span className="font-semibold">
                      {item.quantity}&times;
                    </span>{" "}
                    {item.name}
                  </p>
                  <p className="font-semibold">
                    {formatCurrency(item.totalPrice)}
                  </p>
                </div>
                {/* <p className="text-xs capitalize italic">
                  {!fetcher.state !== "loading" &&
                    fetcher.data
                      ?.find((el) => el.id === item.id)
                      .ingredients.join(", ")}
                </p> */}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between bg-commontexttintdark px-6 py-3.5 font-semibold text-white">
          <p className="text-lg">Total value:</p>
          <p>
            {formatCurrency(
              preorder.reduce((sum, item) => sum + item.totalPrice, 0),
            )}
          </p>
        </div>
      </div>
    );
}

export default PreOrderSummary;
